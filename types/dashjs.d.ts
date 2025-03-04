import * as CommonMediaLibrary from '@svta/common-media-library';

// Type definitions for dash.js 4.7.4
// Project: https://github.com/Dash-Industry-Forum/dash.js
// Definitions by: Dash Industry Forum <https://github.com/Dash-Industry-Forum>
// Definitions: https://github.com/Dash-Industry-Forum/dash.js/index.d.ts
// TypeScript Version: 5.1.3

declare namespace dashjs {

    /**
     * Core
     */

    interface Debug {
        getLogger(): Logger;

        setLogTimestampVisible(flag: boolean): void;

        setCalleeNameVisible(flag: boolean): void;
    }

    interface EventBus {
        on(type: string, listener: any, scope: any, options?: object): void;

        off(type: string, listener: any, scope: any): void;

        trigger(type: string, payload?: object, filters?: object): void;

        reset(): void;
    }

    interface FactoryMaker {
        extend(name: string, childInstance: object, override: boolean, context: object): void;

        getSingletonInstance(context: object, className: string): any,

        setSingletonInstance(context: object, className: string, instance: object): void;

        deleteSingletonInstances(context: object): void;

        getFactoryByName(name: string, factoriesArray: Factory[]): Factory;

        updateFactory(name: string, factoriesArray: Factory[]): void;

        getSingletonFactory(classConstructor: ClassConstructor): SingletonFactory,

        getSingletonFactoryByName(name: string): SingletonFactory;

        updateSingletonFactory(name: string, factory: SingletonFactory): void;

        getClassFactory(classConstructor: ClassConstructor): Factory;

        getClassFactoryByName(name: string): Factory;

        updateClassFactory(name: string, factory: Factory): void;
    }

    interface Logger {
        debug(...params: any[]): void;

        info(...params: any[]): void;

        warn(...params: any[]): void;

        error(...params: any[]): void;

        fatal(...params: any[]): void;
    }

    function Version(): string;

    const enum LogLevel {
        LOG_LEVEL_NONE = 0,
        LOG_LEVEL_FATAL = 1,
        LOG_LEVEL_ERROR = 2,
        LOG_LEVEL_WARNING = 3,
        LOG_LEVEL_INFO = 4,
        LOG_LEVEL_DEBUG = 5
    }

    /**
     * Dash - Controllers
     **/

    interface ContentSteeringController {
        reset(): void;

        setConfig(config: object): void;

        loadSteeringData(): Promise<any>;

        getCurrentSteeringResponseData(): ContentSteeringResponse;

        shouldQueryBeforeStart(): boolean;

        getSteeringDataFromManifest(): ContentSteering[];

        stopSteeringRequestTimer(): void;

        getSynthesizedBaseUrlElements(referenceElements: BaseURL[]): BaseURL[];

        getSynthesizedLocationElements(referenceElements: MpdLocation[]): MpdLocation;

        initialize(): void
    }

    interface ThroughputController {

        initialize(): void;

        setConfig(config: object): void;

        getArithmeticMean(dict: ThroughputDictEntry[], sampleSize: number): number

        getByteSizeWeightedArithmeticMean(dict: ThroughputDictEntry[], sampleSize: number): number

        getDateWeightedArithmeticMean(dict: ThroughputDictEntry[], sampleSize: number): number

        getHarmonicMean(dict: ThroughputDictEntry[], sampleSize: number): number

        getByteSizeWeightedHarmonicMean(dict: ThroughputDictEntry[], sampleSize: number): number

        getDateWeightedHarmonicMean(dict: ThroughputDictEntry[], sampleSize: number): number

        getEwma(dict: ThroughputEwmaDictEntry[], halfLife: object, useMin: boolean): number

        getZlema(dict: ThroughputDictEntry[], sampleSize: number): number

        getAverageThroughput(mediaType: MediaType, calculationMode: string, sampleSize: number): number

        getSafeAverageThroughput(mediaType: MediaType, calculationMode: string, sampleSize: number): number

        getAverageLatency(mediaType: MediaType, calculationMode: string, sampleSize: number): number

        getRawThroughputData(mediaType: MediaType): number

        reset(): void;
    }

    interface RepresentationController {
        getStreamId(): string;

        getType(): string;

        getDate(): AdaptationSet;

        isUpdating(): boolean;

        updateData(newRealAdaptation: object, availableRepresentations: object[], type: string, isFragmented: boolean, quality: number): any;

        //Promise.all(iterable) can be solved promise, asynchronous promise, pending promise

        getCurrentRepresentation(): object;

        getCurrentRepresentation(): Representation;

        getRepresentationForQuality(quality: number): object | null;

        prepareQualityChange(newQuality: number): void;

        reset(): void;
    }

    interface SegmentBaseController {
        initialize(): void;

        getSegmentBaseInitSegment(data: any): Promise<any>;

        getSegmentList(e: object): Promise<any>;

        reset(): void;
    }

    interface SegmentsController {
        initialize(isDynamic: boolean): void;

        updateInitData(voRepresentation: Representation, hasInitialization: boolean): Promise<any>;

        updateSegmentData(voRepresentation: Representation, hasSegments: boolean): Promise<any>;

        getSegmentByIndex(representation: Representation, index: number, lastSegmentTime: number): any;

        getSegmentByTime(representation: Representation, time: number): any;

        getMediaFinishedInformation(representation: Representation): any;
    }

    /**
     * Dash - Models
     **/

    interface DashManifestModel {
        getIsTypeOf(adaptation: object, type: string): boolean;

        getIsFragmented(adaptation: object): boolean;

        getIsAudio(adaptation: object): boolean;

        getIsVideo(adaptation: object): boolean;

        getIsText(adaptation: object): boolean;

        getIsMuxed(adaptation: object): boolean;

        getIsImage(adaptation: object): boolean;

        getLanguageForAdaptation(adaptation: object): string;

        getViewpointForAdaptation(adaptation: object): DescriptorType[];

        getRolesForAdaptation(adaptation: object): DescriptorType[];

        getAccessibilityForAdaptation(adaptation: object): DescriptorType[];

        getAudioChannelConfigurationForAdaptation(adaptation: object): DescriptorType[];

        getAudioChannelConfigurationForRepresentation(adaptation: object): DescriptorType[];

        getRepresentationSortFunction(): (a: object, b: object) => number;

        processAdaptation(realAdaptation: object): object;

        getRealAdaptations(manifest: object, periodIndex: number): any[];

        getRealPeriods(manifest: object): any[];

        getRealPeriodForIndex(index: number, manifest: object): any;

        getAdaptationForId(id: string, manifest: object, periodIndex: number): any;

        getAdaptationForIndex(index: number, manifest: object, periodIndex: number): any;

        getIndexForAdaptation(realAdaptation: object, manifest: object, periodIndex: number): number;

        getAdaptationsForType(manifest: object, periodIndex: number, type: string): any[];

        getCodec(adaptation: object, representationId: number, addResolutionInfo: boolean): string;

        getMimeType(adaptation: object): object;

        // MimeType is deprecated as a type
        getKID(adaptation: object): any;

        getLabelsForAdaptation(adaptation: object): any[];

        getContentProtectionData(adaptation: object): any[];

        getIsDynamic(manifest: object): boolean;

        getId(manifest: object): string;

        hasProfile(manifest: object, profile: object): boolean;

        getDuration(manifest: object): number;

        getBandwidth(representation: object): number;

        getManifestUpdatePeriod(manifest: object, latencyOfLastUpdate?: number): number;

        getPublishTime(manifest: object): Date | null;

        getRepresentationCount(adaptation: object): number;

        getBitrateListForAdaptation(realAdaptation: object): { bandwidth: number, width: number, height: number, scanType: string | null, id: string | null };

        getSelectionPriority(realAdaptation: object): number;

        getEssentialPropertiesForRepresentation(realRepresentation: object): { schemeIdUri: string, value: string }

        getRepresentationFor(index: number, adaptation: object): object;

        getRealAdaptationFor(voAdaptation: object): object;

        getRepresentationsForAdaptation(voAdaptation: object): object[];

        getAdaptationsForPeriod(voPeriod: Period): AdaptationSet[];

        getRegularPeriods(mpd: Mpd): Period[];

        getPeriodId(realPeriod: Period, i: number): string;

        getMpd(manifest: object): Mpd;

        getEndTimeForLastPeriod(voPeriod: Period): number;

        getEventsForPeriod(period: Period): any[];

        getEventStreams(inbandStreams: EventStream[], representation: Representation): EventStream[];

        getEventStreamForAdaptationSet(manifest: object, adaptation: object): EventStream[];

        getEventStreamForRepresentation(manifest: object, representation: Representation): EventStream[];

        getUTCTimingSources(manifest: object): any[];

        getBaseURLsFromElement(node: object): BaseURL[];

        getLoction(manifest: object): string | undefined;

        getSuggestedPresentationDelay(mpd: Mpd): number;

        getAvailabilityStartTime(mpd: Mpd): number;

        getServiceDescriptions(manifest: object): serviceDescriptions;

        getSupplementalProperties(adaptation: object): object;

        getSegmentAlignment(adaptation: object): boolean;

        getSubSegmentAlignment(adaptation: object): boolean;
    }

    interface PatchManifestModel {
        getIsPatch(patch: object): boolean;

        getPublishTime(patch: object): number | null;

        getOriginalPublishTime(patch: object): number | null;

        getMpdId(patch: object): string | null;

        getPatchOperations(patch: object): PatchOperation | [];
    }

    /**
     * Dash - Parser - Maps
     **/

    class CommonProperty {
        constructor(name: string);
    }

    class MapNode {
        constructor(name: string, properties: object, children: object);
    }

    class RepresentationBaseValuesMap extends MapNode {

    }

    class SegmentsValuesMap extends MapNode {

    }

    /**
     * Dash - Parser - Matchers
     **/

    class BaseMatcher {
        constructor(test: any, covnerter: any);
    }

    class DateTimeMatcher extends BaseMatcher {

    }

    class NumericMatcher extends BaseMatcher {

    }

    class StringMatcher extends BaseMatcher {

    }

    /**
     * Dash - Parser
     **/

    interface DashParser {
        getMatchers(): any;

        getIron(): any;

        parse(data: any): any;
    }

    interface objectiron {
        run(source: string): void;
    }

    /**
     * Dash - Utils
     **/

    interface SegmentBaseGetter {
        getMediaFinishedInformation(representation: Representation): MediaFinishedInformation;

        getSegmentByIndex(representation: Representation, index: number): any;

        getSegmentByTime(representation: Representation, requestedTime: number): any;
    }

    interface TemplateSegmentsGetter {
        getMediaFinishedInformation(representation: Representation): MediaFinishedInformation;

        getSegmentByIndex(representation: Representation, index: number): any;

        getSegmentByTime(representation: Representation, requestedTime: number): any;
    }

    interface TimelineConverter {
        initialize(): void;

        getClientTimeOffset(): number;

        setClientTimeOffset(): number;

        calcAvailabilityStartTimeFromPresentationTime(presentationEndTime: number, representation: Representation, isDynamic: boolean): number;

        calcAvailabilityEndTimeFromPresentationTime(presentationEndTime: number, representation: Representation, isDynamic: boolean, trueBool?: boolean): number;

        calcPresentationTimeFromWallTime(wallTime: number, period: Period): number;

        calcPresentationTimeFromMediaTime(mediaTime: number, representation: Representation): number;

        calcMediaTimeFromPresentationTime(presentationTime: number, representation: Representation): number;

        calcWallTimeForSegment(segment: any, isDynamic: boolean): number;

        calcTimeShiftBufferWindow(streams: any[], isDynamic: boolean): object;

        calcPeriodRelativeTimeFromMpdRelativeTime(representation: Representation, mpdRelativeTime: number): number;

        reset(): void;
    }

    interface TimelineSegmentsGetter {
        getSegmentByIndex(representation: Representation, index: number, lastSegmentTime: number): Segment | null;

        getSegmentByTime(representation: Representation, requestedTime: number): Segment | null;

        getMediaFinishedInformation(representation: Representation): number | object;
    }

    /**
     * Dash - Vo
     **/

    class AdaptationSet {
        period: Period | null;
        index: number;
        type: string | null;
    }

    interface ThroughputDictEntry {

        downloadTimeInMs: number;

        downloadedBytes: number;

        latencyInMs: number;

        serviceLocation: string;

        value: number;
    }

    interface ThroughputEwmaDictEntry {

        fastEstimate: number;

        slowEstimate: number;

        totalWeight: number;
    }

    interface BaseURL {
        url: string;
        serviceLocation: string;
        dvbPriority: number;
        dvbWeight: number;
        availabilityTimeOffset: number;
        availabilityTimeComplete: boolean;
        queryParams: object;
    }

    class MpdLocation {
        url: string;
        serviceLocation: string;
        queryParams: object;
    }

    class PatchLocation {
        url: string;
        serviceLocation: string;
        ttl: number;
        queryParams: object;
    }

    interface Event {
        type: string;
        duration: number;
        presentationTime: number;
        id: string | number;
        messageData: string;
        eventStream: EventStream;
        presentationTimeDelta: number;
    }

    interface EventStream {
        adaptationSet: AdaptationSet | null;
        representation: Representation | null;
        period: Period | null;
        timescale: number;
        value: string;
        schemeIdUri: string;
        presentationTimeOffset: number;
    }

    interface IManifestInfo {
        dvrWindowSize: number;
        availableFrom: Date;
        duration: number;
        isDynamic: boolean;
        loadedTime: Date;
        maxFragmentDuration: number;
        minBufferTime: number;
        serviceDescriptions: serviceDescriptions[]
        protocol?: string;
    }

    class MediaInfo {
        id: string | null;
        index: number | null;
        type: MediaType | null;
        streamInfo: StreamInfo | null;
        representationCount: number;
        labels: { text: string, lang?: string }[];
        lang: string | null;
        viewpoint: DescriptorType[] | null;
        accessibility: DescriptorType[] | null;
        audioChannelConfiguration: DescriptorType[] | null;
        roles: DescriptorType[] | null;
        codec: string | null;
        mimeType: string | null;
        contentProtection: any | null;
        isText: boolean;
        KID: any | null;
        bitrateList: Bitrate[];
        isFragmented: any | null;
        isEmbedded: any | null;
        selectionPriority: number;
        supplementalProperties: object;
        essentialProperties: object;
        segmentAlignment: boolean;
        subSegmentAlignment: boolean;
    }

    interface Mpd {
        manifest: object;
        suggestedPresentationDelay: number;
        availabiliyStartTime: number | null;
        availabilityEndTime: number;
        timeShiftBufferDepth: number;
        maxSegmentDuration: number;
        publishTime: number | null;
        minimumUpdatePeriod: number;
        mediaPresentationDuration: number;
    }

    class PatchOperation {
        action: any;
        xpath: any;
        value: string;
        position: any | null;

        getMpdTarget(root: any): any;
    }

    interface Period {
        id: string | null;
        index: number;
        duration: number;
        start: number;
        mpd: Mpd;
        nextPeriodId: string | null;
    }

    interface Representation {
        adaptation: AdaptationSet | null;
        availabilityTimeComplete: boolean;
        availabilityTimeOffset: number;
        availableSegmentsNumber: number;
        bandwidth: number;
        codecPrivateData: string | null;
        codecs: string | null;
        fragmentDuration: number | null;
        frameRate: number;
        height: number;
        id: string;
        index: number;
        indexRange: string | null;
        initialization: object | null;
        maxPlayoutRate: number;
        mediaFinishedInformation: MediaFinishedInformation;
        mediaInfo: MediaInfo | null;
        mimeType: string | null;
        mseTimeOffset: number;
        presentationTimeOffset: number;
        range: Range | null;
        scanType: string;
        segmentDuration: number;
        segmentInfoType: string | null;
        segments: any[];
        startNumber: number;
        timescale: number;
        width: number;
    }

    interface Segment {
        indexRange: any;
        index: number | null;
        mediaRange: any;
        media: any;
        duration: number;
        replacementTime: number;
        replacementNumber: number;
        mediaStartTime: number;
        presentationStartTime: number;
        availabilityStartTime: number;
        availabilityEndTime: number;
        wallStartTime: number;
        representation: Representation | null;
    }

    class SimpleXPath {
        constructor(selector: any);
    }

    class StreamInfo {
        id: string;
        index: number;
        start: number;
        duration: number;
        manifestInfo: IManifestInfo;
        isLast: boolean;
    }

    class UTCTiming {
        schemeIdUri: string;
        value: string;
    }

    class DescriptorType {
        schemeIdUri: string;
        value: string;
        id: string;
        dvbUrl?: string;
        dvbMimeType?: string;
        dvbFontFamily?: string;
    }

    class ContentSteeringResponse {
        version: number;
        ttl: number;
        reloadUri: string;
        pathwayPriority: string[];
        pathwayClones: object[];
    }

    class ContentSteering {
        defaultServiceLocation: string;
        defaultServiceLocationArray: string[];
        queryBeforeStart: boolean;
        serverUrl: string;
        clientRequirement: boolean;
    }

