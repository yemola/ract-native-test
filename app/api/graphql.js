import { request, gql } from "graphql-request";

const endpoint = "https://countries.trevorblades.com/graphql";

const query = gql`
  {
    countries {
      code
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

export default fetchCountries = async () => {
  try {
    const response = await request(endpoint, query);
    const countries = response.countries;
    return countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};
