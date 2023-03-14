import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthResult = {
  __typename?: 'AuthResult';
  access_token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Deleted = {
  __typename?: 'Deleted';
  deleted?: Maybe<Scalars['Boolean']>;
};

export type LoginInputParameters = {
  __typename?: 'LoginInputParameters';
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  createUser?: Maybe<User>;
  deletePost?: Maybe<Deleted>;
  deleteUser?: Maybe<Deleted>;
  login?: Maybe<AuthResult>;
  updatePost?: Maybe<Post>;
  updateUser?: Maybe<User>;
};


export type MutationCreatePostArgs = {
  caption?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreateUserArgs = {
  accountType: Scalars['String'];
  bio: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  caption?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdateUserArgs = {
  accountType?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'POST';
  caption?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  getALLPosts?: Maybe<Array<Maybe<Post>>>;
  getALLUsers?: Maybe<Array<Maybe<User>>>;
  getPostByID?: Maybe<Post>;
  getUserByID?: Maybe<User>;
};


export type QueryGetPostByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetUserByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  accountType: Scalars['String'];
  bio: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  profilePhoto: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthResult', access_token?: string | null, user?: { __typename?: 'User', id: string, name: string, accountType: string, profilePhoto: string, email: string, bio: string } | null } | null };

export type SignUpMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  accountType: Scalars['String'];
  bio: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, name: string, accountType: string, profilePhoto: string, email: string, bio: string } | null };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', getALLPosts?: Array<{ __typename?: 'POST', id: string, images?: Array<string | null> | null, caption?: string | null } | null> | null };

export type GetPostByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetPostByIdQuery = { __typename?: 'Query', getPostByID?: { __typename?: 'POST', id: string, images?: Array<string | null> | null, caption?: string | null } | null };

export type CreatePostMutationVariables = Exact<{
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  caption: Scalars['String'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'POST', id: string, images?: Array<string | null> | null, caption?: string | null } | null };

export type UpdatePostMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  caption: Scalars['String'];
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost?: { __typename?: 'POST', id: string, images?: Array<string | null> | null, caption?: string | null } | null };

export type DeletePostMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost?: { __typename?: 'Deleted', deleted?: boolean | null } | null };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    access_token
    user {
      id
      name
      accountType
      profilePhoto
      email
      bio
    }
  }
}
    `;
export const SignUpDocument = gql`
    mutation SignUp($name: String!, $email: String!, $password: String!, $accountType: String!, $bio: String!) {
  createUser(
    name: $name
    accountType: $accountType
    email: $email
    bio: $bio
    password: $password
  ) {
    id
    name
    accountType
    profilePhoto
    email
    bio
  }
}
    `;
export const GetAllPostsDocument = gql`
    query getALLPosts {
  getALLPosts {
    id
    images
    caption
  }
}
    `;
export const GetPostByIdDocument = gql`
    query getPostByID($id: ID) {
  getPostByID(id: $id) {
    id
    images
    caption
  }
}
    `;
export const CreatePostDocument = gql`
    mutation createPost($images: [String], $caption: String!) {
  createPost(images: $images, caption: $caption) {
    id
    images
    caption
  }
}
    `;
export const UpdatePostDocument = gql`
    mutation updatePost($id: ID, $images: [String], $caption: String!) {
  updatePost(id: $id, images: $images, caption: $caption) {
    id
    images
    caption
  }
}
    `;
export const DeletePostDocument = gql`
    mutation deletePost($id: ID) {
  deletePost(id: $id) {
    deleted
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Login(variables: LoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Login', 'mutation');
    },
    SignUp(variables: SignUpMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignUpMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignUpMutation>(SignUpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SignUp', 'mutation');
    },
    getALLPosts(variables?: GetAllPostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPostsQuery>(GetAllPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getALLPosts', 'query');
    },
    getPostByID(variables?: GetPostByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPostByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostByIdQuery>(GetPostByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPostByID', 'query');
    },
    createPost(variables: CreatePostMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreatePostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePostMutation>(CreatePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createPost', 'mutation');
    },
    updatePost(variables: UpdatePostMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdatePostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePostMutation>(UpdatePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updatePost', 'mutation');
    },
    deletePost(variables?: DeletePostMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeletePostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePostMutation>(DeletePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deletePost', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;