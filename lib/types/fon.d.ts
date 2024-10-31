declare global {
  type FCPlatformType = "TEFAS" | "BEFAS";
  interface FCFonFilter {
    platform?: FCNullable<FCPlatformType>;
    category?: FCNullable<string>;
    umbrella?: FCNullable<number>;
    exporter?: FCNullable<string>;
    status?: FCNullable<boolean>;
    risk?: FCNullable<number>;
    start_risk?: FCNullable<number>;
    end_risk?: FCNullable<number>;
    kodlar?: FCNullable<string[]>;
  }

  interface FCFonBasic {
    id: number;
    kod: string;
    adi: string;
    shortName: string;
    isin: string;
    fiyat: number;
    fiyatDate: Date;
    kategori: string;
    kurucuKodu: string;
    kurucuUnvan: string;
    kurucuLogo: string;
    islemGorme: boolean;
    halkaArzTarihi: string;
    paraBirimi: string;
    categoryUmbrella: FCCategorySemsiyeListItem;
  }
  interface FCFonGetiri {
    gunGetiri: number;
    son1HaftaGetiri: number;
    son1AyGetiri: number;
    son3AyGetiri: number;
    son6AyGetiri: number;
    son9AyGetiri: number;
    son1YilGetiri: number;
    son3YilGetiri: number;
    son5YilGetiri: number;
    haftaBasi: number;
    ayBasi: number;
    yilBasi: number;
  }
  interface FCFon extends FCFonBasic, FCFonGetiri {
    islemDurumu: string;
    kisiSay: number;
    tedavPaySay: number;
    riskDegeri: number;
    fonTopYoaktifDeg: number;
    pazarPayi: number;
    islemBaslagicSaati: string;
    islemBitisSaati: string;
    iptalSonSaati: string;
    fonAlValoru: string;
    fonSatValoru: string;
    minAlAdet: number;
    minSatAdet: number;
    maxSatAdet: any;
    maxAlAdet: any;
    faizIcerigi: any;
    fonYonetimUcreti: number;
    yatirimStratejisi: string;
    son1YilKategoriDeg: string;
    kapUrl: string;
    platform: string;
    varlikDagilim: FCFonVarlikItem[];
  }
  interface FCFonListItem extends FCFonBasic, FCFonGetiri {
    kisiSay: number;
    tedavPaySay: number;
    riskDegeri: number;
    fonTopYoaktifDeg: number;
    pazarPayi: number;
    tarihselStart: any;
    tarihselEnd: any;
    tarihselGetiri: any;
    tarihselPayDegisim: any;
    tarihselBuyuklukDegisim: any;
    chart: FCFonChartItem[];
    fonYonetimUcreti: number;
  }

  interface FCFonChartItem {
    tarih: string;
    hazirDeg: number;
    fonTopYoaktifDeg: number;
    kisiSay: number;
    tedavPaySay: number;
    topPayHisseSenediSay: number;
    fiyat: number;
    fonYoportDeg: number;
  }

  interface FCFonVarlikItem {
    menkulKod: string;
    menkul: string;
    description: string;
    oran: number;
    balancedValue: number;
  }
}

export {};