    class HttpLoaderRequest {
        url: string;
        method: string;
        withCredentials: boolean;
        request: FragmentRequest;
        onload: Function;
        onloadend: Function;
        onerror: Function;
        progress: Function;
        ontimeout: Function;
        loader: object;
        timeout: number;
        headers: object;
        response: object;
        reader: object;
    }

    /**
     * Dash
     **/

    interface DashAdapter {
        getMediaInfoForType(streamInfo: object, type: MediaType): MediaInfo | null;

        getIsMain(adaptation: object): boolean;

        getAdaptationForType(periodIndex: number, type: MediaType, streamInfo: object): object | null;

        areMediaInfosEqual(mInfoOne: MediaInfo, mInfoTwo: MediaInfo): boolean;

        getAllMediaInfoForType(streamInfo: object, type: MediaType, externalManifest?: object | null): any[];

        getRealAdaptation(streamInfo: StreamInfo, mediaInfo: MediaInfo): object;

        getEssentialPropertiesForRepresentation(representation: Representation): any[];

        getRealPeriodByIndex(index: number): object;

        getVoRepresentation(mediaInfo: MediaInfo): Representation[];

        getUTCTimingSources(): any[];

        getSuggestedPresentationDelay(): string;

        getAvailabilityStartTime(externalManifest: object): number;

        getIsDynamic(externalManifest: object): boolean;

        getDuration(externalManifest: object): number;

        getRegularPeriods(externalManifest: object): any[];

        getMpd(externalManifest?: object): Mpd;

        getLocation(manifest: object): MpdLocation[];

        getManifestUpdatePeriod(manifest: object, latencyOfLastUpdate?: number): number;

        getPublishTime(manifest: object): number | null;

        getPatchLocation(manifest: object): PatchLocation[];

        getIsDVB(manifest: object): boolean;

        getIsPatch(manifest: object): boolean;

        getBaseURLsFromElement(node: object): BaseURL[];

        getRepresentationSortFunction(): (a: object, b: object) => number;

        getCodec(adaptation: object, representationId: number, addResolutionInfo: boolean): string;

        getBandwidthForRepresentation(representationId: string, periodIdx: number): number;

        getIndexForRepresentation(representationId: string, periodIdx: number): number;

        /**
         * This method returns the current max index based on what is defined in the MPD.
         *
         * @param bufferType String 'audio' or 'video',
         * @param periodIdx Make sure this is the period index not id
         */
        getMaxIndexForBufferType(bufferType: MediaType, periodIdx: number): number;

        getPeriodbyId(id: string): object | null;

        getIsTypeOf(adaptation: object, type: string): boolean;

        reset(): void;

        isPatchValid(manifest: object, patch: object): boolean;

        applyPatchToManifest(manifest: object, patch: object): void;
    }

    interface DashHandler {
        initialize(isDynamic: boolean): void;

        getStreamId(): string;

        getType(): string;

        on(type: AdaptationSetRemovedNoCapabilitiesEvent['type'], listener: (e: AdaptationSetRemovedNoCapabilitiesEvent) => void, scope?: object): void;

        on(type: string, listener: (e: Event) => void, scope?: object): void;


        off(type: string, listener: (e: any) => void, scope?: object): void;

        getStreamInfo(): StreamInfo;

        reset(): void;

        getInitRequest(mediaInfo: MediaInfo, representation: Representation): Request | null;

        isLastSegmentRequested(representation: Representation, bufferingTime: number): boolean;

        getSegmentRequestForTime(mediaInfo: MediaInfo, representation: Representation, time: number): Request;

        getNextSegmentRequestIdempotent(mediaInfo: MediaInfo, representation: Representation): FragmentRequest | null;

        getNextSegmentRequest(mediaInfo: MediaInfo, representation: Representation): FragmentRequest | null;

        repeatSegmentRequest(mediaInfo: MediaInfo, representation: Representation): FragmentRequest | null;

        getValidTimeCloseToTargetTime(time: number, mediaInfo: MediaInfo, representation: Representation, targetThreshold: number): number;

        getValidTimeAheadOfTargetTime(time: number, mediaInfo: MediaInfo, representation: Representation): number;

        getCurrentIndex(): number;
    }

    interface DashMetrics {
        getCurrentRepresentationSwitch(type: MediaType): ICurrentRepresentationSwitch;

        addRepresentationSwitch(mediaType: MediaType, t: Date, mt: Date, to: string, lto: string): void;

        getCurrentBufferState(type: MediaType): IBufferState;

        getCurrentBufferLevel(type: MediaType): number;

        addBufferLevel(mediaType: MediaType, t: number, level: number): void;

        addBufferState(mediaType: MediaType, state: string, target: number): void;

        clearAllCurrentMetrics(): void;

        getCurrentHttpRequest(type: MediaType): object;

        getHttpRequests(type: MediaType): object[];

        addRequestsQueue(mediaType: MediaType, loadingRequests: any[], executedRequests: any[]): void;

        getCurrent(metrics: MetricsList, metricName: string): IDroppedFrames;

        getCurrentDroppedFrames(): IDroppedFrames;

        addDroppedFrames(quality: number): void;

        getCurrentSchedulingInfo(type: MediaType): object;

        addSchedulingInfo(request: SchedulingInfo, state: string): void;

        getCurrentDVRInfo(type?: MediaType): IDVRInfo;

        addDVRInfo(mediaType: MediaType, currentTime: Date, mpd: Mpd, range: Range): void;

        getCurrentManifestUpdate(): any;

        updateManifestUpdateInfo(updateFields: any[]): void;

        addManifestUpdateStreamInfo(streamInfo: StreamInfo): void;

        addManifestUpdate(request: ManifestUpdate): void;

        addHttpRequest(request: HTTPRequest, responseURL: string, responseStatus: number, responseHeaders: object, traces: object): void;

        addManifestUpdateRepresentationInfo(representation: Representation, mediaType: MediaType): void;

        getCurrentLiveLatency(): number;

        getLatestFragmentRequestHeaderValueByID(id: string): string;

        addPlayList(): void;

        createPlaylistMetrics(mediaStartTime: number, startReason: string): void;

        createPlaylistTraceMetrics(representationId: number, mediaStartTime: number, speed: number): void;

        updatePlayListTraceMetrics(traceToUpdate: object): void;

        pushPlaylistTraceMetrics(endTime: number, reason: string): void;

        addDVBErrors(errors: object): void;

        getLatestMPDRequestHeaderValueByID(type: MediaType, id: string): string;

        resetInitialSettings(): void;
    }

    interface SegmentBaseLoader {
        initialize(): void;

        setConfig(config: object): void;

        loadInitialization(representation: Representation, mediaType: MediaType): Promise<any>;

        loadSegments(representation: Representation, mediaType: MediaType, range: Range): Promise<any>;

        reset(): any;
    }

    interface WebSegmentBaseLoader {
        initialize(): void;

        setConfig(config: object): void;

        loadInitialization(representation: Representation, mediaType: MediaType): Promise<any>;

        loadSegments(representation: Representation, mediaType: MediaType, range: Range): Promise<any>;

        reset(): any;
    }

    /**
     * MSS - Parser
     **/

    interface MssParser {
        setup(): void;

        getAttributeAsBoolean(node: object, attrName: string): boolean;

        // mapPeriod(smoothStreamingMedia: HTMLElement, timescale: number): Period;

        // mapAdaptationSet(streamIndex: HTMLElement, timescale: number): AdaptationSet;

        // mapRepresentation(qualityLevel: HTMLElement, streamIndex: HTMLElement): Representation;

        parse(data: any): object;

        getMatchers(): null; //Entire function consists of "return null"

        getIron(): null;

        reset(): void;
    }

    /**
     * MSS
     **/

    interface MssFragmentInfoController {
        initialize(): void;

        start(): void;

        reset(): void; //Calls stop()

        fragmentInfoLoaded(e: object): void;

        getType(): string;
    }

    interface MssFragmentMoofProcessor {
        convertFragment(e: object, streamProcessor: any): void;

        updateSegmentList(e: object, streamProcessor: any): void;

        getType(): string;
    }

    interface MssFragmentMoovProcessor {
        generateMoov(rep: Representation): ArrayBuffer;
    }

    interface MssFragmentProcessor {
        generateMoov(rep: Representation): ArrayBuffer;

        processFragment(e: object, streamProcessor: any): void;
    }

    interface MssHandler {
        reset(): void;

        createMssParser(): void;

        registerEvents(): void;
    }

    /**
     * Offline
     **/

    interface OfflineRecord {
        id: string;
        progress: number;
        url: string;
        originalUrl: string;
        status: string;
    }

    interface OfflineController {
        // // Download List Functions
        // getDownloadFromId(id: string): object;

        // createDownloadFromId(id: string): object;

        // createDownloadFromStorage(offline: any): object;

        // removeDownloadFromId(id: string): void;

        // generateManifestId(): number;

        // OfflineControllerAPI

        loadRecordsFromStorage(): Promise<void>;

        getAllRecords(): OfflineRecord[];

        createRecord(manifestURL: string): Promise<string>;

        startRecord(id: string, mediaInfos: MediaInfo[]): void;

        stopRecord(id: string): void;

        resumeRecord(id: string): void;

        deleteRecord(id: string): void;

        getRecordProgression(id: string): number;

        resetRecords(): void;

        reset(): void;
    }

    interface Bitrate {
        id?: string;
        width?: number;
        height?: number;
        bandwidth?: number;
        scanType?: string;
    }

    type MediaType = 'video' | 'audio' | 'text' | 'image';
    type ThroughputCalculationModes =
        'throughputCalculationModeEwma'
        | 'throughputCalculationModeZlema'
        | 'throughputCalculationModeArithmeticMean'
        | 'throughputCalculationModeByteSizeWeightedArithmeticMean'
        | 'throughputCalculationModeDateWeightedArithmeticMean'
        | 'throughputCalculationModeHarmonicMean'
        | 'throughputCalculationModeByteSizeWeightedHarmonicMean'
        | 'throughputCalculationModeDateWeightedHarmonicMean'
        ;
    type LowLatencyDownloadTimeCalculationModes =
        'lowLatencyDownloadTimeCalculationModeMoofParsing'
        | 'lowLatencyDownloadTimeCalculationModeDownloadedData'
        | 'lowLatencyDownloadTimeCalculationModeAast';

    class ProtectionMediaInfo {
        codec: string | null;
        contentProtection: any | null;
    }

    class MediaPlayerSettingClass {
        debug?: {
            logLevel?: LogLevel;
            dispatchEvent?: boolean;
        };
        streaming?: {
            abandonLoadTimeout?: number,
            wallclockTimeUpdateInterval?: number,
            manifestUpdateRetryInterval?: number,
            liveUpdateTimeThresholdInMilliseconds?: number,
            cacheInitSegments?: boolean,
            applyServiceDescription?: boolean,
            applyProducerReferenceTime?: boolean,
            applyContentSteering?: boolean,
            eventControllerRefreshDelay?: number,
            enableManifestDurationMismatchFix?: boolean,
            parseInbandPrft?: boolean,
            enableManifestTimescaleMismatchFix?: boolean,
            capabilities?: {
                filterUnsupportedEssentialProperties?: boolean,
                useMediaCapabilitiesApi?: boolean
            },
            timeShiftBuffer?: {
                calcFromSegmentTimeline?: boolean
                fallbackToSegmentTimeline?: boolean
            },
            metrics?: {
                maxListDepth?: number
            },
            delay?: {
                liveDelayFragmentCount?: number,
                liveDelay?: number,
                useSuggestedPresentationDelay?: boolean
            },
            protection?: {
                keepProtectionMediaKeys?: boolean,
                ignoreEmeEncryptedEvent?: boolean,
                detectPlayreadyMessageFormat?: boolean,
            },
            buffer?: {
                enableSeekDecorrelationFix?: boolean,
                fastSwitchEnabled?: boolean,
                flushBufferAtTrackSwitch?: boolean,
                reuseExistingSourceBuffers?: boolean,
                bufferPruningInterval?: number,
                bufferToKeep?: number,
                bufferTimeAtTopQuality?: number,
                bufferTimeAtTopQualityLongForm?: number,
                initialBufferLevel?: number,
                bufferTimeDefault?: number,
                longFormContentDurationThreshold?: number,
                stallThreshold?: number,
                useAppendWindow?: boolean,
                setStallState?: boolean
                avoidCurrentTimeRangePruning?: boolean
                useChangeTypeForTrackSwitch?: boolean
                mediaSourceDurationInfinity?: boolean
                resetSourceBuffersForTrackSwitch?: boolean
            },
            gaps?: {
                jumpGaps?: boolean,
                jumpLargeGaps?: boolean,
                smallGapLimit?: number,
                threshold?: number,
                enableSeekFix?: boolean,
                enableStallFix?: boolean,
                stallSeek?: number
            },
            utcSynchronization?: {
                enabled?: boolean,
                useManifestDateHeaderTimeSource?: boolean,
                backgroundAttempts?: number,
                timeBetweenSyncAttempts?: number,
                maximumTimeBetweenSyncAttempts?: number,
                minimumTimeBetweenSyncAttempts?: number,
                timeBetweenSyncAttemptsAdjustmentFactor?: number,
                maximumAllowedDrift?: number,
                enableBackgroundSyncAfterSegmentDownloadError?: boolean,
                defaultTimingSource?: {
                    scheme?: string,
                    value?: string
                }
            },
            scheduling?: {
                defaultTimeout?: number,
                lowLatencyTimeout?: number,
                scheduleWhilePaused?: boolean
            },
            text?: {
                defaultEnabled?: boolean,
                dispatchForManualRendering?: boolean,
                extendSegmentedCues?: boolean,
                imsc?: {
                    displayForcedOnlyMode?: boolean,
                    enableRollUp?: boolean
                },
                webvtt?: {
                    customRenderingEnabled?: number
                }
            },
            liveCatchup?: {
                maxDrift?: number;
                playbackRate?: {
                    min?: number,
                    max?: number
                },
                playbackBufferMin?: number,
                enabled?: boolean
                mode?: string
            }
            lastBitrateCachingInfo?: {
                enabled?: boolean;
                ttl?: number;
            };
            lastMediaSettingsCachingInfo?: {
                enabled?: boolean;
                ttl?: number;
            };
            saveLastMediaSettingsForCurrentStreamingSession?: boolean;
            cacheLoadThresholds?: {
                video?: number;
                audio?: number;
            };
            trackSwitchMode?: {
                video?: TrackSwitchMode;
                audio?: TrackSwitchMode;
            }
            selectionModeForInitialTrack?: TrackSelectionMode
            fragmentRequestTimeout?: number;
            fragmentRequestProgressTimeout?: number;
            manifestRequestTimeout?: number;
            retryIntervals?: {
                'MPD'?: number;
                'XLinkExpansion'?: number;
                'MediaSegment'?: number;
                'InitializationSegment'?: number;
                'BitstreamSwitchingSegment'?: number;
                'IndexSegment'?: number;
                'FragmentInfoSegment'?: number;
                'license'?: number;
                'other'?: number;
                'lowLatencyReductionFactor'?: number;
            };
            retryAttempts?: {
                'MPD'?: number;
                'XLinkExpansion'?: number;
                'MediaSegment'?: number;
                'InitializationSegment'?: number;
                'BitstreamSwitchingSegment'?: number;
                'IndexSegment'?: number;
                'FragmentInfoSegment'?: number;
                'license'?: number;
                'other'?: number;
                'lowLatencyMultiplyFactor'?: number;
            };
            abr?: {
                limitBitrateByPortal?: boolean;
                usePixelRatioInLimitBitrateByPortal?: boolean;
                rules?: {
                    throughputRule?: {
                        active?: boolean
                    },
                    bolaRule?: {
                        active?: boolean
                    },
                    insufficientBufferRule?: {
                        active?: boolean
                    },
                    switchHistoryRule?: {
                        active?: boolean
                    },
                    droppedFramesRule?: {
                        active?: boolean
                    },
                    abandonRequestsRule?: {
                        active?: boolean
                    }
                    l2ARule?: {
                        active?: boolean
                    }
                    loLPRule?: {
                        active?: boolean
                    }
                },
                throughput?: {
                    averageCalculationMode?: ThroughputCalculationModes,
                    lowLatencyDownloadTimeCalculationMode?: LowLatencyDownloadTimeCalculationModes,
                    useResourceTimingApi?: boolean,
                    useNetworkInformationApi?: {
                        xhr?: boolean,
                        fetch?: boolean
                    },
                    useDeadTimeLatency?: boolean,
                    bandwidthSafetyFactor?: number,
                    sampleSettings: {
                        live?: number,
                        vod?: number,
                        enableSampleSizeAdjustment?: boolean,
                        decreaseScale?: number,
                        increaseScale?: number,
                        maxMeasurementsToKeep?: number,
                        averageLatencySampleAmount?: number,
                    },
                    ewma: {
                        throughputSlowHalfLifeSeconds?: number,
                        throughputFastHalfLifeSeconds?: number,
                        latencySlowHalfLifeCount?: number,
                        latencyFastHalfLifeCount?: number
                    }
                }
                maxBitrate?: {
                    audio?: number;
                    video?: number;
                };
                minBitrate?: {
                    audio?: number;
                    video?: number;
                };
                initialBitrate?: {
                    audio?: number;
                    video?: number;
                };
                autoSwitchBitrate?: {
                    audio?: boolean;
                    video?: boolean;
                }
            },
            cmcd?: {
                enabled?: boolean,
                sid?: string | null,
                cid?: string | null,
                rtp?: number | null,
                rtpSafetyFactor?: number,
                mode?: 'query' | 'header',
                enabledKeys?: Array<string>
            },
            cmsd?: {
                enabled?: boolean,
                abr?: {
                    applyMb: boolean,
                    etpWeightRatio?: number
                }
            }
        };
        errors?: {
            recoverAttempts?: {
                mediaErrorDecode?: number
            }
        }
    }

