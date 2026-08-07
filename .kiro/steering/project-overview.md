# ReactJS Media Player — Resumen del Proyecto

## ¿Qué es este proyecto?

**reactjs-media-player** es un paquete NPM (v0.1.7-alpha.0, estado **alpha**) que provee un componente React para reproducir video y audio. Soporta múltiples formatos y protocolos de streaming, incluyendo HLS, DASH, FLV y archivos MP4/WebM/Ogg nativos. También expone un modo standalone (sin React) para uso directo en HTML.

- Repositorio: https://github.com/soyvillareal/reactjs-media-player
- Demo: https://soyvillareal.github.io/reactjs-media-player
- Licencia: MIT
- Autor: Oscar Garcés

---

## Estado actual

- Versión: `0.1.7-alpha.0` — todavía en alpha, API puede cambiar.
- El código fuente real vive en `src/` (JSX/JS), que se compila hacia `lib/` (CJS) con esbuild.
- `lib/` contiene los archivos compilados (CJS). **No editar `lib/` directamente**, siempre editar `src/`.
- Los tipos TypeScript viven en `types/` y se copian a la raíz en `prepublishOnly`.

---

## Estructura del repositorio

```
src/                  ← Código fuente (JSX/JS) — lo que se debe editar
lib/                  ← Salida compilada CJS (generado por `npm run build:lib`)
dist/                 ← Bundles IIFE/ESM para uso sin bundler (generado en build)
types/                ← Declaraciones TypeScript (.d.ts)
examples/react/       ← App de ejemplo en React + TypeScript
demo/                 ← Assets estáticos del demo (copiados desde examples/react/public)
test/                 ← Tests con Jest + @testing-library/react
scripts/builder/      ← CLI de build personalizado sobre esbuild
.kiro/                ← Configuración de Kiro (steering, hooks, etc.)
```

### Estructura interna de `src/` (y su espejo en `lib/`)

| Carpeta | Responsabilidad |
|---|---|
| `core/` | `PlayerCore` (componente `<video>` puro), `PlayerProxy` (orquesta lifecycle, progress, seek), constantes de SDKs externos |
| `MediaPlayer/` | Factory `createMediaPlayer()` que ensambla el componente final exportado; `MediaPlayerSkin` pasa props a `PlayerSkin` |
| `PlayerSkin/` | Toda la UI del reproductor (controles, barra de tiempo, volumen, fullscreen, settings, context menu) |
| `hooks/` | Hooks reutilizables: `useAutoHide`, `useFullscreen`, `useTimeSlider`, `useVolume`, `useVolumeSlider`, `useSettingsOptions`, `usePlayerSkinWrapped`, `usePlayerSkinWrapper` |
| `hooks/context/` | `useAppDispatch` y `useAppSelector` para el contexto global del player |
| `context/` | `AppContext`, `AppContextProvider`, `AppReducer` — estado global del skin (visibilidad de menús, sliders, refs) |
| `i18n/` | Traducciones en inglés (`en.js`) y español (`es.js`), con un `index.js` que selecciona por prop `language` |
| `utils/` | Helpers: `player.js` (lazy load SDKs, detección de features), `cookie.js`, `device.js`, `index.js` |
| `patterns.js` | Regex para detectar extensiones de archivo: `VIDEO_EXTENSIONS`, `HLS_EXTENSIONS`, `DASH_EXTENSIONS`, `FLV_EXTENSIONS`, función `canPlay()` |
| `standalone.js` / `standalone.jsx` | Wrapper de `ReactDOM.createRoot` para uso sin React en el proyecto consumidor |
| `index.js` | Entry point principal: exporta `createMediaPlayer(corePlayer)` como default |

---

## Flujo de datos y arquitectura

