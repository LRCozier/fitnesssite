import { GraphQLClient } from 'graphql-request';

const hygraphUrl = import.meta.env.VITE_HYGRAPH_URL;

if (!hygraphUrl) {
  throw new Error('VITE_HYGRAPH_URL needs to be defined in env file');
}

export const hygraphClient = new GraphQLClient(hygraphUrl, {
  fetch,
});