    interface MediaFinishedInformation {
        numberOfSegments: number,
        mediaTimeOfLastSignaledSegment: number
    }

    type TrackSelectionFunction = (tracks: MediaInfo[]) => MediaInfo[];

    interface MediaPlayerClass {
        setConfig(config: object): void;

        initialize(view?: HTMLMediaElement, source?: string, AutoPlay?: boolean, startTime?: number | string): void;

        on(type: AstInFutureEvent['type'], listener: (e: AstInFutureEvent) => void, scope?: object): void;

        on(type: BufferEvent['type'], listener: (e: BufferEvent) => void, scope?: object): void;

        on(type: CaptionRenderedEvent['type'], listener: (e: CaptionRenderedEvent) => void, scope?: object): void;

        on(type: CaptionContainerResizeEvent['type'], listener: (e: CaptionContainerResizeEvent) => void, scope?: object): void;

        on(type: DynamicToStaticEvent['type'], listener: (e: DynamicToStaticEvent) => void, scope?: object): void;

        on(type: ErrorEvent['type'], listener: (e: ErrorEvent) => void, scope?: object): void;

        on(type: FragmentLoadingCompletedEvent['type'], listener: (e: FragmentLoadingCompletedEvent) => void, scope?: object): void;

        on(type: FragmentLoadingAbandonedEvent['type'], listener: (e: FragmentLoadingAbandonedEvent) => void, scope?: object): void;

        on(type: InbandPrftReceivedEvent['type'], listener: (e: InbandPrftReceivedEvent) => void, scope?: object): void;

        on(type: KeyErrorEvent['type'], listener: (e: KeyErrorEvent) => void, scope?: object): void;

        on(type: KeyMessageEvent['type'], listener: (e: KeyMessageEvent) => void, scope?: object): void;

        on(type: KeySessionClosedEvent['type'], listener: (e: KeySessionClosedEvent) => void, scope?: object): void;

        on(type: KeySessionEvent['type'], listener: (e: KeySessionEvent) => void, scope?: object): void;

        on(type: KeyStatusesChangedEvent['type'], listener: (e: KeyStatusesChangedEvent) => void, scope?: object): void;

        on(type: KeySystemSelectedEvent['type'], listener: (e: KeySystemSelectedEvent) => void, scope?: object): void;

        on(type: LicenseRequestCompleteEvent['type'], listener: (e: LicenseRequestCompleteEvent) => void, scope?: object): void;

        on(type: LogEvent['type'], listener: (e: LogEvent) => void, scope?: object): void;

        on(type: ManifestLoadedEvent['type'], listener: (e: ManifestLoadedEvent) => void, scope?: object): void;

        on(type: MetricEvent['type'], listener: (e: MetricEvent) => void, scope?: object): void;

        on(type: MetricChangedEvent['type'], listener: (e: MetricChangedEvent) => void, scope?: object): void;

        on(type: OfflineRecordEvent['type'], listener: (e: OfflineRecordEvent) => void, scope?: object): void;

        on(type: OfflineRecordLoademetadataEvent['type'], listener: (e: OfflineRecordLoademetadataEvent) => void, scope?: object): void;

        on(type: PeriodSwitchEvent['type'], listener: (e: PeriodSwitchEvent) => void, scope?: object): void;

        on(type: PlaybackErrorEvent['type'], listener: (e: PlaybackErrorEvent) => void, scope?: object): void;

        on(type: PlaybackPausedEvent['type'], listener: (e: PlaybackPausedEvent) => void, scope?: object): void;

        on(type: PlaybackPlayingEvent['type'], listener: (e: PlaybackPlayingEvent) => void, scope?: object): void;

        on(type: PlaybackRateChangedEvent['type'], listener: (e: PlaybackRateChangedEvent) => void, scope?: object): void;

        on(type: PlaybackSeekingEvent['type'], listener: (e: PlaybackSeekingEvent) => void, scope?: object): void;

        on(type: PlaybackStartedEvent['type'], listener: (e: PlaybackStartedEvent) => void, scope?: object): void;

        on(type: PlaybackTimeUpdatedEvent['type'], listener: (e: PlaybackTimeUpdatedEvent) => void, scope?: object): void;

        on(type: ProtectionCreatedEvent['type'], listener: (e: ProtectionCreatedEvent) => void, scope?: object): void;

        on(type: ProtectionDestroyedEvent['type'], listener: (e: ProtectionDestroyedEvent) => void, scope?: object): void;

        on(type: QualityChangeRenderedEvent['type'], listener: (e: QualityChangeRenderedEvent) => void, scope?: object): void;

        on(type: QualityChangeRequestedEvent['type'], listener: (e: QualityChangeRequestedEvent) => void, scope?: object): void;

        on(type: StreamInitializedEvent['type'], listener: (e: StreamInitializedEvent) => void, scope?: object): void;

        on(type: TextTracksAddedEvent['type'], listener: (e: TextTracksAddedEvent) => void, scope?: object): void;

        on(type: TtmlParsedEvent['type'], listener: (e: TtmlParsedEvent) => void, scope?: object): void;

        on(type: TtmlToParseEvent['type'], listener: (e: TtmlToParseEvent) => void, scope?: object): void;

        on(type: AdaptationSetRemovedNoCapabilitiesEvent['type'], listener: (e: AdaptationSetRemovedNoCapabilitiesEvent) => void, scope?: object): void;

        on(type: string, listener: (e: Event) => void, scope?: object, options?: object): void;

        off(type: string, listener: (e: any) => void, scope?: object): void;

        extend(parentNameString: string, childInstance: object, override: boolean): void;

        attachView(element: HTMLElement): void;

        attachSource(urlOrManifest: string | object, startTime?: number | string): void;

        refreshManifest(callback: (manifest: object | null, error: unknown) => void): void;

        isReady(): boolean;

        preload(): void;

        play(): void;

        isPaused(): boolean;

        pause(): void;

        isSeeking(): boolean;

        isDynamic(): boolean;

        seek(value: number): void;

        seekToOriginalLive(): void;

        setPlaybackRate(value: number): void;

        getPlaybackRate(): number;

        setMute(value: boolean): void;

        isMuted(): boolean;

        setVolume(value: number): void;

        getVolume(): number;

        time(streamId?: string): number;

        duration(): number;

        timeAsUTC(): number;

        durationAsUTC(): number;

        getActiveStream(): Stream | null;

        getDVRWindowSize(): number;

        getDVRSeekOffset(value: number): number;

        getTargetLiveDelay(): number;

        convertToTimeCode(value: number): string;

        formatUTC(time: number, locales: string, hour12: boolean, withDate?: boolean): string;

        getVersion(): string;

        getDebug(): Debug;

        getBufferLength(type: MediaType): number;

        getVideoModel(): VideoModel;

        getTTMLRenderingDiv(): HTMLDivElement | null;

        getVideoElement(): HTMLVideoElement;

        getSource(): string | object;

        updateSource(urlOrManifest: string | object): void;

        getCurrentLiveLatency(): number;

        getTopBitrateInfoFor(type: MediaType): BitrateInfo;

        setAutoPlay(value: boolean): void;

        getAutoPlay(): boolean;

        getDashMetrics(): DashMetrics;

        getQualityFor(type: MediaType): number;

        setQualityFor(type: MediaType, value: number, replace?: boolean): void;

        updatePortalSize(): void;

        enableText(enable: boolean): boolean;

        enableForcedTextStreaming(value: boolean): boolean;

        isTextEnabled(): boolean;

        setTextTrack(idx: number): void;

        getRepresentationsFor(type: MediaType): Representation[];

        getStreamsFromManifest(manifest: object): StreamInfo[];

        getTracksFor(type: MediaType): MediaInfo[];

        getTracksForTypeFromManifest(type: MediaType, manifest: object, streamInfo: StreamInfo): MediaInfo[];

        getCurrentTrackFor(type: MediaType): MediaInfo | null;

        setInitialMediaSettingsFor(type: MediaType, value: MediaSettings): void;

        getInitialMediaSettingsFor(type: MediaType): MediaSettings;

        setCurrentTrack(track: MediaInfo, noSettingsSave?: boolean): void;

        addABRCustomRule(type: string, rulename: string, rule: object): void;

        removeABRCustomRule(rulename: string): void;

        removeAllABRCustomRule(): void;

        getAverageThroughput(type: MediaType): number;

        retrieveManifest(url: string, callback: (manifest: object | null, error: any) => void): void;

        addUTCTimingSource(schemeIdUri: string, value: string): void;

        removeUTCTimingSource(schemeIdUri: string, value: string): void;

        clearDefaultUTCTimingSources(): void;

        restoreDefaultUTCTimingSources(): void;

        setXHRWithCredentialsForType(type: string, value: boolean): void;

        getXHRWithCredentialsForType(type: string): boolean;

        getProtectionController(): ProtectionController;

        attachProtectionController(value: ProtectionController): void;

        setProtectionData(value: ProtectionDataSet): void;

        addRequestInterceptor(interceptor: CommonMediaLibrary.RequestInterceptor): void;

        removeRequestInterceptor(interceptor: CommonMediaLibrary.RequestInterceptor): void;

        addResponseInterceptor(interceptor: CommonMediaLibrary.ResponseInterceptor): void;

        removeResponseInterceptor(interceptor: CommonMediaLibrary.ResponseInterceptor): void;

        registerLicenseRequestFilter(filter: RequestFilter): void;

        registerLicenseResponseFilter(filter: ResponseFilter): void;

        unregisterLicenseRequestFilter(filter: RequestFilter): void;

        unregisterLicenseResponseFilter(filter: ResponseFilter): void;

        registerCustomCapabilitiesFilter(filter: CapabilitiesFilter): void;

        unregisterCustomCapabilitiesFilter(filter: CapabilitiesFilter): void;

        unregisterFilter(filters: any[], filter: any): void;

        setCustomInitialTrackSelectionFunction(fn: TrackSelectionFunction): void;

        resetCustomInitialTrackSelectionFunction(fn: TrackSelectionFunction): void;

        attachTTMLRenderingDiv(div: HTMLDivElement): void;

        getCurrentTextTrackIndex(): number;

        provideThumbnail(time: number, callback: (thumbnail: Thumbnail | null) => void): void;

        getDashAdapter(): DashAdapter;

        getOfflineController(): OfflineController;

        triggerSteeringRequest(): Promise<any>;

        getCurrentSteeringResponseData(): object;

        getAvailableBaseUrls(): BaseURL[];

        getAvailableLocations(): MpdLocation[];

        getSettings(): MediaPlayerSettingClass;

        updateSettings(settings: MediaPlayerSettingClass): void;

        resetSettings(): void;

        reset(): void;

        destroy(): void;

    }

    interface MediaPlayerErrors {
        MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE: 10;
        MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE: 11;
        XLINK_LOADER_LOADING_FAILURE_ERROR_CODE: 12;
        SEGMENT_BASE_LOADER_ERROR_CODE: 15;
        TIME_SYNC_FAILED_ERROR_CODE: 16;
        FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE: 17;
        FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE: 18;
        URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE: 19;
        APPEND_ERROR_CODE: 20;
        REMOVE_ERROR_CODE: 21;
        DATA_UPDATE_FAILED_ERROR_CODE: 22;
        CAPABILITY_MEDIASOURCE_ERROR_CODE: 23;
        CAPABILITY_MEDIAKEYS_ERROR_CODE: 24;
        DOWNLOAD_ERROR_ID_MANIFEST_CODE: 25;
        DOWNLOAD_ERROR_ID_SIDX_CODE: 26;
        DOWNLOAD_ERROR_ID_CONTENT_CODE: 27;
        DOWNLOAD_ERROR_ID_INITIALIZATION_CODE: 28;
        DOWNLOAD_ERROR_ID_XLINK_CODE: 29;
        MANIFEST_ERROR_ID_PARSE_CODE: 31;
        MANIFEST_ERROR_ID_NOSTREAMS_CODE: 32;
        TIMED_TEXT_ERROR_ID_PARSE_CODE: 33;
        MANIFEST_ERROR_ID_MULTIPLEXED_CODE: 34;
        MEDIASOURCE_TYPE_UNSUPPORTED_CODE: 35;
        MEDIA_KEYERR_CODE: 100;
        MEDIA_KEYERR_UNKNOWN_CODE: 101;
        MEDIA_KEYERR_CLIENT_CODE: 102;
        MEDIA_KEYERR_SERVICE_CODE: 103;
        MEDIA_KEYERR_OUTPUT_CODE: 104;
        MEDIA_KEYERR_HARDWARECHANGE_CODE: 105;
        MEDIA_KEYERR_DOMAIN_CODE: 106;
        MEDIA_KEY_MESSAGE_ERROR_CODE: 107;
        MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_CODE: 108;
        SERVER_CERTIFICATE_UPDATED_ERROR_CODE: 109;
        KEY_STATUS_CHANGED_EXPIRED_ERROR_CODE: 110;
        MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_CODE: 111;
        KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE: 112;
        KEY_SESSION_CREATED_ERROR_CODE: 113;
        MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE: 114;
        // MSS errors
        MSS_NO_TFRF_CODE: 200;
        MSS_UNSUPPORTED_CODEC_CODE: 201;
        // Offline errors
        OFFLINE_ERROR: 11000;
        INDEXEDDB_QUOTA_EXCEED_ERROR: 11001;
        INDEXEDDB_INVALID_STATE_ERROR: 11002;
        INDEXEDDB_NOT_READABLE_ERROR: 11003;
        INDEXEDDB_NOT_FOUND_ERROR: 11004;
        INDEXEDDB_NETWORK_ERROR: 11005;
        INDEXEDDB_DATA_ERROR: 11006;
        INDEXEDDB_TRANSACTION_INACTIVE_ERROR: 11007;
        INDEXEDDB_NOT_ALLOWED_ERROR: 11008;
        INDEXEDDB_NOT_SUPPORTED_ERROR: 11009;
        INDEXEDDB_VERSION_ERROR: 11010;
        INDEXEDDB_TIMEOUT_ERROR: 11011;
        INDEXEDDB_ABORT_ERROR: 11012;
        INDEXEDDB_UNKNOWN_ERROR: 11013;
    }

