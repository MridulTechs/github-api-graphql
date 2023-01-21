import React from "react";
import { client } from "../client";
import { GET_REPOSITORY } from "../GraphQL/Query";

const Home = ({ data }) => {
  console.log(data);
  return <div></div>;
};

export default Home;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_REPOSITORY,
    variables: {
      username: "vercel",
      repository: "next.js",
    },
  });

  return {
    props: {
      data,
    },
  };
}
