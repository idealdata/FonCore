declare global {
  interface FCPortfolio {
    periods: FCPeriodItem[];
    portfolio: FCPortfolioData[];
    sectors: FCPortfolioSector[];
  }

  interface FCPortfolioSector extends FCSectorItem {
    items: FCPortfolioSectorValues[];
  }
  interface FCPortfolioSectorValues {
    periodName: string;
    toplamDeger: number;
    grupYuzde: number;
  }
  interface FCPortfolioData {
    logo: string;
    symbol: string;
    instrument: FCInstrumentItem;
    degisim_GrupYuzde: number;
    degisim_Adet: number;
    degisim_ToplamDeger: number;
    grupStatus: string;
    items: FCPortfolioDataItem[];
  }

  interface FCPortfolioDataItem {
    periodName: string;
    movements: FCPortfolioItemValues[];
    adet: number;
    gunlukBrDeger: number;
    toplamDeger: number;
    grupYuzde: number;
    fdpToplam: number;
    ftpToplam: number;
  }

  interface FCPortfolioItemValues {
    adet: number;
    gunlukBrDeger: number;
    toplamDeger: number;
    grupYuzde: number;
    fdpToplam: number;
    ftpToplam: number;
  }
}

export {};