    interface MediaPlayerEvents {
        AST_IN_FUTURE: 'astInFuture';
        BASE_URLS_UPDATED: 'baseUrlsUpdated';
        BUFFER_EMPTY: 'bufferStalled';
        BUFFER_LOADED: 'bufferLoaded';
        BUFFER_LEVEL_STATE_CHANGED: 'bufferStateChanged';
        BUFFER_LEVEL_UPDATED: 'bufferLevelUpdated';
        CAN_PLAY: 'canPlay';
        CAN_PLAY_THROUGH: 'canPlayThrough';
        CAPTION_RENDERED: 'captionRendered';
        CAPTION_CONTAINER_RESIZE: 'captionContainerResize';
        CONFORMANCE_VIOLATION: 'conformanceViolation';
        CUE_ENTER: 'cueEnter';
        CUE_EXIT: 'cueExit';
        DVB_FONT_DOWNLOAD_ADDED: 'dvbFontDownloadAdded';
        DVB_FONT_DOWNLOAD_COMPLETE: 'dvbFontDownloadComplete';
        DVB_FONT_DOWNLOAD_FAILED: 'dvbFontDownloadFailed';
        DYNAMIC_TO_STATIC: 'dynamicToStatic';
        ERROR: 'error';
        EVENT_MODE_ON_RECEIVE: 'eventModeOnReceive';
        EVENT_MODE_ON_START: 'eventModeOnStart';
        FRAGMENT_LOADING_COMPLETED: 'fragmentLoadingCompleted';
        FRAGMENT_LOADING_PROGRESS: 'fragmentLoadingProgress';
        FRAGMENT_LOADING_STARTED: 'fragmentLoadingStarted';
        FRAGMENT_LOADING_ABANDONED: 'fragmentLoadingAbandoned';
        INBAND_PRFT_RECEIVED: 'inbandPrft';
        KEY_ADDED: 'public_keyAdded';
        KEY_ERROR: 'public_keyError';
        KEY_MESSAGE: 'public_keyMessage';
        KEY_SESSION_CLOSED: 'public_keySessionClosed';
        KEY_SESSION_CREATED: 'public_keySessionCreated';
        KEY_SESSION_REMOVED: 'public_keySessionRemoved';
        KEY_STATUSES_CHANGED: 'public_keyStatusesChanged';
        KEY_SYSTEM_SELECTED: 'public_keySystemSelected';
        KEY_SYSTEM_ACCESS_COMPLETE: 'public_keySystemAccessComplete';
        KEY_SESSION_UPDATED: 'public_keySessionUpdated';
        LICENSE_REQUEST_COMPLETE: 'public_licenseRequestComplete';
        LICENSE_REQUEST_SENDING: 'public_licenseRequestSending';
        LOG: 'log';
        MANIFEST_LOADED: 'manifestLoaded';
        MANIFEST_LOADING_STARTED: 'manifestLoadingStarted';
        MANIFEST_LOADING_FINISHED: 'manifestLoadingFinished';
        MANIFEST_VALIDITY_CHANGED: 'manifestValidityChanged';
        METRICS_CHANGED: 'metricsChanged';
        METRIC_ADDED: 'metricAdded';
        METRIC_CHANGED: 'metricChanged';
        METRIC_UPDATED: 'metricUpdated';
        OFFLINE_RECORD_FINISHED: 'public_offlineRecordFinished';
        OFFLINE_RECORD_LOADEDMETADATA: 'public_offlineRecordLoadedmetadata';
        OFFLINE_RECORD_STARTED: 'public_offlineRecordStarted';
        OFFLINE_RECORD_STOPPED: 'public_offlineRecordStopped';
        PERIOD_SWITCH_STARTED: 'periodSwitchStarted';
        PERIOD_SWITCH_COMPLETED: 'periodSwitchCompleted';
        ADAPTATION_SET_REMOVED_NO_CAPABILITIES: 'adaptationSetRemovedNoCapabilities';
        PLAYBACK_ENDED: 'playbackEnded';
        PLAYBACK_ERROR: 'playbackError';
        PLAYBACK_LOADED_DATA: 'playbackLoadedData';
        PLAYBACK_METADATA_LOADED: 'playbackMetaDataLoaded';
        PLAYBACK_NOT_ALLOWED: 'playbackNotAllowed';
        PLAYBACK_PAUSED: 'playbackPaused';
        PLAYBACK_PLAYING: 'playbackPlaying';
        PLAYBACK_PROGRESS: 'playbackProgress';
        PLAYBACK_RATE_CHANGED: 'playbackRateChanged';
        PLAYBACK_SEEKED: 'playbackSeeked';
        PLAYBACK_SEEKING: 'playbackSeeking';
        PLAYBACK_STALLED: 'playbackStalled';
        PLAYBACK_STARTED: 'playbackStarted';
        PLAYBACK_TIME_UPDATED: 'playbackTimeUpdated';
        PLAYBACK_VOLUME_CHANGED: 'playbackVolumeChanged';
        PLAYBACK_WAITING: 'playbackWaiting';
        PROTECTION_CREATED: 'public_protectioncreated';
        PROTECTION_DESTROYED: 'public_protectiondestroyed';
        REPRESENTATION_SWITCH: 'representationSwitch';
        TRACK_CHANGE_RENDERED: 'trackChangeRendered';
        QUALITY_CHANGE_RENDERED: 'qualityChangeRendered';
        QUALITY_CHANGE_REQUESTED: 'qualityChangeRequested';
        STREAM_ACTIVATED: 'streamActivated'
        STREAM_DEACTIVATED: 'streamDeactivated';
        STREAM_INITIALIZED: 'streamInitialized';
        STREAM_INITIALIZING: 'streamInitializing';
        STREAM_TEARDOWN_COMPLETE: 'streamTeardownComplete';
        STREAM_UPDATED: 'streamUpdated';
        TEXT_TRACKS_ADDED: 'allTextTracksAdded';
        TEXT_TRACK_ADDED: 'textTrackAdded';
        THROUGHPUT_MEASUREMENT_STORED: 'throughputMeasurementStored';
        TTML_PARSED: 'ttmlParsed';
        TTML_TO_PARSE: 'ttmlToParse';
    }

    interface AstInFutureEvent extends Event {
        type: MediaPlayerEvents['AST_IN_FUTURE'];
        delay: number;
    }

    interface BufferEvent extends Event {
        type: MediaPlayerEvents['BUFFER_EMPTY' | 'BUFFER_LOADED'];
        mediaType: MediaType;
    }

    interface BufferStateChangedEvent extends Event {
        type: MediaPlayerEvents['BUFFER_LEVEL_STATE_CHANGED'];
        mediaType: MediaType;
        sender: object;
        state: 'bufferStalled' | 'bufferLoaded';
        streamInfo: StreamInfo;
    }

    interface GenericErrorEvent extends Event {
        type: MediaPlayerEvents['ERROR'];
        error: 'capability' | 'mediasource' | 'key_session' | 'key_message';
        event: string;
    }

    interface DownloadErrorEvent extends Event {
        type: MediaPlayerEvents['ERROR'];
        error: 'download';
        event: {
            id: string;
            url: string;
            request: XMLHttpRequest;
        };
    }

    interface ManifestErrorEvent extends Event {
        type: MediaPlayerEvents['ERROR'];
        error: 'manifestError';
        event: {
            id: string;
            message: string;
            manifest?: object;
            event?: string;
        };
    }

    interface TimedTextErrorEvent extends Event {
        type: MediaPlayerEvents['ERROR'];
        error: 'cc';
        event: {
            id: string;
            message: string;
            cc: string;
        };
    }

    interface MediaPlayerErrorEvent extends Event {
        type: MediaPlayerEvents['ERROR'];
        error: {
            code: MediaPlayerErrors['MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE'] |
                MediaPlayerErrors['MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE'] |
                MediaPlayerErrors['XLINK_LOADER_LOADING_FAILURE_ERROR_CODE'] |
                MediaPlayerErrors['SEGMENT_BASE_LOADER_ERROR_CODE'] |
                MediaPlayerErrors['TIME_SYNC_FAILED_ERROR_CODE'] |
                MediaPlayerErrors['FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE'] |
                MediaPlayerErrors['FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE'] |
                MediaPlayerErrors['URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE'] |
                MediaPlayerErrors['APPEND_ERROR_CODE'] |
                MediaPlayerErrors['REMOVE_ERROR_CODE'] |
                MediaPlayerErrors['DATA_UPDATE_FAILED_ERROR_CODE'] |
                MediaPlayerErrors['CAPABILITY_MEDIASOURCE_ERROR_CODE'] |
                MediaPlayerErrors['CAPABILITY_MEDIAKEYS_ERROR_CODE'] |
                MediaPlayerErrors['DOWNLOAD_ERROR_ID_MANIFEST_CODE'] |
                MediaPlayerErrors['DOWNLOAD_ERROR_ID_CONTENT_CODE'] |
                MediaPlayerErrors['DOWNLOAD_ERROR_ID_INITIALIZATION_CODE'] |
                MediaPlayerErrors['DOWNLOAD_ERROR_ID_XLINK_CODE'] |
                MediaPlayerErrors['MANIFEST_ERROR_ID_PARSE_CODE'] |
                MediaPlayerErrors['MANIFEST_ERROR_ID_NOSTREAMS_CODE'] |
                MediaPlayerErrors['TIMED_TEXT_ERROR_ID_PARSE_CODE'] |
                MediaPlayerErrors['MANIFEST_ERROR_ID_MULTIPLEXED_CODE'] |
                MediaPlayerErrors['MEDIASOURCE_TYPE_UNSUPPORTED_CODE'] |
                // Protection errors
                MediaPlayerErrors['MEDIA_KEYERR_CODE'] |
                MediaPlayerErrors['MEDIA_KEYERR_UNKNOWN_CODE'] |
                MediaPlayerErrors['MEDIA_KEYERR_CLIENT_CODE'] |
                MediaPlayerErrors['MEDIA_KEYERR_SERVICE_CODE'] |
                MediaPlayerErrors['MEDIA_KEYERR_OUTPUT_CODE'] |
                MediaPlayerErrors['MEDIA_KEYERR_HARDWARECHANGE_CODE'] |
                MediaPlayerErrors['MEDIA_KEYERR_DOMAIN_CODE'] |
                MediaPlayerErrors['MEDIA_KEY_MESSAGE_ERROR_CODE'] |
                MediaPlayerErrors['MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_CODE'] |
                MediaPlayerErrors['SERVER_CERTIFICATE_UPDATED_ERROR_CODE'] |
                MediaPlayerErrors['KEY_STATUS_CHANGED_EXPIRED_ERROR_CODE'] |
                MediaPlayerErrors['MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_CODE'] |
                MediaPlayerErrors['KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE'] |
                MediaPlayerErrors['KEY_SESSION_CREATED_ERROR_CODE'] |
                MediaPlayerErrors['MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE'] |
                // Offline errors
                MediaPlayerErrors['OFFLINE_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_QUOTA_EXCEED_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_INVALID_STATE_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_NOT_READABLE_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_NOT_FOUND_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_NETWORK_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_DATA_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_TRANSACTION_INACTIVE_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_NOT_ALLOWED_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_NOT_SUPPORTED_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_VERSION_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_TIMEOUT_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_ABORT_ERROR'] |
                MediaPlayerErrors['INDEXEDDB_UNKNOWN_ERROR'] |
                // MSS errors
                MediaPlayerErrors['MSS_NO_TFRF_CODE'] |
                MediaPlayerErrors['MSS_UNSUPPORTED_CODEC_CODE'],
            message: string,
            data: object,
        }
    }

    type ErrorEvent =
        GenericErrorEvent
        | DownloadErrorEvent
        | ManifestErrorEvent
        | TimedTextErrorEvent
        | MediaPlayerErrorEvent;

    interface CaptionRenderedEvent extends Event {
        type: MediaPlayerEvents['CAPTION_RENDERED'];
        captionDiv: HTMLDivElement;
        currentTrackIdx: number;
    }

    interface CaptionContainerResizeEvent extends Event {
        type: MediaPlayerEvents['CAPTION_CONTAINER_RESIZE'];
    }

    interface dvbFontDownloadAdded extends Event {
        type: MediaPlayerEvents['DVB_FONT_DOWNLOAD_ADDED'];
        font: FontInfo;
    }

    interface dvbFontDownloadComplete extends Event {
        type: MediaPlayerEvents['DVB_FONT_DOWNLOAD_COMPLETE'];
        font: FontInfo;
    }

    interface dvbFontDownloadFailed extends Event {
        type: MediaPlayerEvents['DVB_FONT_DOWNLOAD_FAILED'];
        font: FontInfo;
    }
    interface DynamicToStaticEvent extends Event {
        type: MediaPlayerEvents['DYNAMIC_TO_STATIC'];
    }

    interface FragmentLoadingCompletedEvent extends Event {
        type: MediaPlayerEvents['FRAGMENT_LOADING_COMPLETED'];
        request: FragmentRequest;
        response: ArrayBuffer;
        sender: object;
    }

    interface FragmentLoadingAbandonedEvent extends Event {
        type: MediaPlayerEvents['FRAGMENT_LOADING_ABANDONED'];
        streamProcessor: object;
        request: object;
        mediaType: MediaType;
    }

    interface InbandPrftReceivedEvent extends Event {
        type: MediaPlayerEvents['INBAND_PRFT_RECEIVED'];
        streamInfo: StreamInfo;
        mediaType: MediaType;
        data: object
    }

    class KeyError {
        constructor(sessionToken: SessionToken, errorString: string);

        sessionToken: SessionToken;
        error: string;
    }

    interface KeyErrorEvent extends Event {
        type: MediaPlayerEvents['KEY_ERROR'];
        data: KeyError;
    }

    class KeyMessage {
        constructor(sessionToken: SessionToken, message: ArrayBuffer, defaultURL: string, messageType?: string);

        sessionToken: SessionToken;
        message: ArrayBuffer;
        defaultURL: string;
        messageType: string;
    }

    interface KeyMessageEvent extends Event {
        type: MediaPlayerEvents['KEY_MESSAGE'];
        data: KeyMessage;
    }

    interface KeySessionClosedEvent extends Event {
        type: MediaPlayerEvents['KEY_SESSION_CLOSED' | 'KEY_SESSION_REMOVED'];
        data: string | null;
        error?: string;
    }

    interface KeySessionEvent extends Event {
        type: MediaPlayerEvents['KEY_SESSION_CREATED'];
        data: SessionToken | null;
        error?: DashJSError;
    }

    interface KeyStatusesChangedEvent extends Event {
        type: MediaPlayerEvents['KEY_STATUSES_CHANGED'];
        data: SessionToken;
        error?: DashJSError;
    }

    interface KeySystemSelectedEvent extends Event {
        type: MediaPlayerEvents['KEY_SYSTEM_SELECTED'];
        data: object | null;
        error?: string;
    }

    interface LicenseRequestCompleteEvent extends Event {
        type: MediaPlayerEvents['LICENSE_REQUEST_COMPLETE'];
        data: {
            sessionToken: SessionToken;
            messageType: string;
        };
        error?: DashJSError;
    }

    interface LogEvent extends Event {
        type: MediaPlayerEvents['LOG'];
        message: string;
    }

    interface ManifestLoadedEvent extends Event {
        type: MediaPlayerEvents['MANIFEST_LOADED'];
        data: object;
    }

    interface MetricEvent extends Event {
        type: MediaPlayerEvents['METRIC_ADDED' | 'METRIC_UPDATED'];
        mediaType: MediaType;
        metric: MetricType;
        value: object;
    }

    interface MetricChangedEvent extends Event {
        type: MediaPlayerEvents['METRIC_CHANGED'];
        mediaType: MediaType;
    }

    interface OfflineRecordEvent extends Event {
        type: MediaPlayerEvents['OFFLINE_RECORD_FINISHED' | 'OFFLINE_RECORD_STARTED' | 'OFFLINE_RECORD_STOPPED'];
        id: string;
    }

    interface OfflineRecordLoademetadataEvent extends Event {
        type: MediaPlayerEvents['OFFLINE_RECORD_LOADEDMETADATA'];
        madiaInfos: MediaInfo[];
    }

    interface PeriodSwitchEvent extends Event {
        type: MediaPlayerEvents['PERIOD_SWITCH_COMPLETED' | 'PERIOD_SWITCH_STARTED'];
        toStreamInfo: StreamInfo | null;
        fromStreamInfo?: StreamInfo | null;
    }

    interface PlaybackErrorEvent extends Event {
        type: MediaPlayerEvents['PLAYBACK_ERROR'];
        error: MediaError;
    }

    interface PlaybackPausedEvent extends Event {
        type: MediaPlayerEvents['PLAYBACK_PAUSED'];
        ended: boolean | null;
    }

    interface PlaybackPlayingEvent extends Event {
        type: MediaPlayerEvents['PLAYBACK_PLAYING'];
        playingTime: number | null;
    }

    interface PlaybackRateChangedEvent extends Event {
        type: MediaPlayerEvents['PLAYBACK_RATE_CHANGED'];
        playbackRate: number | null;
    }

    interface PlaybackSeekingEvent extends Event {
        type: MediaPlayerEvents['PLAYBACK_SEEKING'];
        seekTime: number | null;
    }

    interface PlaybackStartedEvent extends Event {
        type: MediaPlayerEvents['PLAYBACK_STARTED'];
        startTime: number | null;
    }

    interface PlaybackTimeUpdatedEvent extends Event {
        type: MediaPlayerEvents['PLAYBACK_TIME_UPDATED'];
        time: number | null;
        timeToEnd: number;
    }

    interface PlaybackWaitingEvent extends Event {
        type: MediaPlayerEvents['PLAYBACK_WAITING'];
        playingTime: number | null;
    }

    interface ProtectionCreatedEvent extends Event {
        type: MediaPlayerEvents['PROTECTION_CREATED'];
        controller: object;
    }

    interface ProtectionDestroyedEvent extends Event {
        type: MediaPlayerEvents['PROTECTION_DESTROYED'];
        data: string;
    }

    interface TrackChangeRenderedEvent extends Event {
        type: MediaPlayerEvents['TRACK_CHANGE_RENDERED'];
        mediaType: MediaType;
        oldMediaInfo: MediaInfo;
        newMediaInfo: MediaInfo;
    }

    interface QualityChangeRenderedEvent extends Event {
        type: MediaPlayerEvents['QUALITY_CHANGE_RENDERED'];
        mediaType: MediaType;
        oldQuality: number;
        newQuality: number;
    }

    interface QualityChangeRequestedEvent extends Event {
        type: MediaPlayerEvents['QUALITY_CHANGE_REQUESTED'];
        mediaType: MediaType;
        oldQuality: number;
        newQuality: number;
        streamInfo: StreamInfo | null;
        reason: {
            name?: string;
            droppedFrames?: number;
        } | null;
    }

    interface StreamInitializedEvent extends Event {
        type: MediaPlayerEvents['STREAM_INITIALIZED'];
        streamInfo: StreamInfo;
        error: Error | null;
    }

    interface TextTracksAddedEvent extends Event {
        type: MediaPlayerEvents['TEXT_TRACKS_ADDED'];
        enabled: boolean;
        index: number;
        tracks: TextTrackInfo[];
    }

    interface TtmlParsedEvent extends Event {
        type: MediaPlayerEvents['TTML_PARSED'];
        ttmlString: string;
        ttmlDoc: object;
    }

    interface TtmlToParseEvent extends Event {
        type: MediaPlayerEvents['TTML_TO_PARSE'];
        content: object;
    }

    interface CueEnterEvent extends Event {
        type: MediaPlayerEvents['CUE_ENTER'];
        id: string,
        text: string,
        start: number,
        end: number
    }