```
ReactJSMediaPlayer (clase generada por createMediaPlayer)
  └── MediaPlayerSkin (gestiona estado: playing, volume, quality, etc.)
        ├── PlayerProxy (orquesta lifecycle React del <video>, progress loop, seek)
        │     └── PlayerCore (renderiza <video>, maneja HLS/DASH/FLV via SDKs externos)
        └── PlayerSkin (UI del reproductor, forwardRef + React.memo)
              ├── PreventedTip   — mensaje cuando el video está bloqueado
              ├── PlayState      — overlay central (spinner, play/pause grande)
              ├── TopState       — mensajes de estado superiores
              ├── Controls       — barra inferior de controles
              │     ├── PlayButton
              │     ├── Volume (+ VolumeSlider)
              │     ├── PlayTime
              │     ├── SettingsButton (speed + quality con submenú)
              │     └── FullscreenButton
              ├── TimeSlider     — barra de progreso con Timelens (thumbnail preview via VTT) y TimeTooltip
              └── ContextMenu    — menú de clic derecho (loop, PiP, fullscreen)
```

El estado global del skin se maneja con un `useReducer` propio (no Redux) expuesto via Context. Las acciones son: `i18n`, `contextMenuVisible`, `controlsHovering`, `hiding`, `menuVisible`, `subMenuVisible`, `timeSliding`, `volumeSliding`, `videoRef`, `playerRef`.

---

## Formatos soportados

| Formato | Extensión | SDK externo (cargado dinámicamente) |
|---|---|---|
| Video nativo | `.mp4`, `.webm`, `.ogg`, `.mov`, `.m4v` | — (HTML5 `<video>`) |
| HLS | `.m3u8` | hls.js v1.5.7 (desde jsdelivr) |
| DASH | `.mpd` | dash.js v4.7.4 (desde cdnjs) |
| FLV | `.flv` | flv.js v1.6.2 (desde jsdelivr) |
| MediaStream / Blob URL | — | — |

Los SDKs se cargan bajo demanda desde CDN con `load-script`. Se puede hacer override poniendo el SDK en `window` antes de montar el componente.

---

## Dependencias de producción (runtime)

| Paquete | Uso |
|---|---|
| `deepmerge` ^4 | Merge profundo de la prop `config` con los defaults |
| `load-script` ^1 | Carga dinámica de SDKs HLS/DASH/FLV desde CDN |
| `memoize-one` ^5 | Memoización de `getActivePlayer`, `getConfig`, `getAttributes` |
| `minimatch` ^5 | Coincidencia de patrones glob (usado en build/utils) |
| `prop-types` ^15 | Validación de props en runtime |
| `react-fast-compare` ^3 | Comparación profunda eficiente en `shouldComponentUpdate` y `React.memo` |

**Peer dependencies**: `react ^18.3.1`, `react-dom ^18.3.1`

**Styled-components** (v6) se usa en el skin para los componentes estilizados, pero está en `devDependencies` (el consumidor debe tenerlo o se asume que el CSS está inlined en el bundle).

---

## Dependencias de desarrollo

