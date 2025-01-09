"use client"
import React, { useEffect, useState } from "react";
import Movies from "@/components/Movies";

const Page = ({ params }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=51ac0cb256bf2dea75d3a20d26f069a7&query=${params.keyword}&language=en-US&page=1&include_adult=false`
      );
      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [params.keyword]);

  if (!movies) return <div>Loading...</div>;

  return (
    <div>
      {movies.length === 0 ? (
        <div>Aranılan kelimeye ait film bulunamadı....</div>
      ) : (
        <div className="flex flex-wrap items-center gap-3">
          {movies.map((dt, i) => <Movies key={i} dt={dt} />)}
        </div>
      )}
    </div>
  );
};

export default Page;
