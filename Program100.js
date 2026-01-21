// Program-100: React + GraphQL Example with Apollo Client
// *******************************************************
// Notes:
// 1. GraphQL is a query language for APIs, allows fetching only required data.
// 2. Apollo Client helps connect React to GraphQL server.
// 3. Install packages: npm install @apollo/client graphql
// 4. ApolloProvider wraps the app to provide client access.
// 5. gql is used to define GraphQL queries.
// 6. useQuery hook fetches data and manages loading/error states.
// 7. React handles the UI while Apollo manages caching automatically.
// 8. You can fetch multiple queries and handle variables.
// 9. Always check loading and error states to avoid broken UI.
// 10. You can also use mutations with useMutation hook.
// 11. Example below fetches comments from a GraphQL server.

import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from "@apollo/client";

// 1. Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:5000/", // GraphQL server URL
  cache: new InMemoryCache(),
});

// 2. Define GraphQL query
const GET_COMMENTS_QUERY = gql`
  query comments {
    comments {
      id 
      name
      email
    }
  }
`;

// 3. Component to fetch and display data
function CommentsList() {
  // 4. useQuery handles data fetching
  const { loading, error, data } = useQuery(GET_COMMENTS_QUERY);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>Error fetching comments: {error.message}</p>;

  return (
    <div>
      <h2>Comments List:</h2>
      <ul>
        {data.comments.map((comment) => (
          <li key={comment.id}>
            <b>{comment.name}</b> - {comment.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 5. App Component
export default function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: "20px" }}>
        <h1>GraphQL + Apollo Client Demo</h1>
        <CommentsList />
      </div>
    </ApolloProvider>
  );
}
