declare function findOneSummary(symbol: string, periodName?: string): Promise<FCResponse<FCInstrumentSummary>>;
declare function findAllSummary(periodName: string): Promise<FCResponse<FCInstrumentSummaryItem[]>>;
declare const _default: {
    findOneSummary: typeof findOneSummary;
    findAllSummary: typeof findAllSummary;
};
export default _default;
