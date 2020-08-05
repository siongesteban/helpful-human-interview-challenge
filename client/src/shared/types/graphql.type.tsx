import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Hue = {
  __typename?: 'Hue';
  id: Scalars['Int'];
  name: Scalars['String'];
  swatches: Array<Swatch>;
};

export type PaginatedSwatches = {
  __typename?: 'PaginatedSwatches';
  list: Array<Swatch>;
  meta: PaginationMeta;
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  hues: Array<Hue>;
  paginatedSwatches: PaginatedSwatches;
  swatch?: Maybe<Swatch>;
};


export type QueryPaginatedSwatchesArgs = {
  color?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
};


export type QuerySwatchArgs = {
  id: Scalars['Int'];
};

export type Swatch = {
  __typename?: 'Swatch';
  hex: Scalars['String'];
  hue: Hue;
  id: Scalars['Int'];
};


