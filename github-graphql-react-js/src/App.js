import React from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "./GraphQL/Query";

import "./App.css";

const token = process.env.REACT_APP_GITHUB_TOKEN;

console.log(token);

const App = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: {
      username: "facebook",
      repository: "react",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return <div></div>;
};

export default App;
