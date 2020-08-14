import React from "react";
import { useQuery } from "@apollo/client";
import queries from "../../queries";
import styled from "styled-components";

import { getCurrentSeason, getCurrentYear, getNextSeason } from "../../utils";

const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    width: 100%;
  }
`;

const Homepage = () => {
  const { data, error, loading } = useQuery(queries.HOME_QUERY, {
    variables: {
      year: getCurrentYear(),
      nextSeason: getNextSeason(),
      currentSeason: getCurrentSeason(),
    },
  });

  if (loading) return "Loading...";
  if (error) return `${error.message}`;

  if (data) console.log(data);

  return (
    <Container>
      <img src={`${data.image.media[0].bannerImage}`} alt="" />
      <h1>jawiedjawoidjawoidj</h1>
    </Container>
  );
};

export default Homepage;
