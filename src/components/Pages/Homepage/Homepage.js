import React from "react";
import { useQuery } from "@apollo/client";
import queries from "../../queries";
import styled from "styled-components";
import MediaSet from "./MediaSet";
import MediaList from "./MediaList";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { getCurrentSeason, getCurrentYear, getNextSeason } from "../../utils";

const Container = styled.div`
  width: 70%;
  min-width: 1344px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
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

  const {
    trending,
    popularAllTime,
    popularCurrentSeason,
    upcoming,
    top100,
  } = data;

  return (
    <Container>
      <Carousel
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {data.image.media.map((anime) => (
          <img
            key={anime.id}
            src={`${anime.bannerImage}`}
            alt={anime.title.english ? anime.title.english : anime.title.romaji}
          />
        ))}
      </Carousel>
      <MediaSet list={trending} />
      <MediaSet list={popularCurrentSeason} />
      <MediaSet list={popularAllTime} />
      <MediaSet list={upcoming} />
      <MediaList list={top100} />
    </Container>
  );
};

export default Homepage;
