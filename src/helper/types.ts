export interface CountryObject {
  code: number;
  name: string;
  native: string;
  capital: string;
  emoji: string;
  currency: string;
  phone: string;
  languages: [{ code: string; name: string }];
  continent: { code: string; name: string };
}
