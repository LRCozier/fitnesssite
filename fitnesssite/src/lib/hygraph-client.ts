import { GraphQLClient } from 'graphql-request';

const endpoint = import.meta.env.VITE_HYGRAPH_URL as string | undefined;
const token = import.meta.env.VITE_HYGRAPH_TOKEN as string | undefined;

if (!endpoint || !token) {
  console.warn(
    '[Hygraph] Missing VITE_HYGRAPH_URL or VITE_HYGRAPH_TOKEN. ' +
      'GraphQL client will not be initialised. Fallback data will be used.'
  );
}

export const hygraphClient: GraphQLClient | null =
  endpoint && token
    ? new GraphQLClient(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    : null;
