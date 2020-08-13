export const getCurrentSeason = () => {
  const month = new Date(Date.now()).getMonth();
  let season = "";

  switch (month) {
    case 12:
    case 1:
    case 2:
      season = "WINTER";
      break;
    case 3:
    case 4:
    case 5:
      season = "SPRING";
      break;
    case 6:
    case 7:
    case 8:
      season = "SUMMER";
      break;
    case 9:
    case 10:
    case 11:
      season = "FALL";
      break;
    default:
      break;
  }

  return season;
};

export const getCurrentYear = () => new Date().getFullYear();

export const getNextSeason = () => {
  const currentSeason = getCurrentSeason();
  const seasons = ["WINTER", "SPRING", "SUMMER", "FALL"];

  const index = seasons.indexOf(currentSeason);

  if (index + 1 === 4) {
    return seasons[0];
  }

  return seasons[index + 1];
};
