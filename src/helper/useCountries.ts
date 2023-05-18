import { useQuery, gql } from '@apollo/client';
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      native
      capital
      emoji
      currency
      phone
      languages {
        code
        name
      }
      continent {
        name
        code
      }
    }
  }
`;

export default () => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES);

  return { data, loading, error };
};
