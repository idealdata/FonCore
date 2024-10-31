declare global {
  interface FCInstrumentItem {
    symbol: string;
    name: string;
    exchange: string;
    logo: string;
    sector: FCSectorItem;
  }

  interface FCInstrumentSummary {
    symbol: string;
    logo: string;
    instrument: FCInstrumentItem;
    period: FCPeriodItem;
    countFon: number;
    sumAdet: number;
    sumToplamDeger: number;
    sumGrupYuzde: number;
    fonCodes: string;
    fonList: FCInstrumentSummaryFonItem[];
    lastPeriodSummaries: FCInstrumentLastPeriodSummary[];
  }
  interface FCInstrumentLastPeriodSummary {
    period: FCPeriodItem;
    countFon: number;
    sumAdet: number;
    sumToplamDeger: number;
    sumGrupYuzde: number;
    fonCodes: string;
  }

  interface FCInstrumentSummaryFonItem {
    id: number;
    kod: string;
    adi: string;
    adet?: number;
    toplamDeger?: number;
    grupYuzde?: number;
  }
  interface FCInstrumentSummaryItem {
    symbol: string;
    logo: string;
    instrument: FCInstrumentItem;
    countFon: number;
    sumAdet: number;
    sumToplamDeger: number;
    sumGrupYuzde: number;
  }
}

export {};
