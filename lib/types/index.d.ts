declare global {
  type FCUndefined<T> = T | undefined;
  type FCNullable<T> = T | null;

  interface FCPagination {
    page: number;
    perPage: number;
  }

  interface FCSorter {
    column: string;
    direction?: "ascending" | "descending";
    dir: "ASC" | "DESC";
  }

  interface FCDateRange {
    startDate: FCNullable<string>;
    endDate: FCNullable<string>;
  }
}

export {};
