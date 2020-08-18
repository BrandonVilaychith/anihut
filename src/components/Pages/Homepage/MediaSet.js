import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Set = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  justify-content: space-between;
  margin-bottom: 8em;
`;

const MediaSetTitle = styled.h1`
  font-size: 2em;
  text-transform: uppercase;
  margin-bottom: 1em;
  font-weight: 500;
  color: #999999;
`;

const Cover = styled.div`
  width: 185px;
  height: 265px;
  &:hover {
    color: ${(props) => props.hoverColor || "red"};
  }
  /* border: 1px solid red; */
  /* object-fit: cover; */
  img {
    width: 100%;
    border-radius: 0.5em;
    height: 100%;
  }
`;

const MediaContainer = styled.div`
  &:hover {
    color: ${(props) => props.hoverColor || "red"};
  }
`;

const AnimeTitle = styled.p`
  color: #fff;
  width: 100%;
  font-size: 1.5em;
  margin-top: 1em;
`;

const MediaSet = ({ list }) => {
  return (
    <Set>
      <MediaSetTitle>Trending</MediaSetTitle>
      <FlexContainer>
        {list.media.map((anime) => (
          <MediaContainer
            hoverColor={`${anime.coverImage.color}`}
            key={anime.id}
          >
            <Cover>
              <img
                src={`${anime.coverImage.extraLarge}`}
                alt={`${anime.title.english}`}
              />
              <AnimeTitle>
                {anime.title.english ? anime.title.english : anime.title.romaji}
              </AnimeTitle>
            </Cover>
          </MediaContainer>
        ))}
      </FlexContainer>
    </Set>
  );
};

export default MediaSet;
