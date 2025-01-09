"use client"
import React, { useEffect, useState } from "react";
import Movies from "@/components/Movies";

const Page = ({ searchParams }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${
          searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
        }?api_key=51ac0cb256bf2dea75d3a20d26f069a7&language=en-US&page=1`
      );
      const result = await res.json();
      setData(result.results);
    };

    fetchData();
  }, [searchParams.genre]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex items-center m-auto justify-center flex-wrap gap-3">
      {data.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
