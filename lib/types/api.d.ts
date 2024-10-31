import { AxiosError } from "axios";

declare global {
  interface FCResponseContainer {
    success: boolean;
    message: FCNullable<string>;
  }

  interface FCResponse<T> extends FCResponseContainer {
    data: T;
  }

  interface FCResponsePagination<T> extends FCResponseContainer {
    data: T;
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  }

  interface FCError extends AxiosError {}
}

export {};