    interface CueExitEvent extends Event {
        type: MediaPlayerEvents['CUE_EXIT'];
        id: string,
    }

    interface AdaptationSetRemovedNoCapabilitiesEvent extends Event {
        type: MediaPlayerEvents['ADAPTATION_SET_REMOVED_NO_CAPABILITIES'];
        adaptationSet: object;
    }

    interface MediaSettings {
        lang?: string;
        viewpoint?: any;
        audioChannelConfiguration?: any[];
        accessibility?: any;
        role?: string;
    }

    class serviceDescriptions {
        id: number;
        schemeIdUri: string;
        latency: number | null;
        playbackrate: number;
        contentSteering: ContentSteering | null;
    }

    interface ICurrentRepresentationSwitch {
        mt: Date;
        t: Date;
    }

    interface IBufferState {
        target: number;
        state: string;
    }

    /**
     * Streaming - Controllers
     **/

    interface AbrController {
        initialize(): void;

        registerStreamType(type: string, streamProcessor: any): void;

        unRegisterStreamType(streamId: string, type: string): void;

        reset(): void;

        setConfig(config: object): void;

        getMaxAllowedIndexFor(type: string, streamId: string): number | undefined;

        getMinAllowedIndexFor(type: string, streamId: string): number | undefined;

        getTopBitrateInfoFor(type: string, streamId?: string): BitrateInfo | null;

        getInitialBitrateFor(type: string): number;

        checkPlaybackQuality(type: string, streamId: string): boolean;

        getQualityFor(type: string, streamId?: string): number | any;

        setPlaybackQuality(type: string, streamInfo: StreamInfo, newQuality: number, reason?: string): void;

        getAbandonmentStateFor(streamId: string, type: string): any | null;

        getQualityForBitrate(mediaInfo: MediaInfo, bitrate: number, streamId: string, latency?: number | null): number;

        getBitrateList(mediaInfo: MediaInfo): BitrateInfo[] | null;

        updateTopQualityIndex(mediaInfo: MediaInfo): number;

        isPlayingAtTopQuality(streamInfo: StreamInfo): boolean;

        setWindowResizeEventCalled(value: any): void;

        setElementSize(): void;

        clearDataForStream(streamId: string): void;
    }

    interface BaseURLController {
        resolve(path: any): BaseURL;

        reset(): void;

        initialize(data: any): void;

        getBaseUrls(manifest: any): BaseURL[];

        setConfig(config: object): void;
    }

    interface BlacklistController {
        contains(query: any): boolean;

        add(entry: any): void;

        reset(): void;
    }

    interface BufferController {
        initialize(mediaSource: MediaSource): void;

        getStreamId(): string;

        getType(): string;

        getBufferControllerType(): string;

        setMediaSource(value: object): void;

        createBufferSink(mediaInfo: MediaInfo, oldBufferSinks?: any[]): Promise<any>;

        appendInitSegmentFromCache(representationId: string): boolean;

        prepareForPlaybackSeek(): any;

        prepareForReplacementTrackSwitch(codec: string): Promise<any>;

        prepareForForceReplacementQualitySwitch(voRepresentation: Representation): Promise<any>;

        prepareForNonReplacementTrackSwitch(codec: string): Promise<any>;

        pruneAllSafely(): Promise<any>;

        getAllRangesWithSafetyFactor(seekTime: number): { start: number, end: number }[];

        getRangeAt(time: number, tolerance: number): Range | null;

        clearBuffers(ranges: Range[]): Promise<any>;

        updateBufferTimestampOffset(voRepresentation: Representation): Promise<any>;

        updateAppendWindow(): Promise<any>;

        segmentRequestingCompleted(segmentIndex: number): void;

        getBuffer(): SourceBufferSink;

        getBufferLevel(): number;

        getMediaSource(): MediaSource;

        getIsBufferingCompleted(): boolean;

        setIsBufferingCopleted(value: object): void;

        getIsPruningInProgress(): boolean;

        getContinuousBufferTimeForTargetTime(targetTime: number): number;

        setSeekTarget(value: object): void;

        reset(errored: any, keepBuffers: boolean): void;
    }

    interface EventController {
        start(): void;

        addInlineEvents(values: object[]): void;

        addInbandEvents(values: object[]): void;

        setConfig(config: object): void;

        getInlineEvents(): object;

        getInbandEvents(): object;

        reset(): void;
    }

    interface FragmentController {
        getStreamId(): string;

        getModel(): any;

        reset(): void;
    }

    interface GapController {
        reset(): void;

        setConfig(config: object): void;

        initialize(): void;
    }

    interface MediaController {
        setInitialMediaSettingsForType(type: string, streamInfo: StreamInfo): void;

        addTrack(track: MediaInfo): void;

        getTracksFor(type: string, streamId: string): MediaInfo[];

        isCurrentTrack(track: MediaInfo): boolean;

        setTrack(track: MediaInfo, noSettingsSave: boolean): void;

        setInitialSettings(type: string, value: object): void;

        getInitialSettings(type: string): object | null;

        saveTextSettingsDisabled(): void;

        areTracksEqual(t1: MediaInfo, t2: MediaInfo): boolean;

        setConfig(config: object): void;

        reset(): void;

        matchSettings(settings: object, track: MediaInfo, isTrackActive?: boolean): any;

        getTracksWithHighestSelectionPriority(trackArr: MediaInfo[]): MediaInfo[];

        getTracksWithHighestBitrate(trackArr: MediaInfo[]): MediaInfo[];

        getTracksWithHighestEfficiency(trackArr: MediaInfo[]): MediaInfo[];

        getTracksWithHighestRange(trackArr: MediaInfo[]): MediaInfo[];

        setCustomInitialTrackSelectionFunction(customFunc: Function): void;

        selectInitialTrack(type: string, tracks: MediaInfo[]): MediaInfo;
    }

    interface MediaSourceController {
        createMediaSource(): MediaSource;

        attachMediaSource(videoModel: object): string;

        detachMediaSource(videoModel: object): void;

        setDuration(value: object): void;

        setSeekable(start: number, end: number): void;

        signalEndOfStream(source: any): void;
    }

    interface PlaybackController {
        initialize(sInfo: StreamInfo, periodSwitch: boolean): void;

        getTimeToStreamEnd(sInfo?: StreamInfo): number;

        getStreamEndTime(sInfo: StreamInfo): number;

        play(): void;

        isPaused(): boolean;

        pause(): void;

        isSeeking(): boolean;

        seek(time: number, stickToBuffered: boolean, internal: boolean): void;

        getTime(): number;

        getPlaybackRate(): number;

        getPlayedRanges(): TimeRanges | null;

        getEnded(): number;

        getIsDynamic(): boolean;

        getStreamController(): object;

        getIsManifestUpdateInProgress(): boolean;

        computeAndSetLiveDelay(fragmentDuration: number, manifestInfo: IManifestInfo): number;

        getAvailabilityStartTime(): number;

        getLiveDelay(): number;

        getCurrentLiveLatency(): number;

        reset(): void;

        setConfig(config: object): void;

        updateCurrentTime(mediaType?: MediaType): void;

        getBufferLevel(filterList?: any[]): number | null;
    }

    interface ScheduleController {
        initialize(_hasVideoTrack: boolean): void;

        getType(): string;

        getStreamId(): string;

        startScheduleTimer(value: object): void;

        clearScheduleTimer(): void;

        getBufferTarget(): number;

        setSwitchTrack(value: object): void;

        getSwitchTrack(): any;

        setTimeToLoadDelay(value: object): void;

        getTimeToLoadDelay(): number;

        setCheckPlaybackQuality(value: object): void;

        setInitSegmentRequired(value: object): void;

        setLastInitializedQuality(value: number): void;

        reset(): void;
    }

    interface StreamController {
        initialize(autoPl: any, protData: object): void;

        getStreamForTime(time: number): object | null;

        addDVRMetric(): void;

        getTimeRelativeToStreamId(time: number, id: string): number | null;

        getActiveStreamProcessors(): any[];

        getActiveStream(): object;

        getInitialPlayback(): any;

        getAutoPlay(): boolean;

        hasVideoTrack(): void;

        hasAudioTrack(): void;

        switchToVideoElement(seekTime: number): void;

        getActiveStreamInfo(): StreamInfo | null;

        getIsStreamSwitchInProgress(): boolean;

        getHasMediaOrInitialisationError(): boolean;

        getStreamById(id: string): object | null;

        load(url: string): void;

        loadWithManifest(manifest: object): void;

        setConfig(config: object): void;

        setProtectionData(protData: object): void;

        reset(): void;

        getStreams(): any[];
    }

    interface TimeSyncController {
        initialize(): void;

        attemptSync(tSources: number[], isDynamic: boolean): void;

        setConfig(config: object): void;

        reset(): void;
    }

    interface XlinkController {
        resolveManifestOnLoad(mpd: Mpd): void;

        setMatchers(value: object): void;

        setIron(value: object): void;

        reset(): void;
    }

    /**
     * Streaming - Metrics - Controllers
     **/

    interface MetricsCollectionController {
        reset(): void;
    }

    interface MetricsController {
        initialize(metricsEntry: object): void;

        reset(): void;
    }

    interface MetricsHandlersController {
        initialize(metrics: object[], reportingController: ReportingController): void;

        reset(): void;
    }

    interface RangeController {
        initialize(rs: object[]): void;

        reset(): void;

        isEnabled(): boolean;
    }

    interface ReportingController {
        initialize(rangeController: RangeController): void;

        reset(): void;

        report(type: string, vos: any[]): void;
    }

    /**
     * Streaming - Metrics - Metrics - Handlers
     **/

    interface BufferLevelHandler {
        initialize(basename: string, rc: RangeController, n_ms: string): void;

        reset(): void;

        handleNewMetric(metric: any, vo: any, type: string): void;
    }

    interface DVBErrorsHandler {
        initialize(unused: any, rc: RangeController): void; //unused does nothing

        reset(): void;

        handleNewMetric(metric: any, vo: any): void;
    }

    interface GenericMetricHandler {
        initialize(name: string, rc: RangeController): void;

        reset(): void;

        handleNewMetric(metric: any, vo: any): void;
    }

    interface HttpListHandler {
        initialize(basename: string, rc: RangeController, n_ms: string, requestType: string): void;

        reset(): void;

        handleNewMetric(metric: any, vo: any): void;
    }

    /**
     * Streaming - Metrics - Metrics
     **/

    interface MetricsHandlerFactory {
        create(listType: string, reportingController: ReportingController): void;

        register(key: string, handler: object): void;

        unregister(key: string): void;
    }

    /**
     * Streaming - Metrics - Reporting - Reporters
     **/

    interface DVBReporting {
        report(type: string, vos: any[]): void;

        initialize(entry: object, rc: RangeController): void;

        reset(): void;
    }

    /**
     * Streaming - Metrics - Reporting
     **/

    interface ReportingFactory {
        create(entry: object, reportingController: ReportingController): void;

        register(schemeIdUri: string, moduleName: string): void;

        unregister(schemeIdUri: string): void;
    }

    /**
     * Streaming - Metrics - utils
     **/

    interface DVBErrorsTranslator {
        initialize(): void;

        reset(): void;
    }

    interface ManifestParsing {
        getMetrics(manifest: object): object[];
    }

    interface MetricSerialiser {
        serialise(metric: object): string;
    }

    interface RNG {
        random(min: number, max: number): number;
    }

    /**
     * Streaming - Metrics - Vo
     **/

    class DVBErrors {
        mpdurl: string | null;
        errorcode: string | null;
        terror: Date | null;
        url: string | null;
        ipaddress: string | null;
        servicelocation: string | null;

        SSL_CONNECTION_FAILED_PREFIX: 'SSL';
        DNS_RESOLUTION_FAILED: 'C00';
        HOST_UNREACHABLE: 'C01';
        CONNECTION_REFUSED: 'C02';
        CONNECTION_ERROR: 'C03';
        CORRUPT_MEDIA_ISOBMFF: 'M00';
        CORRUPT_MEDIA_OTHER: 'M01';
        BASE_URL_CHANGED: 'F00';
        BECAME_REPORTER: 'S00';
    }

    interface Metrics {
        metrics: string;
        Range: any[];
        Reporting: any[];
    }

    interface Range {
        starttime: number;
        duration: number;
        _useWallClockTime: boolean;
    }

    interface Reporting {
        DEFAULT_DVB_PROBABILITY: 1000;

        schemeIdUri: string;
        value: string;
        dvbReportingUrl: string;
        dvbProbability: number;
    }

    /**
     * Streaming - Metrics
     **/

    interface MetricsReporting {
        createMetricsReporting(config: object): void;

        getReportingFactory(): ReportingFactory;

        getMetricsHandlerFactory(): MetricsHandlerFactory;
    }

    /**
     * Streaming - Models
     **/

    interface BaseURLTreeModel {
        reset(): void;

        update(manifest: object): void;

        getForPath(path: any): any;

        invalidateSelectedIndexes(serviceLocation: string): void;

        getBaseUrls(root: any): BaseURL[];

        setConfig(config: object): void;
    }

    interface CmcdModel {
        getQueryParameter(request: HTTPRequest): { key: string, finalPayloadString: string } | null;

        getHeaderParameters(request: HTTPRequest): object | null;

        setConfig(config: object): void;

        reset(): void;

        initialize(): void;
    }

    interface FragmentModel {
        getStreamId(): string;

        getType(): string;

        getRequests(filter: any): HTTPRequest[];

        isFragmentLoaded(request: HTTPRequest): boolean;

        isFragmentLoadedOrPending(request: HTTPRequest): boolean;

        removeExecutedRequestsBeforeTime(time: number): boolean;

        removeExecutedRequestAfterTime(time: number): boolean;

        syncExecutedRequestsWithBufferedRange(bufferedRanges: Range[], streamDuration: number): void;

        abortRequests(): void;

        executeRequest(request: HTTPRequest): void;

        reset(): void;

        resetInitialSettings(): void;
    }

    interface AastLowLatencyThroughputModel {
        setup(): void;

        addMeasurement(request: HTTPRequest, fetchDownloadDurationMS: number, chunkMeasurements: object[], requestTimeMS: number, throughputCapacityDelayMS: number): void;

        getThroughputCapacityDelayMS(request: HTTPRequest, currentBufferLevel: number): number;

        getEstimatedDownloadDurationMS(request: HTTPRequest): number;
    }

    interface ThroughputModel {
        addEntry(mediaType: MediaType, httpRequest: HTTPRequest): void;

        getThroughputDict(mediaType: MediaType): ThroughputDictEntry;

        getEwmaThroughputDict(mediaType: MediaType): ThroughputEwmaDictEntry;

        getEwmaLatencyDict(mediaType: MediaType): ThroughputEwmaDictEntry;

        getEwmaHalfLife(mediaType: MediaType): object;

        getLatencyDict(mediaType: MediaType): ThroughputDictEntry;

        reset(): void;
    }

    interface ManifestModel {
        getValue(): object;

        setValue(value: object): void;
    }

    interface MediaPlayerModel {
        getABRCustomRules(): object[];

        addABRCustomRule(type: string, rulename: string, rule: any): void;

        removeABRCustomRule(rulename: string): void;

        getInitialBufferLevel(): number;

        getBufferTimeDefault(): number;

        getRetryAttemptsForType(type: string): number;

        getRetryIntervalsForType(type: string): any;

        getLiveDelay(): number;

        getLiveCatchupLatencyThreshold(): number;

        addUTCTimingSource(schemeIdUri: string, value: string): void;

        removeUTCTimingSource(schemeIdUri: string, value: string): void;

        getUTCTimingSources(): UTCTiming[];

        clearDefaultUTCTimingSources(): void;

        restoreDefaultUTCTimingSources(): void;

        setXHRWithCredentialsForType(type: string, value: any): void;

        getXHRWithCredentialsForType(type: string): object;

        getDefaultUtcTimingSource(): UTCTiming;

        reset(): void;
    }

    interface MetricsModel {
        clearCurrentMetricsForType(type: string): void;

        clearAllCurrentMetrics(): void;

        getMetricsFor(type: string, readOnly: boolean): object;

        addHttpRequest(mediaType: MediaType, tcpid: string, type: string, url: string, quality: number, actualurl: string, servicelocation: string, rage: Range, trequest: Date, tresponse: Date, tfinish: Date, responsecode: number, mediaduration: number, responseHeaders: any[], traces: object): void;

        addRepresentationSwitch(mediaType: MediaType, t: Date, mt: Date, to: string, lto: string): void;

        addBufferLevel(mediaType: MediaType, t: Date, level: number): void;

        addBufferState(mediaType: MediaType, state: string, target: number): void;

        addDVRInfo(mediaType: MediaType, currentTime: number, mpd: Mpd, range: Range): void;

        addDroppedFrames(mediaType: MediaType, quality: number): void;

        addSchedulingInfo(mediaType: MediaType, t: number, startTime: number, availabilityStartTime: number, duration: number, quality: number, range: Range, state: string): void;

        addRequestsQueue(mediaType: MediaType, loadingRequests: any[], executedRequests: any[]): void;

        addManifestUpdate(mediaType: MediaType, type: string, requestTime: number, fetchTime: number): void;

