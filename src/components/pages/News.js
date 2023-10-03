import React from "react";
import HeaderPages from "../UI/HeaderPages";
import NewsCard from "../UI/NewsCard";

const News = () => {
  return (
    <div className="pr-[8%] pl-[8%] py-16">
      <HeaderPages />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 pt-10 gap-5">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default News;
