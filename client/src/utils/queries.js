import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    getSingleUser {
      bookCount
      _id
      email
      savedBooks {
        _id
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
`;
