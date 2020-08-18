import { gql } from "@apollo/client";
import HomePageFragment from "../fragments/homePageFragment";

export default gql`
  query homePageQuery(
    $year: Int!
    $currentSeason: MediaSeason!
    $nextSeason: MediaSeason!
  ) {
    trending: Page(page: 1, perPage: 6) {
      media(type: ANIME, sort: TRENDING_DESC) {
        ...HomePageFragment
        nextAiringEpisode {
          id
          episode
          timeUntilAiring
        }
      }
    }
    upcoming: Page(page: 1, perPage: 6) {
      media(season: $nextSeason, seasonYear: $year, sort: POPULARITY_DESC) {
        ...HomePageFragment
      }
    }
    popularCurrentSeason: Page(page: 1, perPage: 6) {
      media(
        format: TV
        season: $currentSeason
        seasonYear: $year
        sort: POPULARITY_DESC
      ) {
        ...HomePageFragment
        nextAiringEpisode {
          id
          episode
          timeUntilAiring
        }
      }
    }
    popularAllTime: Page(page: 1, perPage: 6) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        ...HomePageFragment
      }
    }
    top100: Page(perPage: 10, page: 1) {
      media(type: ANIME, sort: SCORE_DESC) {
        ...HomePageFragment
        nextAiringEpisode {
          id
          episode
          timeUntilAiring
        }
      }
    }
    image: Page(page: 1, perPage: 10) {
      media(sort: TRENDING_DESC) {
        id
        title {
          english
          romaji
        }
        bannerImage
      }
    }
  }
  ${HomePageFragment}
`;
