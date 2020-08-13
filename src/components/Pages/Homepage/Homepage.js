import React from "react";
import { useQuery } from "@apollo/client";
import queries from "../../queries";

import { getCurrentSeason, getCurrentYear, getNextSeason } from "../../utils";

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
    <div>
      <h1>Homepage</h1>
    </div>
  );
};

export default Homepage;
