import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppContextProvider } from '../../src/context/AppContextProvider';
import { AppContext } from '../../src/context/AppContext';
import en from '../../src/i18n/en';
import es from '../../src/i18n/es';

const TestConsumer = () => {
  const { state } = React.useContext(AppContext);
  return (
    <div>
      <span data-testid="play-label">{state.i18n?.play}</span>
      <span data-testid="hiding">{String(state.hiding)}</span>
    </div>
  );
};

describe('AppContextProvider', () => {
  test('provides English i18n by default', () => {
    render(
      <AppContextProvider language="en">
        <TestConsumer />
      </AppContextProvider>,
    );
    expect(screen.getByTestId('play-label').textContent).toBe(en.play);
  });

  test('provides Spanish i18n when language is es', () => {
    render(
      <AppContextProvider language="es">
        <TestConsumer />
      </AppContextProvider>,
    );
    expect(screen.getByTestId('play-label').textContent).toBe(es.play);
  });

  test('provides initial hiding state as false', () => {
    render(
      <AppContextProvider language="en">
        <TestConsumer />
      </AppContextProvider>,
    );
    expect(screen.getByTestId('hiding').textContent).toBe('false');
  });

  test('renders children', () => {
    render(
      <AppContextProvider language="en">
        <div data-testid="child">child content</div>
      </AppContextProvider>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
