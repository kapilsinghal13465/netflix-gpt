import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { AppBackgroundUrl } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute w-full -z-10">
        <video className="w-screen" src={AppBackgroundUrl} />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