        updateManifestUpdateInfo(manifestUpdate: ManifestUpdate, updatedFields: any[]): void;

        addManifestUpdateStreamInfo(manifestUpdate: ManifestUpdate, id: string, index: number, start: number, duration: number): void;

        addManifestUpdateRepresentationInfo(manifestUpdate: ManifestUpdate, representation: Representation, mediaType: MediaType): void;

        addPlayList(vo: any): void;

        addDVBErrors(vo: any): void;
    }

    interface URIFragmentModel {
        initialize(uri: string): void;

        getURIFragmentData(): URIFragmentData;
    }

    interface VideoModel {
        initialize(): void;

        reset(): void;

        onPlaybackCanPlay(): void;

        setPlaybackRate(value: number, ignoreReadyState?: boolean): void;

        setcurrentTime(currentTime: number, stickToBuffered: boolean): void;

        stickTimeToBuffered(time: number): number;

        getElement(): HTMLVideoElement | HTMLAudioElement;

        setElement(value: HTMLVideoElement | HTMLAudioElement): void;

        setSource(source: string): void;

        getSource(): string | null;

        getTTMLRenderingDiv(): HTMLDivElement | null;

        setTTMLRenderingDiv(div: HTMLDivElement): void;

        setStallState(type: MediaType, state: boolean): void;

        isStalled(): boolean;

        addStalledStream(type: MediaType): void;

        removeStalledStream(type: MediaType): void;

        stallStream(type: MediaType, isStalled: boolean): void;

        onPlaying(): void;

        getPlaybackQuality(): number;

        play(): void;

        isPaused(): void;

        pause(): void;

        isSeeking(): void;

        getTime(): number | null;

        getPlaybackRate(): number | null;

        getPlayedRanges(): TimeRanges | null;

        getEnded(): boolean | null;

        addEventListener(): void;

        removeEventListener(): void;

        getReadyState(): number;

        getBufferRange(): TimeRanges | null;

        getClientWidth(): number;

        getClientHeight(): number;

        getVideoWidth(): number;

        getVideoHeight(): number;

        getVideoRelativeOffsetTop(): number;

        getVideoRelativeOffsetLeft(): number;

        getTextTracks(): TextTrackList[];

        getTextTrack(kind: TextTrackType, label: string | number | undefined, isTTML: boolean, isEmbedded: boolean): TextTrackInfo | null;

        addTextTrack(kind: TextTrackType, label: string | number | undefined, isTTML: boolean, isEmbedded: boolean): TextTrackInfo;

        appendChild(childElement: any): void;

        removeChild(childElement: any): void;

        waitForReadyState(targetReadyState: number, callback: () => any): void;

    }

    /**
     * Streaming - Net
     **/

    interface FetchLoader {
        load(httpRequest: HTTPRequest): void;

        abort(request: HTTPRequest): void;

        calculateDownloadedTime(downloadedData: any, bytesReceived: any): number | null;

        setup(cfg: object): void;
    }

    interface HTTPLoader {
        load(config: object): void;

        abort(): void;
    }

    interface SchemeLoaderFactory {
        getLoader(url: string): HTTPLoader;

        registerLoader(scheme: string, loader: any): void;

        unregisterLoader(scheme: string): void;

        unregisterAllLoader(): void;

        reset(): void;
    }

    interface URLLoader {
        load(config: object): any;

        abort(): void;
    }

    interface XHRLoader {
        load(httpRequest: HTTPRequest): HTTPRequest;

        abort(request: HTTPRequest): void;
    }

    /**
     * Streaming - Protection - Controllers
     **/

    interface ProtectionController {
        initializeForMedia(mediaInfo: MediaInfo): void;

        clearMediaInfoArray(): void;

        handleKeySystemFromManifest(): void;

        createKeySession(keySystemInfo: KeySystemInfo): void;

        loadKeySession(keySystemInfo: KeySystemInfo): void;

        removeKeySession(sessionToken: SessionToken): void;

        closeKeySession(sessionToken: SessionToken): void;

        setServerCertificate(serverCertificate: ArrayBuffer): void;

        setMediaElement(element: HTMLMediaElement): void;

        setSessionType(value: string): void;

        setRobustnessLevel(level: string): void;

        setProtectionData(data: object): void;

        getSupportedKeySystemsFromContentProtection(cps: object[]): object[];

        getKeySystems(): any[];

        setKeySystems(keySystems: KeySystem[]): void;

        setLicenseRequestFilters(filters: any[]): void;

        setLicenseResponseFilters(filters: any[]): void;

        stop(): void;

        reset(): void;
    }

    interface ProtectionKeyController {
        initialize(): void;

        setProtectionData(protectionDataSet: ProtectionDataSet): ProtectionData;

        isClearKey(keySystem: KeySystem): boolean;

        initDataEquals(initData1: ArrayBuffer, initData2: ArrayBuffer): boolean;

        getKeySystems(): KeySystem[];

        setKeySystems(newKeySystems: KeySystem[]): void;

        getKeySystemBySystemString(systemString: string): KeySystem | null;

        getSupportedKeySystemsFromContentProtection(cps: object[], protDataSet: ProtectionDataSet, sessionType: string): object[]; //it says protDataSet but param is marked as protData

        getSupportedKeySystemsFromSegmentPssh(initData: ArrayBuffer, protDataSet: ProtectionDataSet, sessionType: string): object[];

        getLicenseServerModelInstance(keySystem: KeySystem, protData: ProtectionData, messageType: string): any | null; // LicenseServer instead of any

        processClearKeyLicenseRequest(clearKeySystem: KeySystem, ProtectionData: ProtectionData, message: ArrayBuffer): ClearKeyKeySet | null;

        setConfig(config: object): void;
    }

    /**
     * Streaming - Protection - Drm
     **/

    interface KeySystem {
        systemString: string;
        uuid: string;
        schemeIdURI: string;

        getInitData(cp: object, cencContentProtection: object | null): ArrayBuffer | null;

        getRequestHeadersFromMessage(message: ArrayBuffer): object | null;

        getLicenseRequestFromMessage(message: ArrayBuffer): Uint8Array | null;

        getLicenseServerURLFromInitData(initData: ArrayBuffer): string | null;

        getCDMData(cdmData: string | null): ArrayBuffer | null;

        getSessionId(): string | null;
    }

    interface KeySystemClearKey {
        uuid: string;
        systemString: string;
        schemeIdURI: string;

        getInitData(cp: object, cencContentProtection: object | null): ArrayBuffer | null;

        getRequestHeadersFromMessage(): object;

        getLicenseRequestFromMessage(message: ArrayBuffer): Uint8Array | null;

        getLicenseServerURLFromInitData(): null;

        getCDMData(): null;

        getClearKeysFromProtectionData(protectionData: ProtectionData, message: ArrayBuffer): ClearKeyKeySet;
    }

    interface KeySystemPlayReady {
        uuid: string;
        schemeIdURI: string;
        systemString: string;

        getInitData(cpData: object): ArrayBuffer;

        getRequestHeadersFromMessage(message: ArrayBuffer): object;

        getLicenseRequestFromMessage(message: ArrayBuffer): Uint8Array | null;

        getLicenseServerURLFromInitData(initData: ArrayBuffer): string | null;

        getCDMData(cdmData: string | null): ArrayBuffer | null;

        setPlayReadyMessageFormat(format: string): void;
    }

    interface KeySystemW3CClearKey {
        uuid: string;
        systemString: string;
        schemeIdURI: string;

        getInitData(cp: object): ArrayBuffer | null;

        getRequestHeadersFromMessage(): null;

        getLicenseRequestFromMessage(message: ArrayBuffer): Uint8Array | null;

        getLicenseServerURLFromInitData(): null;

        getCDMData(): null;

        getClearKeysFromProtectionData(protectionData: ProtectionData, message: ArrayBuffer): ClearKeyKeySet;
    }

    interface KeySystemWidevine {
        uuid: string;
        schemeIdURI: string;
        systemString: string;

        getInitData(cp: object): ArrayBuffer | null;

        getRequestHeadersFromMessage(): null;

        getLicenseRequestFromMessage(message: ArrayBuffer): Uint8Array | null;

        getLicenseServerURLFromInitData(): null;

        getCDMData(): null;
    }

    /**
     * Streaming - Protection - Errors
     **/

    interface ProtectionErrors {
        MEDIA_KEYERR_CODE: 100;
        MEDIA_KEYERR_UNKNOWN_CODE: 101;
        MEDIA_KEYERR_CLIENT_CODE: 102;
        MEDIA_KEYERR_SERVICE_CODE: 103;
        MEDIA_KEYERR_OUTPUT_CODE: 104;
        MEDIA_KEYERR_HARDWARECHANGE_CODE: 105;
        MEDIA_KEYERR_DOMAIN_CODE: 106;
        MEDIA_KEY_MESSAGE_ERROR_CODE: 107;
        MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_CODE: 108;
        SERVER_CERTIFICATE_UPDATED_ERROR_CODE: 109;
        KEY_STATUS_CHANGED_EXPIRED_ERROR_CODE: 110;
        MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_CODE: 111;
        KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE: 112;
        KEY_SESSION_CREATED_ERROR_CODE: 113;
        MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE: 114;

        MEDIA_KEYERR_UNKNOWN_MESSAGE: 'An unspecified error occurred. This value is used for errors that don\'t match any of the other codes.';
        MEDIA_KEYERR_CLIENT_MESSAGE: 'The Key System could not be installed or updated.';
        MEDIA_KEYERR_SERVICE_MESSAGE: 'The message passed into update indicated an error from the license service.';
        MEDIA_KEYERR_OUTPUT_MESSAGE: 'There is no available output device with the required characteristics for the content protection system.';
        MEDIA_KEYERR_HARDWARECHANGE_MESSAGE: 'A hardware configuration change caused a content protection error.';
        MEDIA_KEYERR_DOMAIN_MESSAGE: 'An error occurred in a multi-device domain licensing configuration. The most common error is a failure to join the domain.';
        MEDIA_KEY_MESSAGE_ERROR_MESSAGE: 'Multiple key sessions were creates with a user-agent that does not support sessionIDs!! Unpredictable behavior ahead!';
        MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_MESSAGE: 'DRM: Empty key message from CDM';
        SERVER_CERTIFICATE_UPDATED_ERROR_MESSAGE: 'Error updating server certificate -- ';
        KEY_STATUS_CHANGED_EXPIRED_ERROR_MESSAGE: 'DRM: KeyStatusChange error! -- License has expired';
        MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_MESSAGE: 'DRM: No license server URL specified!';
        KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE: 'DRM: KeySystem Access Denied! -- ';
        KEY_SESSION_CREATED_ERROR_MESSAGE: 'DRM: unable to create session! --';
        MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE: 'DRM: licenser error! --';
    }

    /**
     * Streaming - Protection - Models
     **/

    interface ProtectionModel_01b {
        getAllInitData(): ArrayBuffer[];

        getSessions(): any[]; // Is this MediaSession[] ?

        requestKeySystemAccess(ksConfigurations: object[]): Promise<any>;

        selectKeySystem(keySystemAccess: any): Promise<any>;

        setMediaElement(mediaElement: HTMLMediaElement): void;

        createKeySession(ksInfo: KeySystemInfo): any;

        updateKeySession(sessionToken: SessionToken, message: ArrayBuffer): void;

        closeKeySession(sessionToken: SessionToken): void;

        setServerCertificate(): void; // Not supproted

        loadKeySession(): void; // Not supproted

        removeKeySession(): void; // Not supproted

        stop(): void;

        reset(): void;
    }

    interface ProtectionModel_3Fe2014 {
        getAllInitData(): ArrayBuffer[];

        getSessions(): any[]; // Is this MediaSession[] ?

        requestKeySystemAccess(ksConfigurations: object[]): Promise<any>;

        selectKeySystem(keySystemAccess: any): Promise<any>;

        setMediaElement(mediaElement: HTMLMediaElement): void;

        createKeySession(ksInfo: KeySystemInfo): any;

        updateKeySession(sessionToken: SessionToken, message: ArrayBuffer): void;

        closeKeySession(sessionToken: SessionToken): void;

        setServerCertificate(): void; // Not supproted

        loadKeySession(): void; // Not supproted

        removeKeySession(): void; // Not supproted

        stop(): void;

        reset(): void;
    }

    interface ProtectionModel_21Jan2015 {
        getAllInitData(): ArrayBuffer[];

        getSessions(): any[]; // Is this MediaSession[] ?

        requestKeySystemAccess(ksConfigurations: object[]): Promise<any>;

        selectKeySystem(keySystemAccess: KeySystemAccess): Promise<any>;

        setMediaElement(mediaElement: HTMLMediaElement): void;

        createKeySession(ksInfo: KeySystemInfo): any;

        updateKeySession(sessionToken: SessionToken, message: ArrayBuffer): void;

        closeKeySession(sessionToken: SessionToken): void;

        setServerCertificate(serverCertificate: ArrayBuffer): void;

        loadKeySession(ksInfo: KeySystemInfo): void;

        removeKeySession(sessionToken: SessionToken): void;

        stop(): void;

        reset(): void;
    }

    interface ProtectionModel {
        getAllInitData(): ArrayBuffer[];

        requestKeySystemAccess(ksConfigurations: object[]): Promise<any>;

        selectKeySystem(keySystemAccess: KeySystemAccess): Promise<any>;

        setMediaElement(mediaElement: HTMLMediaElement): void;

        createKeySession(initData: ArrayBuffer, protData: ProtectionData, sessionType: string): void;

        updateKeySession(sessionToken: SessionToken, message: ArrayBuffer): void;

        closeKeySession(sessionToken: SessionToken): void;

        setServerCertificate(serverCertificate: ArrayBuffer): void;

        loadKeySession(sessionId: string, initData: ArrayBuffer): void;

        removeKeySession(sessionToken: SessionToken): void;

        stop(): void;

        reset(): void;
    }

    /**
     * Streaming - Protection - Server
     **/

    interface ClearKey {
        getServerURLFromMessage(url: string): string;

        getHTTPMethod(): 'POST';

        getResponseType(): 'json';

        getLicenseMessage(serverResponse: object): ClearKeyKeySet;

        getErrorResponse(serverResponse: object): string;
    }

    interface DRMToday {
        getServerURLFromMessage(url: string): string;

        getHTTPMethod(): 'POST';

        getResponseType(keySystemStr: string): string;

        getLicenseMessage(serverResponse: object, keySystemStr: string): any;

        getErrorResponse(serverResponse: object): string;
    }

    interface LicenseServer {
        getServerURLFromMessage(url: string, message: ArrayBuffer, messageType: string): string;

        getHTTPMethod(messageType: string): string;

        getResponseType(keySystemStr: string, messageType: string): string;

        getLicenseMessage(serverResponse: object, keySystemStr: string): ArrayBuffer | null;

        getErrorResponse(serverResponse: object): string;
    }

    interface PlayReady {
        getServerURLFromMessage(url: string): string;

        getHTTPMethod(): 'POST';

        getResponseType(): 'arraybuffer';

        getLicenseMessage(serverResponse: object): any;

        getErrorResponse(serverResponse: object): string;
    }

    interface Widevine {
        getServerURLFromMessage(url: string): string;

        getHTTPMethod(): 'POST';

        getResponseType(): 'arraybuffer';

        getLicenseMessage(serverResponse: object): object;

        getErrorResponse(serverResponse: object): string;
    }

    /**
     * Streaming - Protection - Vo
     **/

    interface ClearKeyKeySet {
        keyPairs: KeyPair[];
        type: string;
    }

    class KeyPair {
        constructor(keyId: string, key: string)

        keyId: string;
        key: string;
    }

    class KeySystemAccess {
        constructor(keySystem: KeySystem, ksConfiguration: KeySystemConfiguration)

        keySystem: KeySystem;
        ksConfiguration: KeySystemConfiguration;
    }

    class KeySystemConfiguration {
        constructor(audioCapabilities: MediaCapability[], videoCapabilities: MediaCapability[], distinctiveIdentifier: string, persistentState: string, sessionTypes: string[])

        audioCapabilities: MediaCapability[];
        videoCapabilities: MediaCapability[];
        distinctiveIdentifier: string;
        persistentState: string;
        sessionTypes: string[];
    }

    class LicenseRequest {
        constructor(url: string, method: string, responseType: string, headers: { [key: string]: string }, withCredentials: boolean, messageType: string, sessionId: string, data: ArrayBuffer)

        url: string;
        method: string;
        responseType: string;
        headers: { [key: string]: string };
        withCredentials: boolean;
        messageType: string;
        sessionId: string;
        data: ArrayBuffer;
    }

    class LicenseRequestComplete {
        constructor(message: Uint8Array, sessionToken: SessionToken, messageType: string)

        message: Uint8Array;
        sessionToken: SessionToken;
        messageType: string;
    }

    class LicenseResponse {
        constructor(url: string, headers: object, data: ArrayBuffer)

        url: string;
        headers: object;
        data: ArrayBuffer;
    }

    class MediaCapability {
        constructor(contentType: string, robustness: string)

        contentType: string;
        robustness: string;
    }

    class NeedKey {
        constructor(initData: ArrayBuffer, initDataType: string)

        initData: ArrayBuffer;
        initDataType: string;
    }

