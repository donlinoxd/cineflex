import React from "react";
import { useFetch } from "../../Hooks/useFetch";
import { useSlidesPerView } from "../../Hooks/useSlidesPerView";
import { Link } from "react-router-dom";

import { Loader2 } from "../../Helpers/SkeletonLoaders";
import variables from "../../Helpers/variables";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Movies = ({ heading, url }) => {
  const { data: movies, isLoading } = useFetch(url);
  const { slidesPerView } = useSlidesPerView(200);

  return (
    <section>
      <div className="title mb-1 lg:mb-2 text-lg sm:text-xl cursor-pointer">
        <h2>{heading} &gt;</h2>
      </div>
      {isLoading && <Loader2 />}
      {movies && (
        <Swiper
          slidesPerView={3}
          spaceBetween={4}
          freeMode={true}
          navigation={window.innerWidth > 992}
          pagination={{
            type: "progressbar",
          }}
          breakpoints={{
            640: {
              slidesPerView: slidesPerView,
              spaceBetween: 6,
            },
          }}
        >
          {movies.results.map(({ poster_path, id, title }) => {
            if (!poster_path) return null;
            return (
              <SwiperSlide key={id} className="play-active overflow-hidden">
                <Link to={`/movie/${id}`}>
                  <img
                    className="rounded-md cursor-pointer transition-all duration-500 hover:transform hover:scale-110"
                    src={variables.IMG_BASE_URL_200 + poster_path}
                    alt={title}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default React.memo(Movies);
