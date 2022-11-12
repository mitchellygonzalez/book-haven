import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    getSingleUser {
      _id
      username
      email
      bookCount
      savedBooks {
        #_id
        authors
        description
        title
        bookId
        image
        link
      }
    }
  }
`;
