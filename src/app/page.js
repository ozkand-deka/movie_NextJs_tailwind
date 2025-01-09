// "use client";
// import React from "react";
// import Movies from "./components/Movies";

// const Page = async ({ searchParams }) => {
//   const genre = searchParams.genre || "trending/all/day";
  
//   // Static fetch işlemi
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${genre}?api_key=51ac0cb256bf2dea75d3a20d26f069a7&language=en-US&page=1`,
//     { next: { revalidate: 1000 } }
//   );
  
//   const data = await res.json();

//   return (
//     <div className="flex items-center flex-wrap gap-3">
//       {data.results?.map((dt, i) => (
//         <Movies key={i} dt={dt} />
//       ))}
//     </div>
//   );
// };

// export default Page;
