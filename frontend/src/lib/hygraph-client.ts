import { GraphQLClient } from 'graphql-request';

const hygraphUrl = import.meta.env.VITE_HYGRAPH_URL;
const hygraphToken = import.meta.env.VITE_HYGRAPH_TOKEN;

if (!hygraphUrl || !hygraphToken) {
  console.warn(
    '[Hygraph] Missing VITE_HYGRAPH_URL or VITE_HYGRAPH_TOKEN. ' +
      'GraphQL client will not be initialised. Fallback data will be used.'
  );
}

export const hygraphClient = hygraphUrl && hygraphToken
  ? new GraphQLClient(hygraphUrl, {
      headers: {
        Authorization: `Bearer ${hygraphToken}`,
      },
    })
  : null;
