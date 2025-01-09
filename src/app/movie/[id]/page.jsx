"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=51ac0cb256bf2dea75d3a20d26f069a7&`);
      const data = await res.json();
      setMovieDetail(data);
    };

    fetchMovie();
  }, [params.id]); // Sadece `params.id` değiştiğinde tetiklenir

  if (!movieDetail) return <div>Loading...</div>;

  return (
    <div className='relative p-7 min-h-screen'>
      <Image style={{ objectFit: "cover" }}
      width={500}
      height={400}
       
        src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} 
        alt={movieDetail?.title}
      />
      <div className='absolute'>
        <div className='text-4xl font-bold my-3'>{movieDetail?.title}</div>
        <div className='w-1/2'>{movieDetail?.overview}</div>
        <div className='my-3'>{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
        <div className='my-2 border w-32 p-2 rounded-md text-center text-lg cursor-pointer hover:opacity-75 hover:bg-white hover:text-black transition-opacity'>Fragmanı İzle</div>
      </div>
    </div>
  );
};

export default Page;
