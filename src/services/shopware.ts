import type { RequestHeader } from "@/types/requestHeader";

export default class shopwareService {
  private token: string;
  private url: string;

  constructor() {
    this.token = import.meta.env.VITE_SW_TOKEN;
    this.url = import.meta.env.VITE_ROOT_API;
  }

  private createHeader(headers: RequestHeader) {
    return {
      method: headers.method || "POST",
      headers: {
        "sw-access-key": this.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(headers.body),
    };
  }

  public async getProducts(
    parameter: string,
    body: Record<string, any>,
    category: string
  ) {
    const url = `${this.url}product-listing/${category}?order=${parameter}`;
    const products: Response = await fetch(
      url,
      this.createHeader({ body: body })
    );
    const { elements } = await products.json();
    return elements;
  }

  public async searchBy(
    parameter: string,
    body: Record<string, any>,
    value: string
  ) {
    const url = `${this.url}search?search=${value}?order=${parameter}`;
    const products: Response = await fetch(
      url,
      this.createHeader({ body: body })
    );
    const { elements } = await products.json();
    return elements;
  }
}
