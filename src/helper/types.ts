export type CountryObject = {
  code: number;
  name: string;
  native: string;
  capital: string;
  emoji: string;
  currency: string;
  phone: string;
  languages: [{ code: string; name: string }];
  continent: { code: string; name: string };
};
export type TitleTextProps = {
  title: string;
  text?: string;
};

export type SearchInputProps = {
  setFilterName: (value: string) => void;
};