    interface ProtectionDataSet {
        [keySystemName: string]: ProtectionData;
    }

    interface ProtectionData {
        /**
         * A license server URL to use with this key system.
         * When specified as a string, a single URL will be used regardless of message type.
         * When specified as an object, the object will have property names for each message
         * type with the corresponding property value being the URL to use for
         * messages of that type
         */
        serverURL?: string | { [P in MediaKeyMessageType]: string };

        /** HTTP headers to add to the license request */
        httpRequestHeaders?: object;

        /** Wether license request is made using credentials */
        withCredentials?: Boolean;

        /** Timeout (in ms) for the license requests */
        httpTimeout?: number;

        /** The licenser server certificate as a BASE64 string representation of the binary stream (see https://www.w3.org/TR/encrypted-media/#dom-mediakeys-setservercertificate) */
        serverCertificate?: string;

        /** The audio robustness level (see https://www.w3.org/TR/encrypted-media/#dom-mediakeysystemmediacapability-robustness) */
        audioRobustness?: string;

        /** The video robustness level (see https://www.w3.org/TR/encrypted-media/#dom-mediakeysystemmediacapability-robustness) */
        videoRobustness?: string;

        /** Distinctive identifier (see https://www.w3.org/TR/encrypted-media/#dom-mediakeysystemconfiguration-distinctiveidentifier) */
        distinctiveIdentifier?: string;

        /** The session type (see https://www.w3.org/TR/encrypted-media/#dom-mediakeysessiontype) */
        sessionType?: string;

        /** The session id (see https://www.w3.org/TR/encrypted-media/#session-id) */
        sessionId?: string;

        /**
         * Defines a set of clear keys that are available to the key system.
         * Object properties are base64-encoded keyIDs (with no padding).
         * Corresponding property values are keys, base64-encoded (no padding).
         */
        clearkeys?: { [key: string]: string };

        /** Priority level of the key system to be selected (0 is the highest prority, -1 for undefined priority) */
        priority?: number;
    }

    interface SessionToken {
        session: MediaKeySession;
        initData: any;

        getSessionId(): string;

        getExpirationTime(): number;

        getKeyStatuses(): MediaKeyStatusMap;

        getSessionType(): string;
    }

    /**
     * Streaming - Protection
     **/

    interface CommonEncryption {
        // Does not anything
    }

    interface Protection {
        createProtectionSystem(config: object): void;
    }

    /**
     * Streaming - Rules - ABR - LolP
     */

    interface LearningAbrController {
        getNextoQuality(mediaInfo: MediaInfo, throughput: number, latency: number, bufferSize: number, playbackRate: number, currentQualityIndex: number, dynamicWeightSelector: object): any | null;

        reset(): void;
    }

    interface LoLpQoEEvaluator {
        setupPerSegmentQoe(sDuration: number, maxBrKbps: number, minBrKbs: number): void;

        logSegmentMetrics(segmentBitrate: number, segmentRebufferTime: number, currentLatency: number, currentPlaybackSpeed: number): void;

        getPerSegmentQoe(): QoeInfo;

        calculateSingleUseQoe(segmentBitrate: number, segmentRebufferTime: number, currentLatency: number, currentPlaybackSpeed: number): number;

        reset(): void;
    }

    interface LoLpRule {
        getMaxIndex(rulesContext: RulesContext): SwitchRequest;

        reset(): void;
    }

    interface LoLpWeightSelector {
        getMinBuffer(): number;

        getSegmentDuration(): number;

        getNextBufferWithBitrate(bitrateToDownload: number, currentBuffer: number, currentThroughput: number): number;

        getNextBuffer(currentBuffer: number, downloadTime: number): number;

        findWeightVector(neurons: any[], currentLatency: number, currentBuffer: number, currentRebuffer: number, currentThroughput: number, playbackRate: number): number | null;
    }

    class QoeInfo {
        type: string | null;
        lastBitrate: number | null;
        weights: {
            bitrateReward: number | null,
            bitrateSwitchPenalty: number | null,
            rebufferPenalty: number | null,
            latencyPenalty: number | null,
            playbackSpeedPenalty: number | null
        };
        bitrateWSum: number;
        bitrateSwitchSum: number;
        rebufferWSum: number;
        latencyWSum: number;
        playbackSpeedWSum: number;
        totalQoe: number;

    }

    /**
     * Streaming - Rules -Abr
     **/

    interface AbandonRequestsRule {
        shouldAbandon(rulesContext: RulesContext): SwitchRequest;

        reset(): void;
    }

    interface ABRRulesCollection {
        initialize(): void;

        reset(): void;

        getMaxQuality(rulesContext: RulesContext): number;

        getMinSwitchRequest(srArray: any[]): SwitchRequest;

        shouldAbandonFragment(rulesContext: RulesContext, streamId: string): SwitchRequest;

        getQualitySwitchRules(): any[];
    }

    interface BolaRule {
        getMaxIndex(rulesContext: RulesContext): SwitchRequest;

        reset(): void;
    }

    interface DroppedFramesRule {
        getMaxIndex(rulesContext: RulesContext): SwitchRequest;
    }

    interface InsufficientBufferRule {
        getMaxIndex(rulesContext: RulesContext): SwitchRequest;

        reset(): void;
    }

    interface L2ARule {
        getMaxIndex(rulesContext: RulesContext): SwitchRequest;

        reset(): void;
    }

    interface SwitchHistoryRule {
        getMaxIndex(rulesContext: RulesContext): SwitchRequest;
    }

    interface ThroughputRule {
        getMaxIndex(rulesContext: RulesContext): SwitchRequest;

        reset(): void;
    }

    /**
     * Streaming - Rules
     **/

    interface DroppedFramesHistory {
        push(streamId: string, index: number, playbackQuality: number): void;

        getFrameHistory(streamId: string): object;

        clearDataForStream(streamId: string): void;

        reset(): void;
    }

    interface RulesContext {
        getMediaType(): string;

        getMediaInfo(): MediaInfo;

        getDroppedFramesHistory(): DroppedFramesHistory;

        getCurrentRequest(): SwitchRequest;

        getSwitchHistory(): SwitchRequestHistory; //pot. just Switch History

        getStreamInfo(): StreamInfo;

        getScheduleController(): ScheduleController;

        getThroughputController(): ThroughputController;

        getAbrController(): AbrController;

        getVoRepresentation(): Representation;

        getVideoModel(): VideoModel;
    }

    interface SwitchRequest {
        quality: number | undefined;
        reason: string | null;
        priority: number | null;
    }

    interface SwitchRequestHistory {
        push(switchRequest: SwitchRequest): void;

        getSwitchRequests(): SwitchRequest[];

        reset(): void;
    }

    /**
     * Streaming - Text
     **/

    type TextTrackType = 'subtitles' | 'caption' | 'descriptions' | 'chapters' | 'metadata';

    type FontDownloadStatus = 'unloaded' | 'loaded' | 'error';

    interface FontInfo {
        fontFamily: string;
        url: string;
        mimeType: string;
        trackId: number;
        streamId: string;
        isEssential: boolean;
        status: FontDownloadStatus;
        fontFace: FontFace;
    }

    interface DVBFonts {
        addFontsFromTracks(tracks: TextTrackInfo, streamId: string): void;

        downloadFonts(): void;

        getFonts(): FontInfo[];

        getFontsForTrackId(trackId: number): FontInfo[];
        
        reset(): void;
    }

    interface EmbeddedTextHtmlRender {
        createHTMLCaptionsFromScreen(videoElement: HTMLVideoElement, startTime: number, endTime: number, captionScreen: any): any[];
    }

    interface NotFragmentTextBufferController {
        initialize(source: MediaSource): void;

        getStreamId(): string;

        getType(): string;

        getBufferControllerType(): string;

        createBufferSink(mediaInfo: MediaInfo): void;

        getBuffer(): SourceBufferSink;

        getBufferLevel(): 0;

        getRangeAt(): null;

        getAllRangesWithSafetyFactor(): [];

        getContinuousBufferTimeForTargetTime(): number;

        setMediaSource(value: MediaSource): void;

        getMediaSource(): MediaSource;

        appendInitSegmentFromCache(representationId: string): void;

        getIsBufferingCompleted(): boolean;

        setIsBufferingCompleted(value: boolean): void;

        getIsPruningInProgress(): false;

        reset(): void;

        clearBuffers(): Promise<any>;

        prepareForPlaybackSeek(): Promise<any>;

        prepareForReplacementTrackSwitch(): Promise<any>;

        setSeekTarget(): void; // DECLARED AND EXPORTED BUT NOT IMPLEMENTED

        updateAppendWindow(): Promise<any>;

        pruneAllSafely(): Promise<any>;

        updateBufferTimestampOffset(): Promise<any>;

        segmentRequestingCompleted(): void // DECLARED AND EXPORTED BUT NOT IMPLEMENTED
    }

    interface TextController {
        deactivateStream(streamInfo: StreamInfo): void;

        initialize(): void;

        initializeForStream(streamInfo: StreamInfo): void;

        createTracks(streamInfo: StreamInfo): void;

        getTextSourceBuffer(streamInfo: StreamInfo): TextSourceBuffer;

        getAllTracksAreDisabled(): boolean;

        addEmbeddedTrack(streamInfo: StreamInfo, mediaInfo: MediaInfo): void;

        setInitialSettings(settings: object): void;

        enableText(streamId: string, enable: boolean): void;

        isTextEnabled(): boolean;

        setTextTrack(streamId: string, idx: number): void;

        getCurrentTrackIdx(streamId: string): number;

        enableForcedTextStreaming(enable: boolean): void;

        addMediaInfosToBuffer(streamInfo: StreamInfo, mInfos: MediaInfo[], mimeType: string | null, fragmentModel?: FragmentModel): void;

        reset(): void;
    }

    interface TextSourceBuffer {
        initialize(): void;

        addMediaInfos(type: string, mInfos: MediaInfo[], fModel: FragmentModel): void;

        resetMediaInfos(): void;

        getStreamId(): string;

        append(bytes: number[], chunk: DataChunk): void;

        abort(): void; // DECLARED AND EXPORTED BUT NOT IMPLEMENTED

        addEmbeddedTrack(mediaInfo: MediaInfo): void;

        resetEmbedded(): void;

        getConfig(): object;

        setCurrentFragmentedTrackIdx(idx: number): void;

        remove(start?: number, end?: number): void;

        reset(): void;
    }

    interface TextTracks {
        initialize(): void;

        getStreamId(): string;

        addTextTrack(textTrackInfoVO: TextTrackInfo): void;

        addCaptions(trackIdx: number, timeOffset: number, captionData: object): void;

        createTracks(): void;

        getCurrentTrackIdx(): number;

        setCurrentTrackIdx(idx: number): void;

        getTrackIdxForId(trackId: string): number;

        getCurrentTrackInfo(): TextTrackInfo;

        setModeForTrackIdx(idx: number, mode: string): void;

        deleteCuesFromTrackIdx(trackIdx: number, start: number, end: number): void;

        deleteAllTextTracks(): void;
    }

    /**
     * Streaming - Thumbnail
     **/

    interface ThumbnailController {
        getStreamId(): string;

        initialize(): void;

        provide(time: number, callback: Function): void;

        setTrackByIndex(index: number): void;

        getCurrentTrackIndex(): number;

        getBitrateList(): BitrateInfo;

        reset(): void;
    }

    interface ThumbnailTracks {
        getTracks(): any[];

        addTracks(): void;

        reset(): void;

        setTrackByIndex(index: number): void;

        getCurrentTrack(): any | null;

        getCurrentTrackIndex(): number;

        getThumbnailRequestForTime(time: number): Request;
    }

    /**
     * Streaming - Utils - baseUrlResolution
     **/

    interface BasicSelector {
        select(baseURLs: BaseURL[]): BaseURL;
    }

    interface DVBSelector {
        select(baseURLs: BaseURL[]): BaseURL[];
    }

    /**
     * Streaming - Utils
     **/

    interface BaseURLSelector {
        chooseSelector(isDVB: boolean): void;

        select(data: ArrayBuffer): void;

        reset(): void;

        setConfig(config: object): void;
    }

    interface LocationSelector {
        selectBaseUrlIndex(data: any): number;

        setConfig(config: object): void;
    }

    interface LocationSelector {
        select(mpdLocations: MpdLocation[]): MpdLocation | null;

        reset(): void;

        setConfig(config: object): void;
    }

    interface BoxParser {
        parse(data: ArrayBuffer): IsoFile | null;

        findLastTopIsoBoxCompleted(types: string[], buffer: ArrayBuffer | Uint8Array, offset: number): IsoBoxSearchInfo;

        getMediaTimescaleFromMoov(ab: ArrayBuffer): number;

        getSamplesInfo(ab: ArrayBuffer): object;

        findInitRange(data: ArrayBuffer): Range;

        parsePayload(types: string[], buffer: ArrayBuffer, offset: number): IsoBoxSearchInfo;
    }

    interface Capabilities {
        setConfig(config: object): void;

        supportsMediaSource(): boolean;

        supportsEncryptedMedia(): boolean;

        supportsCodec(config: object, type: string): Promise<boolean>;

        setEncryptedMediaSupported(value: boolean): void;

        supportsEssentialProperty(ep: object): boolean;

        codecRootCompatibleWithCodec(codec1: string, codec2: string): boolean;
    }

    type CapabilitiesFilter = (representation: Representation) => boolean;

    interface ICapabilitiesFilter {
        setConfig(config: object): void;

        filterUnsupportedFeatures(manifest: object): Promise<any>;

        setCustomCapabilitiesFilters(customFilters: any): any;
    }

    interface CustomTimeRanges {
        customTimeRangeArray: any[];
        length: number;

        add(start: number, end: number): void;

        clear(): void;

        remove(start: number, end: number): void;

        mergeRanges(rangeIndex1: number, rangeIndex2: number): boolean;

        start(index: number): number;

        end(index: number): number;
    }

    interface DefaultURLUtils {
        parseBaseUrl(url: string): string;

        parseOrigin(url: string): string;

        parseScheme(url: string): string;

        isRelative(url: string): boolean;

        isPathAbsolute(url: string): boolean;

        isSchemeRelative(url: string): boolean;

        isHTTPURL(url: string): boolean;

        isHTTPS(url: string): boolean;

        removeHostname(url: string): string;

        resolve(url: string, baseUrl: BaseURL): string;
    }

    interface DOMStorage {
        getSavedBitrateSettings(type: string): number;

        setSavedBitrateSettings(type: string, bitrate: number): void;

        getSavedMediaSettings(type: string): object;

        setSavedMediaSettings(type: string, value: any): void;
    }

    interface EBMLParser {
        getPos(): number;

        setPos(value: number): void;

        consumeTag(tag: object, test: boolean): boolean;

        consumeTagAndSize(tag: object, test: boolean): boolean;

        parseTag(tag: object): boolean;

        skipOverElement(tag: object, test: boolean): boolean;

        getMatroskaCodedNum(retainMSB: boolean): number;

        getMatroskaFloat(size: number): number;

        getMatroskaUint(size: number): number;

        moreData(): boolean;
    }

    interface ErrorHandler {
        error(err: any): void;
    }

    interface InitCache {
        save(chunk: DataChunk): void;

        extract(streamId: string, representationId: string): any | null;

        reset(): void;
    }

    interface IsoFile {
        getBox(type: string): IsoBox;

        getBoxes(type: string): IsoBox[];

        setData(value: string): void;

        getLastBox(): IsoBox | null;
    }

    interface ObjectUtils {
        areEqual(obj1: object, obj2: object): boolean;
    }

    interface SupervisorTools {
        checkParameterType(parameter: any, type: string): void;

        checkInteger(parameter: any): void;

        checkRange(parameter: any, min: number, max: number): void;

        checkIsVideoOrAudioType(type: string): void;
    }

    interface TTMLParser {
        parse(data: string, offsetTime: number, startTimeSegment: number, endTimeSegment: number, images: any[]): { start: number, end: number, type: string, cueID: string, isd: any, images: any[], embeddedImages: any[] }[];
    }

    interface URLUtils {
        registerUrlRegex(regex: RegExp, utils: object): void;

        parseBaseUrl(url: string): string;

        parseOrigin(url: string): string;

        parseScheme(url: string): string;

        isRelative(url: string): boolean;

        isPathAbsolute(url: string): boolean;

        isSchemeRelative(url: string): boolean;

        isHTTPURL(url: string): boolean;

        isHTTPS(url: string): boolean;

        removeHostname(url: string): string;

        resolve(url: string, baseUrl: BaseURL): string;
    }

    interface VTTParser {
        parse(data: ArrayBuffer): { start: number, end: number, data: string, styles: any };
    }

    /**
     * Streaming - Vo - Metrics
     **/

    interface IBufferLevel {
        level: number;
        t: Date;
    }

    interface IBufferState {
        state: string;
        target: number;
    }

    interface IDroppedFrames {
        droppedFrames: number;
        time: Date;
    }

    interface IDVRInfo {
        manifestInfo: IManifestInfo;
        range: Range;
        time: number;
    }

