import { gql } from "@apollo/client";

// Fragments
export default gql`
  fragment HomePageFragment on Media {
    id
    popularity
    title {
      english
      romaji
    }
    type
    format
    status
    seasonYear
    season
    episodes
    duration
    coverImage {
      extraLarge
      color
    }
    genres
    averageScore
    format
    studios(isMain: true) {
      nodes {
        id
        name
      }
    }
  }
`;
