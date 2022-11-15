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
/*

Creating app... done, ⬢ serene-peak-20734
https://serene-peak-20734.herokuapp.com/ | https://git.heroku.com/serene-peak-20734

*/ 