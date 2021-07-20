import React from "react";

import { useFetch } from "../../Hooks/useFetch";
import { Loader1 } from "../../Helpers/SkeletonLoaders";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

import MovieImage from "./Movie/MovieImage";
import MovieDetails from "./Movie/MovieDetails";
import variables from "../../Helpers/variables";

const { BASE_URL, TMDB_API_KEY } = variables;
const url = `${BASE_URL}trending/movie/day?api_key=${TMDB_API_KEY}`;

const BannerMovies = () => {
  const { data: movies, isLoading } = useFetch(url);

  SwiperCore.use([Navigation, EffectFade, Autoplay]);

  return (
    <>
      {isLoading ? (
        <Loader1 />
      ) : (
        <div className="w-full relative">
          <Swiper
            className="whitespace-nowrap relative"
            navigation
            loop={true}
            effect="fade"
            autoplay={{ delay: 4500, disableOnInteraction: false }}
          >
            {movies.results
              .filter((movie, index) => index < 4)
              .map((movie) => {
                return (
                  <SwiperSlide
                    key={movie.id}
                    className="w-screen relative inline-block"
                  >
                    <MovieImage {...movie} />
                    <MovieDetails {...movie} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default BannerMovies;
