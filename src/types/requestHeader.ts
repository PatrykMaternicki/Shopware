type MethodOfRequest = "POST" | "GET" | "PATCH" | "DELETE" | "PUT";
export type typeOfSort = "price-asc" | "price-desc";

export interface RequestHeader {
  method?: MethodOfRequest;
  body?: Record<string, any>;
}