| Paquete | Uso |
|---|---|
| `esbuild` ^0.20 | Compilador/bundler principal |
| `builder` (local `scripts/builder`) | CLI personalizado sobre esbuild con soporte glob, watch, livereload |
| `jest` ^29 + `jest-environment-jsdom` | Test runner |
| `esbuild-jest` | Transformador de Jest |
| `@testing-library/react` ^16 | Utilidades de testing |
| `@testing-library/jest-dom` ^6 | Matchers DOM adicionales |
| `typescript` (via @types/*) | Solo tipado, no transpilación TS en src/ |
| `eslint` ^8 + plugins | Linting |
| `prettier` ^3 | Formateo |
| `auto-changelog` ^2 | Generación automática de CHANGELOG |
| `rimraf` ^3 | Limpieza de carpetas en `npm run clean` |

---

## Scripts de NPM importantes

| Script | Qué hace |
|---|---|
| `npm run build` | Compila todo: `lib/` (CJS), `lazy/`, `dist/` (IIFE + standalone + ESM) |
| `npm run build:lib` | Solo compila `src/**` → `lib/` en formato CJS |
| `npm run build:dist` | Bundle IIFE para uso sin bundler (`dist/ReactJSMediaPlayer.js`) |
| `npm run build:standalone` | Bundle IIFE standalone (`dist/ReactJSMediaPlayer.standalone.js`) |
| `npm run build:es6` | Bundle ESM standalone |
| `npm run start` | Dev server con watch: build lib + demo + livereload |
| `npm run test` | Jest (con coverage) |
| `npm run test:cov` | Jest con reporte de cobertura |
| `npm run lint` | ESLint sobre `src/` |
| `npm run clean` | Elimina `lib/`, `lazy/`, `demo/`, `coverage/`, `dist/` |

---

## Formatos de salida del paquete

| Archivo | Formato | Uso |
|---|---|---|
| `lib/index.js` | CJS | Import principal (`require('reactjs-media-player')`) |
| `lib/standalone.js` | CJS | Standalone con `ReactDOM.createRoot` |
| `lazy/` | CJS | Lazy loading (import dinámico) |
| `dist/ReactJSMediaPlayer.js` | IIFE | Uso directo en `<script>`, requiere React global |
| `dist/ReactJSMediaPlayer.standalone.js` | IIFE | Uso directo en `<script>`, incluye React |
| `dist/ReactJSMediaPlayer.standalone.es6.js` | ESM | Import nativo en navegadores modernos |

---

## Testing

- Framework: **Jest 29** con **jsdom** como entorno
- Tests en `test/**/*.spec.js`
- Transformer: `esbuild-jest` (no Babel)
- Setup: `jest.setup.js` y `test/setupTests.js`
- Coverage se genera en `coverage/` + reporte XML JUnit en `coverage/report.xml`
- Para correr sin watch: `npm run test` (Jest corre una vez por defecto sin `--watch`)
- Las carpetas `lib/`, `dist/`, `demo/`, `examples/` están excluidas del coverage

---

## i18n

El player soporta idiomas mediante la prop `language`. Actualmente hay traducciones para:
- `en` (inglés) — default
- `es` (español)

Las cadenas incluyen: controles de reproducción, calidad, velocidad, fullscreen, mute, mensajes de error/estado.

---

## Características especiales del skin

- **Auto-hide de controles**: los controles se ocultan automáticamente con `useAutoHide` cuando el video está reproduciéndose y el usuario no interactúa.
- **Thumbnail preview (Timelens)**: al pasar el cursor por el `TimeSlider`, muestra un thumbnail del video usando un archivo `.vtt` de sprites (prop `spriteVTTFile`).
- **Calidad adaptativa**: `measureNetworkSpeedGeneratedFile()` mide la velocidad de internet y selecciona automáticamente la mejor calidad disponible (`getRecommendedVideoQuality`). El resultado se cachea en cookie `internet_speed` por 7 días.
- **Keyboard shortcuts**: Space (play/pause), F (fullscreen), M (mute), ArrowLeft/Right (seek ±5s), ArrowUp/Down (volumen ±5%).
- **Context menu**: clic derecho muestra opciones de loop, PiP, fullscreen.
- **Picture-in-Picture**: soporte nativo + webkit fallback.
- **Modo live**: cuando `live={true}` se oculta el `TimeSlider`.
- **Poster**: imagen de portada que se muestra cuando `currentTime === 0` o el video terminó.

---

## Notas importantes para el desarrollo

1. **El código fuente está en `src/`**, no en `lib/`. La carpeta `lib/` es salida compilada y está en `.gitignore`/`.npmignore` de forma inversa (se publica pero no se versiona en el repo fuente para desarrollo).
2. Los archivos en `lib/` son el resultado de compilar con esbuild, y contienen boilerplate de CJS interop — es normal.
3. `styled-components` se usa para el styling del skin. Si se añaden nuevos componentes visuales, seguir el patrón `ComponentName.styled.js`.
4. El contexto global (`AppContext`) maneja solo estado de UI del skin, no estado de reproducción. El estado de reproducción (playing, volume, etc.) fluye por props desde arriba.
5. La prop `sources` (array de `{ src, resolution }`) se usa para múltiples calidades; `url` es para una sola fuente.
6. Para agregar un nuevo idioma: crear `src/i18n/XX.js` con las mismas keys que `en.js` y registrarlo en `src/i18n/index.js`.
