export const Continents = [
  'All Region',
  'Asia',
  'Africa',
  'Antarctica',
  'Europe',
  'North America',
  'South America'
];

export const FALLBACK_COUNTRIES = [
  {
    __typename: 'Country',
    name: 'Andorra',
    code: 'AD',
    native: 'Andorra',
    capital: 'Andorra la Vella',
    emoji: '🇦🇩',
    currency: 'EUR',
    phone: '376',
    languages: [
      {
        __typename: 'Language',
        code: 'ca',
        name: 'Catalan'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'United Arab Emirates',
    code: 'AE',
    native: 'دولة الإمارات العربية المتحدة',
    capital: 'Abu Dhabi',
    emoji: '🇦🇪',
    currency: 'AED',
    phone: '971',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Afghanistan',
    code: 'AF',
    native: 'افغانستان',
    capital: 'Kabul',
    emoji: '🇦🇫',
    currency: 'AFN',
    phone: '93',
    languages: [
      {
        __typename: 'Language',
        code: 'ps',
        name: 'Pashto'
      },
      {
        __typename: 'Language',
        code: 'uz',
        name: 'Uzbek'
      },
      {
        __typename: 'Language',
        code: 'tk',
        name: 'Turkmen'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Antigua and Barbuda',
    code: 'AG',
    native: 'Antigua and Barbuda',
    capital: "Saint John's",
    emoji: '🇦🇬',
    currency: 'XCD',
    phone: '1268',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Anguilla',
    code: 'AI',
    native: 'Anguilla',
    capital: 'The Valley',
    emoji: '🇦🇮',
    currency: 'XCD',
    phone: '1264',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Albania',
    code: 'AL',
    native: 'Shqipëria',
    capital: 'Tirana',
    emoji: '🇦🇱',
    currency: 'ALL',
    phone: '355',
    languages: [
      {
        __typename: 'Language',
        code: 'sq',
        name: 'Albanian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Armenia',
    code: 'AM',
    native: 'Հայաստան',
    capital: 'Yerevan',
    emoji: '🇦🇲',
    currency: 'AMD',
    phone: '374',
    languages: [
      {
        __typename: 'Language',
        code: 'hy',
        name: 'Armenian'
      },
      {
        __typename: 'Language',
        code: 'ru',
        name: 'Russian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Angola',
    code: 'AO',
    native: 'Angola',
    capital: 'Luanda',
    emoji: '🇦🇴',
    currency: 'AOA',
    phone: '244',
    languages: [
      {
        __typename: 'Language',
        code: 'pt',
        name: 'Portuguese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Antarctica',
    code: 'AQ',
    native: 'Antarctica',
    capital: null,
    emoji: '🇦🇶',
    currency: null,
    phone: '672',
    languages: [],
    continent: {
      __typename: 'Continent',
      name: 'Antarctica',
      code: 'AN'
    }
  },
  {
    __typename: 'Country',
    name: 'Argentina',
    code: 'AR',
    native: 'Argentina',
    capital: 'Buenos Aires',
    emoji: '🇦🇷',
    currency: 'ARS',
    phone: '54',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      },
      {
        __typename: 'Language',
        code: 'gn',
        name: 'Guarani'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'American Samoa',
    code: 'AS',
    native: 'American Samoa',
    capital: 'Pago Pago',
    emoji: '🇦🇸',
    currency: 'USD',
    phone: '1684',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'sm',
        name: 'Samoan'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Austria',
    code: 'AT',
    native: 'Österreich',
    capital: 'Vienna',
    emoji: '🇦🇹',
    currency: 'EUR',
    phone: '43',
    languages: [
      {
        __typename: 'Language',
        code: 'de',
        name: 'German'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Australia',
    code: 'AU',
    native: 'Australia',
    capital: 'Canberra',
    emoji: '🇦🇺',
    currency: 'AUD',
    phone: '61',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Aruba',
    code: 'AW',
    native: 'Aruba',
    capital: 'Oranjestad',
    emoji: '🇦🇼',
    currency: 'AWG',
    phone: '297',
    languages: [
      {
        __typename: 'Language',
        code: 'nl',
        name: 'Dutch'
      },
      {
        __typename: 'Language',
        code: 'pa',
        name: 'Panjabi / Punjabi'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Åland',
    code: 'AX',
    native: 'Åland',
    capital: 'Mariehamn',
    emoji: '🇦🇽',
    currency: 'EUR',
    phone: '358',
    languages: [
      {
        __typename: 'Language',
        code: 'sv',
        name: 'Swedish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Azerbaijan',
    code: 'AZ',
    native: 'Azərbaycan',
    capital: 'Baku',
    emoji: '🇦🇿',
    currency: 'AZN',
    phone: '994',
    languages: [
      {
        __typename: 'Language',
        code: 'az',
        name: 'Azerbaijani'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Bosnia and Herzegovina',
    code: 'BA',
    native: 'Bosna i Hercegovina',
    capital: 'Sarajevo',
    emoji: '🇧🇦',
    currency: 'BAM',
    phone: '387',
    languages: [
      {
        __typename: 'Language',
        code: 'bs',
        name: 'Bosnian'
      },
      {
        __typename: 'Language',
        code: 'hr',
        name: 'Croatian'
      },
      {
        __typename: 'Language',
        code: 'sr',
        name: 'Serbian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Barbados',
    code: 'BB',
    native: 'Barbados',
    capital: 'Bridgetown',
    emoji: '🇧🇧',
    currency: 'BBD',
    phone: '1246',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Bangladesh',
    code: 'BD',
    native: 'Bangladesh',
    capital: 'Dhaka',
    emoji: '🇧🇩',
    currency: 'BDT',
    phone: '880',
    languages: [
      {
        __typename: 'Language',
        code: 'bn',
        name: 'Bengali'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Belgium',
    code: 'BE',
    native: 'België',
    capital: 'Brussels',
    emoji: '🇧🇪',
    currency: 'EUR',
    phone: '32',
    languages: [
      {
        __typename: 'Language',
        code: 'nl',
        name: 'Dutch'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'de',
        name: 'German'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Burkina Faso',
    code: 'BF',
    native: 'Burkina Faso',
    capital: 'Ouagadougou',
    emoji: '🇧🇫',
    currency: 'XOF',
    phone: '226',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'ff',
        name: 'Peul'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Bulgaria',
    code: 'BG',
    native: 'България',
    capital: 'Sofia',
    emoji: '🇧🇬',
    currency: 'BGN',
    phone: '359',
    languages: [
      {
        __typename: 'Language',
        code: 'bg',
        name: 'Bulgarian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Bahrain',
    code: 'BH',
    native: '‏البحرين',
    capital: 'Manama',
    emoji: '🇧🇭',
    currency: 'BHD',
    phone: '973',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Burundi',
    code: 'BI',
    native: 'Burundi',
    capital: 'Bujumbura',
    emoji: '🇧🇮',
    currency: 'BIF',
    phone: '257',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'rn',
        name: 'Kirundi'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Benin',
    code: 'BJ',
    native: 'Bénin',
    capital: 'Porto-Novo',
    emoji: '🇧🇯',
    currency: 'XOF',
    phone: '229',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Saint Barthélemy',
    code: 'BL',
    native: 'Saint-Barthélemy',
    capital: 'Gustavia',
    emoji: '🇧🇱',
    currency: 'EUR',
    phone: '590',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Bermuda',
    code: 'BM',
    native: 'Bermuda',
    capital: 'Hamilton',
    emoji: '🇧🇲',
    currency: 'BMD',
    phone: '1441',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Brunei',
    code: 'BN',
    native: 'Negara Brunei Darussalam',
    capital: 'Bandar Seri Begawan',
    emoji: '🇧🇳',
    currency: 'BND',
    phone: '673',
    languages: [
      {
        __typename: 'Language',
        code: 'ms',
        name: 'Malay'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Bolivia',
    code: 'BO',
    native: 'Bolivia',
    capital: 'Sucre',
    emoji: '🇧🇴',
    currency: 'BOB,BOV',
    phone: '591',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      },
      {
        __typename: 'Language',
        code: 'ay',
        name: 'Aymara'
      },
      {
        __typename: 'Language',
        code: 'qu',
        name: 'Quechua'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'Bonaire',
    code: 'BQ',
    native: 'Bonaire',
    capital: 'Kralendijk',
    emoji: '🇧🇶',
    currency: 'USD',
    phone: '5997',
    languages: [
      {
        __typename: 'Language',
        code: 'nl',
        name: 'Dutch'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Brazil',
    code: 'BR',
    native: 'Brasil',
    capital: 'Brasília',
    emoji: '🇧🇷',
    currency: 'BRL',
    phone: '55',
    languages: [
      {
        __typename: 'Language',
        code: 'pt',
        name: 'Portuguese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'Bahamas',
    code: 'BS',
    native: 'Bahamas',
    capital: 'Nassau',
    emoji: '🇧🇸',
    currency: 'BSD',
    phone: '1242',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Bhutan',
    code: 'BT',
    native: 'ʼbrug-yul',
    capital: 'Thimphu',
    emoji: '🇧🇹',
    currency: 'BTN,INR',
    phone: '975',
    languages: [
      {
        __typename: 'Language',
        code: 'dz',
        name: 'Dzongkha'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Bouvet Island',
    code: 'BV',
    native: 'Bouvetøya',
    capital: null,
    emoji: '🇧🇻',
    currency: 'NOK',
    phone: '47',
    languages: [
      {
        __typename: 'Language',
        code: 'no',
        name: 'Norwegian'
      },
      {
        __typename: 'Language',
        code: 'nb',
        name: 'Norwegian Bokmål'
      },
      {
        __typename: 'Language',
        code: 'nn',
        name: 'Norwegian Nynorsk'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Antarctica',
      code: 'AN'
    }
  },
  {
    __typename: 'Country',
    name: 'Botswana',
    code: 'BW',
    native: 'Botswana',
    capital: 'Gaborone',
    emoji: '🇧🇼',
    currency: 'BWP',
    phone: '267',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'tn',
        name: 'Tswana'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Belarus',
    code: 'BY',
    native: 'Белару́сь',
    capital: 'Minsk',
    emoji: '🇧🇾',
    currency: 'BYN',
    phone: '375',
    languages: [
      {
        __typename: 'Language',
        code: 'be',
        name: 'Belarusian'
      },
      {
        __typename: 'Language',
        code: 'ru',
        name: 'Russian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Belize',
    code: 'BZ',
    native: 'Belize',
    capital: 'Belmopan',
    emoji: '🇧🇿',
    currency: 'BZD',
    phone: '501',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Canada',
    code: 'CA',
    native: 'Canada',
    capital: 'Ottawa',
    emoji: '🇨🇦',
    currency: 'CAD',
    phone: '1',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Cocos [Keeling] Islands',
    code: 'CC',
    native: 'Cocos (Keeling) Islands',
    capital: 'West Island',
    emoji: '🇨🇨',
    currency: 'AUD',
    phone: '61',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Democratic Republic of the Congo',
    code: 'CD',
    native: 'République démocratique du Congo',
    capital: 'Kinshasa',
    emoji: '🇨🇩',
    currency: 'CDF',
    phone: '243',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'ln',
        name: 'Lingala'
      },
      {
        __typename: 'Language',
        code: 'kg',
        name: 'Kongo'
      },
      {
        __typename: 'Language',
        code: 'sw',
        name: 'Swahili'
      },
      {
        __typename: 'Language',
        code: 'lu',
        name: 'Luba-Katanga'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Central African Republic',
    code: 'CF',
    native: 'Ködörösêse tî Bêafrîka',
    capital: 'Bangui',
    emoji: '🇨🇫',
    currency: 'XAF',
    phone: '236',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'sg',
        name: 'Sango'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Republic of the Congo',
    code: 'CG',
    native: 'République du Congo',
    capital: 'Brazzaville',
    emoji: '🇨🇬',
    currency: 'XAF',
    phone: '242',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'ln',
        name: 'Lingala'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Switzerland',
    code: 'CH',
    native: 'Schweiz',
    capital: 'Bern',
    emoji: '🇨🇭',
    currency: 'CHE,CHF,CHW',
    phone: '41',
    languages: [
      {
        __typename: 'Language',
        code: 'de',
        name: 'German'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'it',
        name: 'Italian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Ivory Coast',
    code: 'CI',
    native: "Côte d'Ivoire",
    capital: 'Yamoussoukro',
    emoji: '🇨🇮',
    currency: 'XOF',
    phone: '225',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Cook Islands',
    code: 'CK',
    native: 'Cook Islands',
    capital: 'Avarua',
    emoji: '🇨🇰',
    currency: 'NZD',
    phone: '682',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Chile',
    code: 'CL',
    native: 'Chile',
    capital: 'Santiago',
    emoji: '🇨🇱',
    currency: 'CLF,CLP',
    phone: '56',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'Cameroon',
    code: 'CM',
    native: 'Cameroon',
    capital: 'Yaoundé',
    emoji: '🇨🇲',
    currency: 'XAF',
    phone: '237',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'China',
    code: 'CN',
    native: '中国',
    capital: 'Beijing',
    emoji: '🇨🇳',
    currency: 'CNY',
    phone: '86',
    languages: [
      {
        __typename: 'Language',
        code: 'zh',
        name: 'Chinese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Colombia',
    code: 'CO',
    native: 'Colombia',
    capital: 'Bogotá',
    emoji: '🇨🇴',
    currency: 'COP',
    phone: '57',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'Costa Rica',
    code: 'CR',
    native: 'Costa Rica',
    capital: 'San José',
    emoji: '🇨🇷',
    currency: 'CRC',
    phone: '506',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Cuba',
    code: 'CU',
    native: 'Cuba',
    capital: 'Havana',
    emoji: '🇨🇺',
    currency: 'CUC,CUP',
    phone: '53',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Cape Verde',
    code: 'CV',
    native: 'Cabo Verde',
    capital: 'Praia',
    emoji: '🇨🇻',
    currency: 'CVE',
    phone: '238',
    languages: [
      {
        __typename: 'Language',
        code: 'pt',
        name: 'Portuguese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Curacao',
    code: 'CW',
    native: 'Curaçao',
    capital: 'Willemstad',
    emoji: '🇨🇼',
    currency: 'ANG',
    phone: '5999',
    languages: [
      {
        __typename: 'Language',
        code: 'nl',
        name: 'Dutch'
      },
      {
        __typename: 'Language',
        code: 'pa',
        name: 'Panjabi / Punjabi'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Christmas Island',
    code: 'CX',
    native: 'Christmas Island',
    capital: 'Flying Fish Cove',
    emoji: '🇨🇽',
    currency: 'AUD',
    phone: '61',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Cyprus',
    code: 'CY',
    native: 'Κύπρος',
    capital: 'Nicosia',
    emoji: '🇨🇾',
    currency: 'EUR',
    phone: '357',
    languages: [
      {
        __typename: 'Language',
        code: 'el',
        name: 'Greek'
      },
      {
        __typename: 'Language',
        code: 'tr',
        name: 'Turkish'
      },
      {
        __typename: 'Language',
        code: 'hy',
        name: 'Armenian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Czech Republic',
    code: 'CZ',
    native: 'Česká republika',
    capital: 'Prague',
    emoji: '🇨🇿',
    currency: 'CZK',
    phone: '420',
    languages: [
      {
        __typename: 'Language',
        code: 'cs',
        name: 'Czech'
      },
      {
        __typename: 'Language',
        code: 'sk',
        name: 'Slovak'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Germany',
    code: 'DE',
    native: 'Deutschland',
    capital: 'Berlin',
    emoji: '🇩🇪',
    currency: 'EUR',
    phone: '49',
    languages: [
      {
        __typename: 'Language',
        code: 'de',
        name: 'German'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Djibouti',
    code: 'DJ',
    native: 'Djibouti',
    capital: 'Djibouti',
    emoji: '🇩🇯',
    currency: 'DJF',
    phone: '253',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Denmark',
    code: 'DK',
    native: 'Danmark',
    capital: 'Copenhagen',
    emoji: '🇩🇰',
    currency: 'DKK',
    phone: '45',
    languages: [
      {
        __typename: 'Language',
        code: 'da',
        name: 'Danish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Dominica',
    code: 'DM',
    native: 'Dominica',
    capital: 'Roseau',
    emoji: '🇩🇲',
    currency: 'XCD',
    phone: '1767',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Dominican Republic',
    code: 'DO',
    native: 'República Dominicana',
    capital: 'Santo Domingo',
    emoji: '🇩🇴',
    currency: 'DOP',
    phone: '1809,1829,1849',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Algeria',
    code: 'DZ',
    native: 'الجزائر',
    capital: 'Algiers',
    emoji: '🇩🇿',
    currency: 'DZD',
    phone: '213',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Ecuador',
    code: 'EC',
    native: 'Ecuador',
    capital: 'Quito',
    emoji: '🇪🇨',
    currency: 'USD',
    phone: '593',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'Estonia',
    code: 'EE',
    native: 'Eesti',
    capital: 'Tallinn',
    emoji: '🇪🇪',
    currency: 'EUR',
    phone: '372',
    languages: [
      {
        __typename: 'Language',
        code: 'et',
        name: 'Estonian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Egypt',
    code: 'EG',
    native: 'مصر‎',
    capital: 'Cairo',
    emoji: '🇪🇬',
    currency: 'EGP',
    phone: '20',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Western Sahara',
    code: 'EH',
    native: 'الصحراء الغربية',
    capital: 'El Aaiún',
    emoji: '🇪🇭',
    currency: 'MAD,DZD,MRU',
    phone: '212',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Eritrea',
    code: 'ER',
    native: 'ኤርትራ',
    capital: 'Asmara',
    emoji: '🇪🇷',
    currency: 'ERN',
    phone: '291',
    languages: [
      {
        __typename: 'Language',
        code: 'ti',
        name: 'Tigrinya'
      },
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Spain',
    code: 'ES',
    native: 'España',
    capital: 'Madrid',
    emoji: '🇪🇸',
    currency: 'EUR',
    phone: '34',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      },
      {
        __typename: 'Language',
        code: 'eu',
        name: 'Basque'
      },
      {
        __typename: 'Language',
        code: 'ca',
        name: 'Catalan'
      },
      {
        __typename: 'Language',
        code: 'gl',
        name: 'Galician'
      },
      {
        __typename: 'Language',
        code: 'oc',
        name: 'Occitan'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Ethiopia',
    code: 'ET',
    native: 'ኢትዮጵያ',
    capital: 'Addis Ababa',
    emoji: '🇪🇹',
    currency: 'ETB',
    phone: '251',
    languages: [
      {
        __typename: 'Language',
        code: 'am',
        name: 'Amharic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Finland',
    code: 'FI',
    native: 'Suomi',
    capital: 'Helsinki',
    emoji: '🇫🇮',
    currency: 'EUR',
    phone: '358',
    languages: [
      {
        __typename: 'Language',
        code: 'fi',
        name: 'Finnish'
      },
      {
        __typename: 'Language',
        code: 'sv',
        name: 'Swedish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Fiji',
    code: 'FJ',
    native: 'Fiji',
    capital: 'Suva',
    emoji: '🇫🇯',
    currency: 'FJD',
    phone: '679',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'fj',
        name: 'Fijian'
      },
      {
        __typename: 'Language',
        code: 'hi',
        name: 'Hindi'
      },
      {
        __typename: 'Language',
        code: 'ur',
        name: 'Urdu'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Falkland Islands',
    code: 'FK',
    native: 'Falkland Islands',
    capital: 'Stanley',
    emoji: '🇫🇰',
    currency: 'FKP',
    phone: '500',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'Micronesia',
    code: 'FM',
    native: 'Micronesia',
    capital: 'Palikir',
    emoji: '🇫🇲',
    currency: 'USD',
    phone: '691',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Faroe Islands',
    code: 'FO',
    native: 'Føroyar',
    capital: 'Tórshavn',
    emoji: '🇫🇴',
    currency: 'DKK',
    phone: '298',
    languages: [
      {
        __typename: 'Language',
        code: 'fo',
        name: 'Faroese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'France',
    code: 'FR',
    native: 'France',
    capital: 'Paris',
    emoji: '🇫🇷',
    currency: 'EUR',
    phone: '33',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Gabon',
    code: 'GA',
    native: 'Gabon',
    capital: 'Libreville',
    emoji: '🇬🇦',
    currency: 'XAF',
    phone: '241',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'United Kingdom',
    code: 'GB',
    native: 'United Kingdom',
    capital: 'London',
    emoji: '🇬🇧',
    currency: 'GBP',
    phone: '44',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Grenada',
    code: 'GD',
    native: 'Grenada',
    capital: "St. George's",
    emoji: '🇬🇩',
    currency: 'XCD',
    phone: '1473',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Georgia',
    code: 'GE',
    native: 'საქართველო',
    capital: 'Tbilisi',
    emoji: '🇬🇪',
    currency: 'GEL',
    phone: '995',
    languages: [
      {
        __typename: 'Language',
        code: 'ka',
        name: 'Georgian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'French Guiana',
    code: 'GF',
    native: 'Guyane française',
    capital: 'Cayenne',
    emoji: '🇬🇫',
    currency: 'EUR',
    phone: '594',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'Guernsey',
    code: 'GG',
    native: 'Guernsey',
    capital: 'St. Peter Port',
    emoji: '🇬🇬',
    currency: 'GBP',
    phone: '44',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Ghana',
    code: 'GH',
    native: 'Ghana',
    capital: 'Accra',
    emoji: '🇬🇭',
    currency: 'GHS',
    phone: '233',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Gibraltar',
    code: 'GI',
    native: 'Gibraltar',
    capital: 'Gibraltar',
    emoji: '🇬🇮',
    currency: 'GIP',
    phone: '350',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Greenland',
    code: 'GL',
    native: 'Kalaallit Nunaat',
    capital: 'Nuuk',
    emoji: '🇬🇱',
    currency: 'DKK',
    phone: '299',
    languages: [
      {
        __typename: 'Language',
        code: 'kl',
        name: 'Greenlandic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Gambia',
    code: 'GM',
    native: 'Gambia',
    capital: 'Banjul',
    emoji: '🇬🇲',
    currency: 'GMD',
    phone: '220',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Guinea',
    code: 'GN',
    native: 'Guinée',
    capital: 'Conakry',
    emoji: '🇬🇳',
    currency: 'GNF',
    phone: '224',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'ff',
        name: 'Peul'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Guadeloupe',
    code: 'GP',
    native: 'Guadeloupe',
    capital: 'Basse-Terre',
    emoji: '🇬🇵',
    currency: 'EUR',
    phone: '590',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Equatorial Guinea',
    code: 'GQ',
    native: 'Guinea Ecuatorial',
    capital: 'Malabo',
    emoji: '🇬🇶',
    currency: 'XAF',
    phone: '240',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Greece',
    code: 'GR',
    native: 'Ελλάδα',
    capital: 'Athens',
    emoji: '🇬🇷',
    currency: 'EUR',
    phone: '30',
    languages: [
      {
        __typename: 'Language',
        code: 'el',
        name: 'Greek'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'South Georgia and the South Sandwich Islands',
    code: 'GS',
    native: 'South Georgia',
    capital: 'King Edward Point',
    emoji: '🇬🇸',
    currency: 'GBP',
    phone: '500',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Antarctica',
      code: 'AN'
    }
  },
  {
    __typename: 'Country',
    name: 'Guatemala',
    code: 'GT',
    native: 'Guatemala',
    capital: 'Guatemala City',
    emoji: '🇬🇹',
    currency: 'GTQ',
    phone: '502',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Guam',
    code: 'GU',
    native: 'Guam',
    capital: 'Hagåtña',
    emoji: '🇬🇺',
    currency: 'USD',
    phone: '1671',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'ch',
        name: 'Chamorro'
      },
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Guinea-Bissau',
    code: 'GW',
    native: 'Guiné-Bissau',
    capital: 'Bissau',
    emoji: '🇬🇼',
    currency: 'XOF',
    phone: '245',
    languages: [
      {
        __typename: 'Language',
        code: 'pt',
        name: 'Portuguese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Guyana',
    code: 'GY',
    native: 'Guyana',
    capital: 'Georgetown',
    emoji: '🇬🇾',
    currency: 'GYD',
    phone: '592',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'Hong Kong',
    code: 'HK',
    native: '香港',
    capital: 'City of Victoria',
    emoji: '🇭🇰',
    currency: 'HKD',
    phone: '852',
    languages: [
      {
        __typename: 'Language',
        code: 'zh',
        name: 'Chinese'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Heard Island and McDonald Islands',
    code: 'HM',
    native: 'Heard Island and McDonald Islands',
    capital: null,
    emoji: '🇭🇲',
    currency: 'AUD',
    phone: '61',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Antarctica',
      code: 'AN'
    }
  },
  {
    __typename: 'Country',
    name: 'Honduras',
    code: 'HN',
    native: 'Honduras',
    capital: 'Tegucigalpa',
    emoji: '🇭🇳',
    currency: 'HNL',
    phone: '504',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Croatia',
    code: 'HR',
    native: 'Hrvatska',
    capital: 'Zagreb',
    emoji: '🇭🇷',
    currency: 'HRK',
    phone: '385',
    languages: [
      {
        __typename: 'Language',
        code: 'hr',
        name: 'Croatian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Haiti',
    code: 'HT',
    native: 'Haïti',
    capital: 'Port-au-Prince',
    emoji: '🇭🇹',
    currency: 'HTG,USD',
    phone: '509',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'ht',
        name: 'Haitian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Hungary',
    code: 'HU',
    native: 'Magyarország',
    capital: 'Budapest',
    emoji: '🇭🇺',
    currency: 'HUF',
    phone: '36',
    languages: [
      {
        __typename: 'Language',
        code: 'hu',
        name: 'Hungarian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Indonesia',
    code: 'ID',
    native: 'Indonesia',
    capital: 'Jakarta',
    emoji: '🇮🇩',
    currency: 'IDR',
    phone: '62',
    languages: [
      {
        __typename: 'Language',
        code: 'id',
        name: 'Indonesian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Ireland',
    code: 'IE',
    native: 'Éire',
    capital: 'Dublin',
    emoji: '🇮🇪',
    currency: 'EUR',
    phone: '353',
    languages: [
      {
        __typename: 'Language',
        code: 'ga',
        name: 'Irish'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Israel',
    code: 'IL',
    native: 'יִשְׂרָאֵל',
    capital: 'Jerusalem',
    emoji: '🇮🇱',
    currency: 'ILS',
    phone: '972',
    languages: [
      {
        __typename: 'Language',
        code: 'he',
        name: 'Hebrew'
      },
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Isle of Man',
    code: 'IM',
    native: 'Isle of Man',
    capital: 'Douglas',
    emoji: '🇮🇲',
    currency: 'GBP',
    phone: '44',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'gv',
        name: 'Manx'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'India',
    code: 'IN',
    native: 'भारत',
    capital: 'New Delhi',
    emoji: '🇮🇳',
    currency: 'INR',
    phone: '91',
    languages: [
      {
        __typename: 'Language',
        code: 'hi',
        name: 'Hindi'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'British Indian Ocean Territory',
    code: 'IO',
    native: 'British Indian Ocean Territory',
    capital: 'Diego Garcia',
    emoji: '🇮🇴',
    currency: 'USD',
    phone: '246',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Iraq',
    code: 'IQ',
    native: 'العراق',
    capital: 'Baghdad',
    emoji: '🇮🇶',
    currency: 'IQD',
    phone: '964',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      },
      {
        __typename: 'Language',
        code: 'ku',
        name: 'Kurdish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Iran',
    code: 'IR',
    native: 'ایران',
    capital: 'Tehran',
    emoji: '🇮🇷',
    currency: 'IRR',
    phone: '98',
    languages: [
      {
        __typename: 'Language',
        code: 'fa',
        name: 'Persian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Iceland',
    code: 'IS',
    native: 'Ísland',
    capital: 'Reykjavik',
    emoji: '🇮🇸',
    currency: 'ISK',
    phone: '354',
    languages: [
      {
        __typename: 'Language',
        code: 'is',
        name: 'Icelandic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Italy',
    code: 'IT',
    native: 'Italia',
    capital: 'Rome',
    emoji: '🇮🇹',
    currency: 'EUR',
    phone: '39',
    languages: [
      {
        __typename: 'Language',
        code: 'it',
        name: 'Italian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Jersey',
    code: 'JE',
    native: 'Jersey',
    capital: 'Saint Helier',
    emoji: '🇯🇪',
    currency: 'GBP',
    phone: '44',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Jamaica',
    code: 'JM',
    native: 'Jamaica',
    capital: 'Kingston',
    emoji: '🇯🇲',
    currency: 'JMD',
    phone: '1876',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Jordan',
    code: 'JO',
    native: 'الأردن',
    capital: 'Amman',
    emoji: '🇯🇴',
    currency: 'JOD',
    phone: '962',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Japan',
    code: 'JP',
    native: '日本',
    capital: 'Tokyo',
    emoji: '🇯🇵',
    currency: 'JPY',
    phone: '81',
    languages: [
      {
        __typename: 'Language',
        code: 'ja',
        name: 'Japanese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Kenya',
    code: 'KE',
    native: 'Kenya',
    capital: 'Nairobi',
    emoji: '🇰🇪',
    currency: 'KES',
    phone: '254',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'sw',
        name: 'Swahili'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Kyrgyzstan',
    code: 'KG',
    native: 'Кыргызстан',
    capital: 'Bishkek',
    emoji: '🇰🇬',
    currency: 'KGS',
    phone: '996',
    languages: [
      {
        __typename: 'Language',
        code: 'ky',
        name: 'Kyrgyz'
      },
      {
        __typename: 'Language',
        code: 'ru',
        name: 'Russian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Cambodia',
    code: 'KH',
    native: 'Kâmpŭchéa',
    capital: 'Phnom Penh',
    emoji: '🇰🇭',
    currency: 'KHR',
    phone: '855',
    languages: [
      {
        __typename: 'Language',
        code: 'km',
        name: 'Cambodian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Kiribati',
    code: 'KI',
    native: 'Kiribati',
    capital: 'South Tarawa',
    emoji: '🇰🇮',
    currency: 'AUD',
    phone: '686',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Comoros',
    code: 'KM',
    native: 'Komori',
    capital: 'Moroni',
    emoji: '🇰🇲',
    currency: 'KMF',
    phone: '269',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Saint Kitts and Nevis',
    code: 'KN',
    native: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    emoji: '🇰🇳',
    currency: 'XCD',
    phone: '1869',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'North Korea',
    code: 'KP',
    native: '북한',
    capital: 'Pyongyang',
    emoji: '🇰🇵',
    currency: 'KPW',
    phone: '850',
    languages: [
      {
        __typename: 'Language',
        code: 'ko',
        name: 'Korean'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'South Korea',
    code: 'KR',
    native: '대한민국',
    capital: 'Seoul',
    emoji: '🇰🇷',
    currency: 'KRW',
    phone: '82',
    languages: [
      {
        __typename: 'Language',
        code: 'ko',
        name: 'Korean'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Kuwait',
    code: 'KW',
    native: 'الكويت',
    capital: 'Kuwait City',
    emoji: '🇰🇼',
    currency: 'KWD',
    phone: '965',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Cayman Islands',
    code: 'KY',
    native: 'Cayman Islands',
    capital: 'George Town',
    emoji: '🇰🇾',
    currency: 'KYD',
    phone: '1345',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Kazakhstan',
    code: 'KZ',
    native: 'Қазақстан',
    capital: 'Astana',
    emoji: '🇰🇿',
    currency: 'KZT',
    phone: '76,77',
    languages: [
      {
        __typename: 'Language',
        code: 'kk',
        name: 'Kazakh'
      },
      {
        __typename: 'Language',
        code: 'ru',
        name: 'Russian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Laos',
    code: 'LA',
    native: 'ສປປລາວ',
    capital: 'Vientiane',
    emoji: '🇱🇦',
    currency: 'LAK',
    phone: '856',
    languages: [
      {
        __typename: 'Language',
        code: 'lo',
        name: 'Laotian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Lebanon',
    code: 'LB',
    native: 'لبنان',
    capital: 'Beirut',
    emoji: '🇱🇧',
    currency: 'LBP',
    phone: '961',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Saint Lucia',
    code: 'LC',
    native: 'Saint Lucia',
    capital: 'Castries',
    emoji: '🇱🇨',
    currency: 'XCD',
    phone: '1758',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Liechtenstein',
    code: 'LI',
    native: 'Liechtenstein',
    capital: 'Vaduz',
    emoji: '🇱🇮',
    currency: 'CHF',
    phone: '423',
    languages: [
      {
        __typename: 'Language',
        code: 'de',
        name: 'German'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Sri Lanka',
    code: 'LK',
    native: 'śrī laṃkāva',
    capital: 'Colombo',
    emoji: '🇱🇰',
    currency: 'LKR',
    phone: '94',
    languages: [
      {
        __typename: 'Language',
        code: 'si',
        name: 'Sinhalese'
      },
      {
        __typename: 'Language',
        code: 'ta',
        name: 'Tamil'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Liberia',
    code: 'LR',
    native: 'Liberia',
    capital: 'Monrovia',
    emoji: '🇱🇷',
    currency: 'LRD',
    phone: '231',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Lesotho',
    code: 'LS',
    native: 'Lesotho',
    capital: 'Maseru',
    emoji: '🇱🇸',
    currency: 'LSL,ZAR',
    phone: '266',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'st',
        name: 'Southern Sotho'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Lithuania',
    code: 'LT',
    native: 'Lietuva',
    capital: 'Vilnius',
    emoji: '🇱🇹',
    currency: 'EUR',
    phone: '370',
    languages: [
      {
        __typename: 'Language',
        code: 'lt',
        name: 'Lithuanian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Luxembourg',
    code: 'LU',
    native: 'Luxembourg',
    capital: 'Luxembourg',
    emoji: '🇱🇺',
    currency: 'EUR',
    phone: '352',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'de',
        name: 'German'
      },
      {
        __typename: 'Language',
        code: 'lb',
        name: 'Luxembourgish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Latvia',
    code: 'LV',
    native: 'Latvija',
    capital: 'Riga',
    emoji: '🇱🇻',
    currency: 'EUR',
    phone: '371',
    languages: [
      {
        __typename: 'Language',
        code: 'lv',
        name: 'Latvian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Libya',
    code: 'LY',
    native: '‏ليبيا',
    capital: 'Tripoli',
    emoji: '🇱🇾',
    currency: 'LYD',
    phone: '218',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Morocco',
    code: 'MA',
    native: 'المغرب',
    capital: 'Rabat',
    emoji: '🇲🇦',
    currency: 'MAD',
    phone: '212',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Monaco',
    code: 'MC',
    native: 'Monaco',
    capital: 'Monaco',
    emoji: '🇲🇨',
    currency: 'EUR',
    phone: '377',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Moldova',
    code: 'MD',
    native: 'Moldova',
    capital: 'Chișinău',
    emoji: '🇲🇩',
    currency: 'MDL',
    phone: '373',
    languages: [
      {
        __typename: 'Language',
        code: 'ro',
        name: 'Romanian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Montenegro',
    code: 'ME',
    native: 'Црна Гора',
    capital: 'Podgorica',
    emoji: '🇲🇪',
    currency: 'EUR',
    phone: '382',
    languages: [
      {
        __typename: 'Language',
        code: 'sr',
        name: 'Serbian'
      },
      {
        __typename: 'Language',
        code: 'bs',
        name: 'Bosnian'
      },
      {
        __typename: 'Language',
        code: 'sq',
        name: 'Albanian'
      },
      {
        __typename: 'Language',
        code: 'hr',
        name: 'Croatian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Saint Martin',
    code: 'MF',
    native: 'Saint-Martin',
    capital: 'Marigot',
    emoji: '🇲🇫',
    currency: 'EUR',
    phone: '590',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'nl',
        name: 'Dutch'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Madagascar',
    code: 'MG',
    native: 'Madagasikara',
    capital: 'Antananarivo',
    emoji: '🇲🇬',
    currency: 'MGA',
    phone: '261',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'mg',
        name: 'Malagasy'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Marshall Islands',
    code: 'MH',
    native: 'M̧ajeļ',
    capital: 'Majuro',
    emoji: '🇲🇭',
    currency: 'USD',
    phone: '692',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'mh',
        name: 'Marshallese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'North Macedonia',
    code: 'MK',
    native: 'Северна Македонија',
    capital: 'Skopje',
    emoji: '🇲🇰',
    currency: 'MKD',
    phone: '389',
    languages: [
      {
        __typename: 'Language',
        code: 'mk',
        name: 'Macedonian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Mali',
    code: 'ML',
    native: 'Mali',
    capital: 'Bamako',
    emoji: '🇲🇱',
    currency: 'XOF',
    phone: '223',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Myanmar [Burma]',
    code: 'MM',
    native: 'မြန်မာ',
    capital: 'Naypyidaw',
    emoji: '🇲🇲',
    currency: 'MMK',
    phone: '95',
    languages: [
      {
        __typename: 'Language',
        code: 'my',
        name: 'Burmese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Mongolia',
    code: 'MN',
    native: 'Монгол улс',
    capital: 'Ulan Bator',
    emoji: '🇲🇳',
    currency: 'MNT',
    phone: '976',
    languages: [
      {
        __typename: 'Language',
        code: 'mn',
        name: 'Mongolian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Macao',
    code: 'MO',
    native: '澳門',
    capital: null,
    emoji: '🇲🇴',
    currency: 'MOP',
    phone: '853',
    languages: [
      {
        __typename: 'Language',
        code: 'zh',
        name: 'Chinese'
      },
      {
        __typename: 'Language',
        code: 'pt',
        name: 'Portuguese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Northern Mariana Islands',
    code: 'MP',
    native: 'Northern Mariana Islands',
    capital: 'Saipan',
    emoji: '🇲🇵',
    currency: 'USD',
    phone: '1670',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'ch',
        name: 'Chamorro'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Martinique',
    code: 'MQ',
    native: 'Martinique',
    capital: 'Fort-de-France',
    emoji: '🇲🇶',
    currency: 'EUR',
    phone: '596',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Mauritania',
    code: 'MR',
    native: 'موريتانيا',
    capital: 'Nouakchott',
    emoji: '🇲🇷',
    currency: 'MRU',
    phone: '222',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Montserrat',
    code: 'MS',
    native: 'Montserrat',
    capital: 'Plymouth',
    emoji: '🇲🇸',
    currency: 'XCD',
    phone: '1664',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Malta',
    code: 'MT',
    native: 'Malta',
    capital: 'Valletta',
    emoji: '🇲🇹',
    currency: 'EUR',
    phone: '356',
    languages: [
      {
        __typename: 'Language',
        code: 'mt',
        name: 'Maltese'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Mauritius',
    code: 'MU',
    native: 'Maurice',
    capital: 'Port Louis',
    emoji: '🇲🇺',
    currency: 'MUR',
    phone: '230',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Maldives',
    code: 'MV',
    native: 'Maldives',
    capital: 'Malé',
    emoji: '🇲🇻',
    currency: 'MVR',
    phone: '960',
    languages: [
      {
        __typename: 'Language',
        code: 'dv',
        name: 'Divehi'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Malawi',
    code: 'MW',
    native: 'Malawi',
    capital: 'Lilongwe',
    emoji: '🇲🇼',
    currency: 'MWK',
    phone: '265',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'ny',
        name: 'Chichewa'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Mexico',
    code: 'MX',
    native: 'México',
    capital: 'Mexico City',
    emoji: '🇲🇽',
    currency: 'MXN',
    phone: '52',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Malaysia',
    code: 'MY',
    native: 'Malaysia',
    capital: 'Kuala Lumpur',
    emoji: '🇲🇾',
    currency: 'MYR',
    phone: '60',
    languages: [
      {
        __typename: 'Language',
        code: 'ms',
        name: 'Malay'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Mozambique',
    code: 'MZ',
    native: 'Moçambique',
    capital: 'Maputo',
    emoji: '🇲🇿',
    currency: 'MZN',
    phone: '258',
    languages: [
      {
        __typename: 'Language',
        code: 'pt',
        name: 'Portuguese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Namibia',
    code: 'NA',
    native: 'Namibia',
    capital: 'Windhoek',
    emoji: '🇳🇦',
    currency: 'NAD,ZAR',
    phone: '264',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'af',
        name: 'Afrikaans'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'New Caledonia',
    code: 'NC',
    native: 'Nouvelle-Calédonie',
    capital: 'Nouméa',
    emoji: '🇳🇨',
    currency: 'XPF',
    phone: '687',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Niger',
    code: 'NE',
    native: 'Niger',
    capital: 'Niamey',
    emoji: '🇳🇪',
    currency: 'XOF',
    phone: '227',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Norfolk Island',
    code: 'NF',
    native: 'Norfolk Island',
    capital: 'Kingston',
    emoji: '🇳🇫',
    currency: 'AUD',
    phone: '672',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Nigeria',
    code: 'NG',
    native: 'Nigeria',
    capital: 'Abuja',
    emoji: '🇳🇬',
    currency: 'NGN',
    phone: '234',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Nicaragua',
    code: 'NI',
    native: 'Nicaragua',
    capital: 'Managua',
    emoji: '🇳🇮',
    currency: 'NIO',
    phone: '505',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Netherlands',
    code: 'NL',
    native: 'Nederland',
    capital: 'Amsterdam',
    emoji: '🇳🇱',
    currency: 'EUR',
    phone: '31',
    languages: [
      {
        __typename: 'Language',
        code: 'nl',
        name: 'Dutch'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Norway',
    code: 'NO',
    native: 'Norge',
    capital: 'Oslo',
    emoji: '🇳🇴',
    currency: 'NOK',
    phone: '47',
    languages: [
      {
        __typename: 'Language',
        code: 'no',
        name: 'Norwegian'
      },
      {
        __typename: 'Language',
        code: 'nb',
        name: 'Norwegian Bokmål'
      },
      {
        __typename: 'Language',
        code: 'nn',
        name: 'Norwegian Nynorsk'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Nepal',
    code: 'NP',
    native: 'नपल',
    capital: 'Kathmandu',
    emoji: '🇳🇵',
    currency: 'NPR',
    phone: '977',
    languages: [
      {
        __typename: 'Language',
        code: 'ne',
        name: 'Nepali'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Nauru',
    code: 'NR',
    native: 'Nauru',
    capital: 'Yaren',
    emoji: '🇳🇷',
    currency: 'AUD',
    phone: '674',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'na',
        name: 'Nauruan'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Niue',
    code: 'NU',
    native: 'Niuē',
    capital: 'Alofi',
    emoji: '🇳🇺',
    currency: 'NZD',
    phone: '683',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'New Zealand',
    code: 'NZ',
    native: 'New Zealand',
    capital: 'Wellington',
    emoji: '🇳🇿',
    currency: 'NZD',
    phone: '64',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'mi',
        name: 'Maori'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Oman',
    code: 'OM',
    native: 'عمان',
    capital: 'Muscat',
    emoji: '🇴🇲',
    currency: 'OMR',
    phone: '968',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Panama',
    code: 'PA',
    native: 'Panamá',
    capital: 'Panama City',
    emoji: '🇵🇦',
    currency: 'PAB,USD',
    phone: '507',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Peru',
    code: 'PE',
    native: 'Perú',
    capital: 'Lima',
    emoji: '🇵🇪',
    currency: 'PEN',
    phone: '51',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'French Polynesia',
    code: 'PF',
    native: 'Polynésie française',
    capital: 'Papeetē',
    emoji: '🇵🇫',
    currency: 'XPF',
    phone: '689',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Papua New Guinea',
    code: 'PG',
    native: 'Papua Niugini',
    capital: 'Port Moresby',
    emoji: '🇵🇬',
    currency: 'PGK',
    phone: '675',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Philippines',
    code: 'PH',
    native: 'Pilipinas',
    capital: 'Manila',
    emoji: '🇵🇭',
    currency: 'PHP',
    phone: '63',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Pakistan',
    code: 'PK',
    native: 'Pakistan',
    capital: 'Islamabad',
    emoji: '🇵🇰',
    currency: 'PKR',
    phone: '92',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'ur',
        name: 'Urdu'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Poland',
    code: 'PL',
    native: 'Polska',
    capital: 'Warsaw',
    emoji: '🇵🇱',
    currency: 'PLN',
    phone: '48',
    languages: [
      {
        __typename: 'Language',
        code: 'pl',
        name: 'Polish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Saint Pierre and Miquelon',
    code: 'PM',
    native: 'Saint-Pierre-et-Miquelon',
    capital: 'Saint-Pierre',
    emoji: '🇵🇲',
    currency: 'EUR',
    phone: '508',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Pitcairn Islands',
    code: 'PN',
    native: 'Pitcairn Islands',
    capital: 'Adamstown',
    emoji: '🇵🇳',
    currency: 'NZD',
    phone: '64',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Puerto Rico',
    code: 'PR',
    native: 'Puerto Rico',
    capital: 'San Juan',
    emoji: '🇵🇷',
    currency: 'USD',
    phone: '1787,1939',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Palestine',
    code: 'PS',
    native: 'فلسطين',
    capital: 'Ramallah',
    emoji: '🇵🇸',
    currency: 'ILS',
    phone: '970',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Portugal',
    code: 'PT',
    native: 'Portugal',
    capital: 'Lisbon',
    emoji: '🇵🇹',
    currency: 'EUR',
    phone: '351',
    languages: [
      {
        __typename: 'Language',
        code: 'pt',
        name: 'Portuguese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Palau',
    code: 'PW',
    native: 'Palau',
    capital: 'Ngerulmud',
    emoji: '🇵🇼',
    currency: 'USD',
    phone: '680',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Paraguay',
    code: 'PY',
    native: 'Paraguay',
    capital: 'Asunción',
    emoji: '🇵🇾',
    currency: 'PYG',
    phone: '595',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      },
      {
        __typename: 'Language',
        code: 'gn',
        name: 'Guarani'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'Qatar',
    code: 'QA',
    native: 'قطر',
    capital: 'Doha',
    emoji: '🇶🇦',
    currency: 'QAR',
    phone: '974',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Réunion',
    code: 'RE',
    native: 'La Réunion',
    capital: 'Saint-Denis',
    emoji: '🇷🇪',
    currency: 'EUR',
    phone: '262',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Romania',
    code: 'RO',
    native: 'România',
    capital: 'Bucharest',
    emoji: '🇷🇴',
    currency: 'RON',
    phone: '40',
    languages: [
      {
        __typename: 'Language',
        code: 'ro',
        name: 'Romanian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Serbia',
    code: 'RS',
    native: 'Србија',
    capital: 'Belgrade',
    emoji: '🇷🇸',
    currency: 'RSD',
    phone: '381',
    languages: [
      {
        __typename: 'Language',
        code: 'sr',
        name: 'Serbian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Russia',
    code: 'RU',
    native: 'Россия',
    capital: 'Moscow',
    emoji: '🇷🇺',
    currency: 'RUB',
    phone: '7',
    languages: [
      {
        __typename: 'Language',
        code: 'ru',
        name: 'Russian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Rwanda',
    code: 'RW',
    native: 'Rwanda',
    capital: 'Kigali',
    emoji: '🇷🇼',
    currency: 'RWF',
    phone: '250',
    languages: [
      {
        __typename: 'Language',
        code: 'rw',
        name: 'Rwandi'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Saudi Arabia',
    code: 'SA',
    native: 'العربية السعودية',
    capital: 'Riyadh',
    emoji: '🇸🇦',
    currency: 'SAR',
    phone: '966',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Solomon Islands',
    code: 'SB',
    native: 'Solomon Islands',
    capital: 'Honiara',
    emoji: '🇸🇧',
    currency: 'SBD',
    phone: '677',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Seychelles',
    code: 'SC',
    native: 'Seychelles',
    capital: 'Victoria',
    emoji: '🇸🇨',
    currency: 'SCR',
    phone: '248',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Sudan',
    code: 'SD',
    native: 'السودان',
    capital: 'Khartoum',
    emoji: '🇸🇩',
    currency: 'SDG',
    phone: '249',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Sweden',
    code: 'SE',
    native: 'Sverige',
    capital: 'Stockholm',
    emoji: '🇸🇪',
    currency: 'SEK',
    phone: '46',
    languages: [
      {
        __typename: 'Language',
        code: 'sv',
        name: 'Swedish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Singapore',
    code: 'SG',
    native: 'Singapore',
    capital: 'Singapore',
    emoji: '🇸🇬',
    currency: 'SGD',
    phone: '65',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'ms',
        name: 'Malay'
      },
      {
        __typename: 'Language',
        code: 'ta',
        name: 'Tamil'
      },
      {
        __typename: 'Language',
        code: 'zh',
        name: 'Chinese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Saint Helena',
    code: 'SH',
    native: 'Saint Helena',
    capital: 'Jamestown',
    emoji: '🇸🇭',
    currency: 'SHP',
    phone: '290',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Slovenia',
    code: 'SI',
    native: 'Slovenija',
    capital: 'Ljubljana',
    emoji: '🇸🇮',
    currency: 'EUR',
    phone: '386',
    languages: [
      {
        __typename: 'Language',
        code: 'sl',
        name: 'Slovenian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Svalbard and Jan Mayen',
    code: 'SJ',
    native: 'Svalbard og Jan Mayen',
    capital: 'Longyearbyen',
    emoji: '🇸🇯',
    currency: 'NOK',
    phone: '4779',
    languages: [
      {
        __typename: 'Language',
        code: 'no',
        name: 'Norwegian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Slovakia',
    code: 'SK',
    native: 'Slovensko',
    capital: 'Bratislava',
    emoji: '🇸🇰',
    currency: 'EUR',
    phone: '421',
    languages: [
      {
        __typename: 'Language',
        code: 'sk',
        name: 'Slovak'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Sierra Leone',
    code: 'SL',
    native: 'Sierra Leone',
    capital: 'Freetown',
    emoji: '🇸🇱',
    currency: 'SLL',
    phone: '232',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'San Marino',
    code: 'SM',
    native: 'San Marino',
    capital: 'City of San Marino',
    emoji: '🇸🇲',
    currency: 'EUR',
    phone: '378',
    languages: [
      {
        __typename: 'Language',
        code: 'it',
        name: 'Italian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Senegal',
    code: 'SN',
    native: 'Sénégal',
    capital: 'Dakar',
    emoji: '🇸🇳',
    currency: 'XOF',
    phone: '221',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Somalia',
    code: 'SO',
    native: 'Soomaaliya',
    capital: 'Mogadishu',
    emoji: '🇸🇴',
    currency: 'SOS',
    phone: '252',
    languages: [
      {
        __typename: 'Language',
        code: 'so',
        name: 'Somalia'
      },
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Suriname',
    code: 'SR',
    native: 'Suriname',
    capital: 'Paramaribo',
    emoji: '🇸🇷',
    currency: 'SRD',
    phone: '597',
    languages: [
      {
        __typename: 'Language',
        code: 'nl',
        name: 'Dutch'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'South Sudan',
    code: 'SS',
    native: 'South Sudan',
    capital: 'Juba',
    emoji: '🇸🇸',
    currency: 'SSP',
    phone: '211',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'São Tomé and Príncipe',
    code: 'ST',
    native: 'São Tomé e Príncipe',
    capital: 'São Tomé',
    emoji: '🇸🇹',
    currency: 'STN',
    phone: '239',
    languages: [
      {
        __typename: 'Language',
        code: 'pt',
        name: 'Portuguese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'El Salvador',
    code: 'SV',
    native: 'El Salvador',
    capital: 'San Salvador',
    emoji: '🇸🇻',
    currency: 'SVC,USD',
    phone: '503',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Sint Maarten',
    code: 'SX',
    native: 'Sint Maarten',
    capital: 'Philipsburg',
    emoji: '🇸🇽',
    currency: 'ANG',
    phone: '1721',
    languages: [
      {
        __typename: 'Language',
        code: 'nl',
        name: 'Dutch'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Syria',
    code: 'SY',
    native: 'سوريا',
    capital: 'Damascus',
    emoji: '🇸🇾',
    currency: 'SYP',
    phone: '963',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Swaziland',
    code: 'SZ',
    native: 'Swaziland',
    capital: 'Lobamba',
    emoji: '🇸🇿',
    currency: 'SZL',
    phone: '268',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'ss',
        name: 'Swati'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Turks and Caicos Islands',
    code: 'TC',
    native: 'Turks and Caicos Islands',
    capital: 'Cockburn Town',
    emoji: '🇹🇨',
    currency: 'USD',
    phone: '1649',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Chad',
    code: 'TD',
    native: 'Tchad',
    capital: "N'Djamena",
    emoji: '🇹🇩',
    currency: 'XAF',
    phone: '235',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      },
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'French Southern Territories',
    code: 'TF',
    native: 'Territoire des Terres australes et antarctiques fr',
    capital: 'Port-aux-Français',
    emoji: '🇹🇫',
    currency: 'EUR',
    phone: '262',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Antarctica',
      code: 'AN'
    }
  },
  {
    __typename: 'Country',
    name: 'Togo',
    code: 'TG',
    native: 'Togo',
    capital: 'Lomé',
    emoji: '🇹🇬',
    currency: 'XOF',
    phone: '228',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Thailand',
    code: 'TH',
    native: 'ประเทศไทย',
    capital: 'Bangkok',
    emoji: '🇹🇭',
    currency: 'THB',
    phone: '66',
    languages: [
      {
        __typename: 'Language',
        code: 'th',
        name: 'Thai'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Tajikistan',
    code: 'TJ',
    native: 'Тоҷикистон',
    capital: 'Dushanbe',
    emoji: '🇹🇯',
    currency: 'TJS',
    phone: '992',
    languages: [
      {
        __typename: 'Language',
        code: 'tg',
        name: 'Tajik'
      },
      {
        __typename: 'Language',
        code: 'ru',
        name: 'Russian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Tokelau',
    code: 'TK',
    native: 'Tokelau',
    capital: 'Fakaofo',
    emoji: '🇹🇰',
    currency: 'NZD',
    phone: '690',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'East Timor',
    code: 'TL',
    native: 'Timor-Leste',
    capital: 'Dili',
    emoji: '🇹🇱',
    currency: 'USD',
    phone: '670',
    languages: [
      {
        __typename: 'Language',
        code: 'pt',
        name: 'Portuguese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Turkmenistan',
    code: 'TM',
    native: 'Türkmenistan',
    capital: 'Ashgabat',
    emoji: '🇹🇲',
    currency: 'TMT',
    phone: '993',
    languages: [
      {
        __typename: 'Language',
        code: 'tk',
        name: 'Turkmen'
      },
      {
        __typename: 'Language',
        code: 'ru',
        name: 'Russian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Tunisia',
    code: 'TN',
    native: 'تونس',
    capital: 'Tunis',
    emoji: '🇹🇳',
    currency: 'TND',
    phone: '216',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Tonga',
    code: 'TO',
    native: 'Tonga',
    capital: "Nuku'alofa",
    emoji: '🇹🇴',
    currency: 'TOP',
    phone: '676',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'to',
        name: 'Tonga'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Turkey',
    code: 'TR',
    native: 'Türkiye',
    capital: 'Ankara',
    emoji: '🇹🇷',
    currency: 'TRY',
    phone: '90',
    languages: [
      {
        __typename: 'Language',
        code: 'tr',
        name: 'Turkish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Trinidad and Tobago',
    code: 'TT',
    native: 'Trinidad and Tobago',
    capital: 'Port of Spain',
    emoji: '🇹🇹',
    currency: 'TTD',
    phone: '1868',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Tuvalu',
    code: 'TV',
    native: 'Tuvalu',
    capital: 'Funafuti',
    emoji: '🇹🇻',
    currency: 'AUD',
    phone: '688',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Taiwan',
    code: 'TW',
    native: '臺灣',
    capital: 'Taipei',
    emoji: '🇹🇼',
    currency: 'TWD',
    phone: '886',
    languages: [
      {
        __typename: 'Language',
        code: 'zh',
        name: 'Chinese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Tanzania',
    code: 'TZ',
    native: 'Tanzania',
    capital: 'Dodoma',
    emoji: '🇹🇿',
    currency: 'TZS',
    phone: '255',
    languages: [
      {
        __typename: 'Language',
        code: 'sw',
        name: 'Swahili'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Ukraine',
    code: 'UA',
    native: 'Україна',
    capital: 'Kyiv',
    emoji: '🇺🇦',
    currency: 'UAH',
    phone: '380',
    languages: [
      {
        __typename: 'Language',
        code: 'uk',
        name: 'Ukrainian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Uganda',
    code: 'UG',
    native: 'Uganda',
    capital: 'Kampala',
    emoji: '🇺🇬',
    currency: 'UGX',
    phone: '256',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'sw',
        name: 'Swahili'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'U.S. Minor Outlying Islands',
    code: 'UM',
    native: 'United States Minor Outlying Islands',
    capital: null,
    emoji: '🇺🇲',
    currency: 'USD',
    phone: '1',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'United States',
    code: 'US',
    native: 'United States',
    capital: 'Washington D.C.',
    emoji: '🇺🇸',
    currency: 'USD,USN,USS',
    phone: '1',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Uruguay',
    code: 'UY',
    native: 'Uruguay',
    capital: 'Montevideo',
    emoji: '🇺🇾',
    currency: 'UYI,UYU',
    phone: '598',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'Uzbekistan',
    code: 'UZ',
    native: 'O‘zbekiston',
    capital: 'Tashkent',
    emoji: '🇺🇿',
    currency: 'UZS',
    phone: '998',
    languages: [
      {
        __typename: 'Language',
        code: 'uz',
        name: 'Uzbek'
      },
      {
        __typename: 'Language',
        code: 'ru',
        name: 'Russian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Vatican City',
    code: 'VA',
    native: 'Vaticano',
    capital: 'Vatican City',
    emoji: '🇻🇦',
    currency: 'EUR',
    phone: '379',
    languages: [
      {
        __typename: 'Language',
        code: 'it',
        name: 'Italian'
      },
      {
        __typename: 'Language',
        code: 'la',
        name: 'Latin'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Saint Vincent and the Grenadines',
    code: 'VC',
    native: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    emoji: '🇻🇨',
    currency: 'XCD',
    phone: '1784',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Venezuela',
    code: 'VE',
    native: 'Venezuela',
    capital: 'Caracas',
    emoji: '🇻🇪',
    currency: 'VES',
    phone: '58',
    languages: [
      {
        __typename: 'Language',
        code: 'es',
        name: 'Spanish'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'South America',
      code: 'SA'
    }
  },
  {
    __typename: 'Country',
    name: 'British Virgin Islands',
    code: 'VG',
    native: 'British Virgin Islands',
    capital: 'Road Town',
    emoji: '🇻🇬',
    currency: 'USD',
    phone: '1284',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'U.S. Virgin Islands',
    code: 'VI',
    native: 'United States Virgin Islands',
    capital: 'Charlotte Amalie',
    emoji: '🇻🇮',
    currency: 'USD',
    phone: '1340',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'North America',
      code: 'NA'
    }
  },
  {
    __typename: 'Country',
    name: 'Vietnam',
    code: 'VN',
    native: 'Việt Nam',
    capital: 'Hanoi',
    emoji: '🇻🇳',
    currency: 'VND',
    phone: '84',
    languages: [
      {
        __typename: 'Language',
        code: 'vi',
        name: 'Vietnamese'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Vanuatu',
    code: 'VU',
    native: 'Vanuatu',
    capital: 'Port Vila',
    emoji: '🇻🇺',
    currency: 'VUV',
    phone: '678',
    languages: [
      {
        __typename: 'Language',
        code: 'bi',
        name: 'Bislama'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Wallis and Futuna',
    code: 'WF',
    native: 'Wallis et Futuna',
    capital: 'Mata-Utu',
    emoji: '🇼🇫',
    currency: 'XPF',
    phone: '681',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Samoa',
    code: 'WS',
    native: 'Samoa',
    capital: 'Apia',
    emoji: '🇼🇸',
    currency: 'WST',
    phone: '685',
    languages: [
      {
        __typename: 'Language',
        code: 'sm',
        name: 'Samoan'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Oceania',
      code: 'OC'
    }
  },
  {
    __typename: 'Country',
    name: 'Kosovo',
    code: 'XK',
    native: 'Republika e Kosovës',
    capital: 'Pristina',
    emoji: '🇽🇰',
    currency: 'EUR',
    phone: '377,381,383,386',
    languages: [
      {
        __typename: 'Language',
        code: 'sq',
        name: 'Albanian'
      },
      {
        __typename: 'Language',
        code: 'sr',
        name: 'Serbian'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Europe',
      code: 'EU'
    }
  },
  {
    __typename: 'Country',
    name: 'Yemen',
    code: 'YE',
    native: 'اليَمَن',
    capital: "Sana'a",
    emoji: '🇾🇪',
    currency: 'YER',
    phone: '967',
    languages: [
      {
        __typename: 'Language',
        code: 'ar',
        name: 'Arabic'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Asia',
      code: 'AS'
    }
  },
  {
    __typename: 'Country',
    name: 'Mayotte',
    code: 'YT',
    native: 'Mayotte',
    capital: 'Mamoudzou',
    emoji: '🇾🇹',
    currency: 'EUR',
    phone: '262',
    languages: [
      {
        __typename: 'Language',
        code: 'fr',
        name: 'French'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'South Africa',
    code: 'ZA',
    native: 'South Africa',
    capital: 'Pretoria',
    emoji: '🇿🇦',
    currency: 'ZAR',
    phone: '27',
    languages: [
      {
        __typename: 'Language',
        code: 'af',
        name: 'Afrikaans'
      },
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'nr',
        name: 'South Ndebele'
      },
      {
        __typename: 'Language',
        code: 'st',
        name: 'Southern Sotho'
      },
      {
        __typename: 'Language',
        code: 'ss',
        name: 'Swati'
      },
      {
        __typename: 'Language',
        code: 'tn',
        name: 'Tswana'
      },
      {
        __typename: 'Language',
        code: 'ts',
        name: 'Tsonga'
      },
      {
        __typename: 'Language',
        code: 've',
        name: 'Venda'
      },
      {
        __typename: 'Language',
        code: 'xh',
        name: 'Xhosa'
      },
      {
        __typename: 'Language',
        code: 'zu',
        name: 'Zulu'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Zambia',
    code: 'ZM',
    native: 'Zambia',
    capital: 'Lusaka',
    emoji: '🇿🇲',
    currency: 'ZMW',
    phone: '260',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  },
  {
    __typename: 'Country',
    name: 'Zimbabwe',
    code: 'ZW',
    native: 'Zimbabwe',
    capital: 'Harare',
    emoji: '🇿🇼',
    currency: 'USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY',
    phone: '263',
    languages: [
      {
        __typename: 'Language',
        code: 'en',
        name: 'English'
      },
      {
        __typename: 'Language',
        code: 'sn',
        name: 'Shona'
      },
      {
        __typename: 'Language',
        code: 'nd',
        name: 'North Ndebele'
      }
    ],
    continent: {
      __typename: 'Continent',
      name: 'Africa',
      code: 'AF'
    }
  }
];