    interface HTTPRequest {
        tcpid: string | null;
        type?: string | null;
        url: string | null;
        actualurl: string | null;
        range: any[];
        trequest: Date | null;
        tresponse: Date | null;
        responsecode: number | null;
        interval: number | null;
        trace: any[];
        cmsd: object;
        _stream: MediaType;
        _tfinish: Date | null;
        _mediaduration: number | null;
        _quality: number | null;
        _responseHeaders: any[] | null;
        _serviceLocation: string | null;
        _fileLoaderType: string;
        _resourceTimingValues: object;
    }

    interface ManifestUpdate {
        mediaType: MediaType | null;
        type: string | null;
        requestTime: number | null;
        fetchTime: number | null;
        availabilityStartTime: number | null;
        presentationStartTime: number;
        clientTimeOffset: number;
        currentTime: number | null;
        buffered: object | null;
        latency: number;
        streamInfo: StreamInfo[];
        representationInfo: ManifestUpdateRepresentationInfo[];

    }

    interface ManifestUpdateRepresentationInfo {
        id: string | null;
        index: number | null;
        mediaType: MediaType | null;
        presentationTimeOffset: number | null;
        startNumber: number | null;
    }

    interface PlayList {
        start: number | null;
        mstart: number | null;
        starttype: string | null;
        trace: any[];
    }

    interface PlayListTrace {
        representationid: string | null;
        subreplevel: number | null;
        start: number | null;
        mstart: number | null;
        duration: number | null;
        playbackspeed: number | null;
        stopreason: string | null;
    }

    interface RequestSwitch {
        t: number | null;
        mt: number | null;
        to: string | null;
        lto: string | null;
    }

    class RequestsQueue {
        /**
         * Array of all of the requests that have begun to load.
         * This request may not make it into the executed queue if it is abandon due to ABR rules for example.
         */
        loadingRequests: any[];
        /**
         * Array of the the requests that have completed
         */
        executedRequests: any[];
    }

    //eg. duration initialized with null; should be NaN?
    interface SchedulingInfo {
        mediaType: MediaType | null;
        t: number | null;
        type: string | null;
        startTime: number | null;
        availabilityStartTime: number | null;
        duration: number | null;
        quality: number | null;
        range: Range | null;
        state: string | null;
    }

    interface TCPConnection {
        tcpid: string | null;
        dest: string | null;
        topen: number | null;
        tclose: number | null;
        tconnect: number | null
    }

    /**
     * Streaming - Vo
     */

    class BitrateInfo {
        mediaType: MediaType;
        bitrate: number;
        width: number;
        height: number;
        scanType: string;
        qualityIndex: number;
    }

    interface DashJSError {
        code: number | null;
        message: string | null;
        data: unknown | null;
    }

    interface DataChunk {
        streamId: string | null;
        mediaInfo: MediaInfo | null;
        segmentType: string | null;
        quality: number;
        index: number;
        bytes: number[] | null;
        start: number;
        end: number;
        duration: number;
        representationId: string | null;
        endFragment: object | null;
    }

    class FragmentRequest {
        constructor(url: string);

        action: string;
        availabilityEndTime: number;
        availabilityStartTime: number;
        bytesLoaded: number;
        bytesTotal: number;
        delayLoadingTime: number;
        duration: number;
        firstByteDate: Date;
        index: number;
        mediaInfo: MediaInfo;
        mediaStartTime: number;
        mediaType: MediaType;
        quality: number;
        representationId: string;
        startDate: Date;
        requestEndDate: Date | null;
        responseType: string;
        serviceLocation: string;
        startTime: number;
        timescale: number;
        type: 'InitializationSegment' | 'MediaSegment' | null;
        url: string | null;
        wallStartTime: number | null;
    }

    class HeadRequest extends FragmentRequest {
        constructor(url: string);

        checkforExistenceOnly: boolean;
    }

    class IsoBox {
        constructor(boxData: object);
    }

    class IsoBoxSearchInfo {
        constructor(lastCompletedOffset: number, found: boolean, size: number);

        lastCompletedOffset: number;
        found: boolean;
        size: number;
    }

    class MetricsList {
        BufferLevel: IBufferLevel[];
        BufferState: IBufferState[];
        DVBErrors: DVBErrors[];
        DVRInfo: IDVRInfo[];
        DroppedFrames: IDroppedFrames[];
        HttpList: any[];
        ManifestUpdate: ManifestUpdate[];
        PlayList: PlayList[];
        RepSwitchList: RequestSwitch[];
        RequestsQueue: RequestsQueue | null;
        SchedulingInfo: SchedulingInfo;
        TcpList: TCPConnection[];
    }

    class TextRequest extends FragmentRequest {
        constructor(url: string, type: string);

        url: string | null;
        type: 'InitializationSegment' | 'MediaSegment' | null;
        mediaType: MediaType;
        responseType: string;
    }

    class TextTrackInfo extends MediaInfo {
        captionData: CaptionData[] | null;
        label: string | null;
        defaultTrack: boolean;
        kind: string;
        isFragmented: boolean;
        isEmbedded: boolean;
        isTTML: boolean;
    }

    interface Thumbnail {
        url: string;
        width: number;
        height: number;
        x: number;
        y: number;
    }

    interface ThumbnailTrackInfo {
        bitrate: number;
        width: number;
        height: number;
        tilesHor: number;
        tilesVert: number;
        widthPerTile: number;
        heightPerTile: number;
        startNumber: number;
        segmentDuration: number;
        timescale: number;
        templateUrl: string;
        id: string;
    }

    interface URIFragmentData {
        t: number | null;
        xywh: any | null;
        track: any | null;
        id: string | null;
        s: any | null;
        r: any | null;
    }

    /**
     * Streaming
     **/

    interface FragmentLoader {
        checkForExistence(request: Request): void;

        load(request: Request): void;

        abort(): void;

        reset(): void;
    }

    interface FragmentSink {
        append(chunk: DataChunk): void;

        remove(start?: number, end?: number): void;

        abort(): void;

        getAllBufferRanges(): any[];

        reset(): void;
    }

    interface ManifestLoader {
        load(url: string, serviceLocation: string | null, queryParams: object | null): void;

        reset(): void;
    }

    interface ManifestUpdater {
        initialize(): void;

        setManifest(manifest: object): void;

        refreshManifest(ignorePatch?: boolean): void;

        getIsUpdating(): boolean;

        setConfig(config: object): void;

        reset(): void;
    }

    namespace MediaPlayer {
        const events: MediaPlayerEvents;
        const errors: MediaPlayerErrors;
    }

    interface MediaPlayerFactory {
        create(): MediaPlayerClass;
    }

    function MediaPlayer(): MediaPlayerFactory;

    interface PreBufferSink {
        getAllBufferRanges(): TimeRanges;

        append(chunk: DataChunk): void;

        remove(start: number, end: number): void;

        abort(): void; // DECLARED AND EXPORTED BUT NOT IMPLEMENTED

        discharge(start?: number, end?: number): void;

        reset(): void;

        updateTimestampOffset(): void; // DECLARED AND EXPORTED BUT NOT IMPLEMENTED

        waitForUpdateEnd(callback: Function): void;

        getBuffer(): PreBufferSink;
    }

    interface SourceBufferSink {
        getType(): string;

        getAllBufferRanges(): object;

        getBuffer(): Buffer;

        append(chunk: DataChunk, request?: Request): Promise<any>;

        remove(range: Range): Promise<any>;

        abort(): Promise<any>;

        reset(): void;

        updateTimestampOffset(mseTimeOffset: number): void;

        initializeForStreamSwitch(mInfo: MediaInfo, selectedRepresentation: Representation, oldSourceBufferSink: SourceBufferSink): Promise<any>;

        initializeForFirstUse(streamInfo: StreamInfo, mInfo: MediaInfo, selectedRepresentation: Representation): void;

        updateAppendWindow(sInfo: StreamInfo): void;

        changeType(codec: string): Promise<any>;

        getSessionType(): string;

        getUsable(): boolean;
    }

    interface Stream {
        initialize(streamInfo: StreamInfo, protectionController: ProtectionController): void;

        getStreamId(): string;

        activate(mediaSource: MediaSource, previousBufferSinks: any[]): void;

        deactivate(keepBuffers: boolean): void;

        getIsActive(): boolean;

        getDuration(): number;

        getStartTime(): number;

        getId(): string;

        getStreamInfo(): StreamInfo | null;

        getHasAudioTrack(): boolean;

        getHasVideoTrack(): boolean;

        startPreloading(mediaSource: MediaSource, previousBuffers: any[]): void;

        getThumbnailController(): object;

        updateData(updatedStreamInfo: StreamInfo): void;

        reset(): void;

        getProcessors(): any[];

        setMediaSource(mediaSource: MediaSource): void;

        isMediaCodecCompatible(newStream: Stream, previousStream: Stream | null): boolean;

        isProtectionCompatible(newStream: Stream): boolean

        getPreloaded(): boolean

        getIsEndedEventSignaled(): boolean

        setIsEndedEventSignaled(value: boolean): void

        getAdapter(): DashAdapter

        getHasFinishedBuffering(): boolean

        setPreloaded(value: boolean): void

        startScheduleControllers(): void

        prepareTrackChange(e: object): void

        prepareQualityChange(e: object): void
    }

    interface StreamProcessor {
        initialize(mediaSource: MediaSource, hasVideoTrack: boolean, isFragmented: boolean): void;

        getStreamId(): string;

        getType(): string;

        isUpdating(): boolean;

        getBufferController(): BufferController;

        getFragmentModel(): FragmentModel;

        getScheduleController(): ScheduleController;

        getRepresentationController(): RepresentationController;

        getVoRepresentation(quality: number): Representation;

        getBufferLevel(): number;

        isBufferingCompleted(): boolean;

        createBufferSinks(previousBufferSinks: any[]): Promise<any>;

        updateStreamInfo(newStreamInfo: StreamInfo): Promise<any>;

        getStreamInfo(): StreamInfo;

        selectMediaInfo(newMediaInfo: MediaInfo): Promise<any>;

        clearMediaInfoArray(): void;

        addMediaInfo(newMediaInfo: MediaInfo): void;

        prepareTrackSwitch(previousBufferSinks: any[]): Promise<any>;

        prepareQualityChange(e: object): void;

        getMediaInfo(): MediaInfo;

        getMediaSource(): MediaSource;

        setMediaSource(mediaSource: MediaSource): void;

        getBuffer(): Buffer;

        setExplicitBufferingTime(value: number): void;

        finalisePlayList(time: number, reason: string): void;

        probeNextRequest(): Request;

        prepareInnerPeriodPlaybackSeeking(e: object): Promise<any>;

        prepareOuterPeriodPlaybackSeeking(): Promise<unknown>;

        reset(errored: boolean, keepBuffers: boolean): void;
    }

    interface Constants {
        STREAM: 'stream';
        VIDEO: 'video';
        AUDIO: 'audio';
        TEXT: 'text';
        MUXED: 'muxed';
        IMAGE: 'image';
        STPP: 'stpp';
        TTML: 'ttml';
        VTT: 'vtt';
        WVTT: 'wvtt';
        CONTENT_STEERING: 'contentSteering';
        LIVE_CATCHUP_MODE_DEFAULT: 'liveCatchupModeDefault';
        LIVE_CATCHUP_MODE_LOLP: 'liveCatchupModeLoLP';
        MOVING_AVERAGE_SLIDING_WINDOW: 'slidingWindow';
        MOVING_AVERAGE_EWMA: 'ewma';
        BAD_ARGUMENT_ERROR: 'Invalid Arguments';
        MISSING_CONFIG_ERROR: 'Missing config parameter(s)';
        TRACK_SWITCH_MODE_ALWAYS_REPLACE: 'alwaysReplace';
        TRACK_SWITCH_MODE_NEVER_REPLACE: 'neverReplace';
        TRACK_SELECTION_MODE_FIRST_TRACK: 'firstTrack';
        TRACK_SELECTION_MODE_HIGHEST_BITRATE: 'highestBitrate';
        TRACK_SELECTION_MODE_HIGHEST_EFFICIENCY: 'highestEfficiency';
        TRACK_SELECTION_MODE_WIDEST_RANGE: 'widestRange';
        TRACK_SELECTION_MODE_HIGHEST_SELECTION_PRIORITY: 'highestSelectionPriority';
        CMCD_MODE_QUERY: 'query';
        CMCD_MODE_HEADER: 'header';
        INITIALIZE: 'initialize';
        TEXT_SHOWING: 'showing';
        TEXT_HIDDEN: 'hidden';
        CC1: 'CC1';
        CC3: 'CC3';
        UTF8: 'utf-8';
        SCHEME_ID_URI: 'schemeIdUri';
        START_TIME: 'starttime';
        SERVICE_DESCRIPTION_DVB_LL_SCHEME: 'urn:dvb:dash:lowlatency:scope:2019';
        SUPPLEMENTAL_PROPERTY_DVB_LL_SCHEME: 'urn:dvb:dash:lowlatency:critical:2019';
        XML: 'XML';
        ARRAY_BUFFER: 'ArrayBuffer';
        DVB_REPORTING_URL: 'dvb:reportingUrl';
        DVB_PROBABILITY: 'dvb:probability';
        VIDEO_ELEMENT_READY_STATES: {
            HAVE_NOTHING: 0;
            HAVE_METADATA: 1;
            HAVE_CURRENT_DATA: 2;
            HAVE_FUTURE_DATA: 3;
            HAVE_ENOUGH_DATA: 4
        };
        FILE_LOADER_TYPES: {
            FETCH: 'fetch_loader';
            XHR: 'xhr_loader'
        };
        THROUGHPUT_TYPES: {
            LATENCY: 'throughput_type_latency';
            BANDWIDTH: 'throughput_type_bandwidth'
        };
        THROUGHPUT_CALCULATION_MODES: {
            EWMA: 'throughputCalculationModeEwma';
            ZLEMA: 'throughputCalculationModeZlema';
            ARITHMETIC_MEAN: 'throughputCalculationModeArithmeticMean';
            BYTE_SIZE_WEIGHTED_ARITHMETIC_MEAN: 'throughputCalculationModeByteSizeWeightedArithmeticMean';
            DATE_WEIGHTED_ARITHMETIC_MEAN: 'throughputCalculationModeDateWeightedArithmeticMean';
            HARMONIC_MEAN: 'throughputCalculationModeHarmonicMean';
            BYTE_SIZE_WEIGHTED_HARMONIC_MEAN: 'throughputCalculationModeByteSizeWeightedHarmonicMean';
            DATE_WEIGHTED_HARMONIC_MEAN: 'throughputCalculationModeDateWeightedHarmonicMean';
        };
        LOW_LATENCY_DOWNLOAD_TIME_CALCULATION_MODE: {
            MOOF_PARSING: 'lowLatencyDownloadTimeCalculationModeMoofParsing';
            DOWNLOADED_DATA: 'lowLatencyDownloadTimeCalculationModeDownloadedData';
            AAST: 'lowLatencyDownloadTimeCalculationModeAast';
        };
        RULES_TYPES: {
            QUALITY_SWITCH_RULES: 'qualitySwitchRules';
            ABANDON_FRAGMENT_RULES: 'abandonFragmentRules'
        };
        QUALITY_SWITCH_RULES: {
            BOLA_RULE: 'BolaRule';
            THROUGHPUT_RULE: 'ThroughputRule';
            INSUFFICIENT_BUFFER_RULE: 'InsufficientBufferRule';
            SWITCH_HISTORY_RULE: 'SwitchHistoryRule';
            DROPPED_FRAMES_RULE: 'DroppedFramesRule';
            LEARN_TO_ADAPT_RULE: 'L2ARule';
            LOL_PLUS_RULE: 'LoLPRule'
        };
        ABANDON_FRAGMENT_RULES: {
            ABANDON_REQUEST_RULE: 'AbandonRequestsRule'
        }

    }

    interface XlinkLoader {
        load(url: string, element: any, resolveObject: object): void;

        reset(): void;
    }

    interface CaptionData {
        start: number;
        end: number;
        data?: string;
        styles?: {
            align?: string;
            line?: string;
            position?: string;
            size?: string;
        };
        type?: string;
        cueID?: string;
        isd?: object;
        images?: string[];
        embeddedImages?: { [id: string]: string };
    }

    type MetricType = 'ManifestUpdate' | 'RequestsQueue';
    type TrackSwitchMode = 'alwaysReplace' | 'neverReplace';
    type TrackSelectionMode =
        'highestSelectionPriority'
        | 'highestBitrate'
        | 'firstTrack'
        | 'highestEfficiency'
        | 'widestRange';

    function supportsMediaSource(): boolean;

    interface ClassConstructor {
        __dashjs_factory_name: string
    }

    type Factory = (context: object) => {
        create: () => any
    }

    type SingletonFactory = (context: object) => {
        getInstance: () => any
    }

    interface Range {
        start: number;
        end: number;
    }

    interface KeySystemInfo {
        ks: KeySystem;
        sessionId?: string,
        sessionType?: string,
        keyId?: string,
        initData?: ArrayBuffer;
        cdmData?: ArrayBuffer;
        protData?: ProtectionData
    }

    type RequestFilter = (request: LicenseRequest) => Promise<any>;
    type ResponseFilter = (response: LicenseResponse) => Promise<any>;
}

export as namespace dashjs;
export = dashjs;