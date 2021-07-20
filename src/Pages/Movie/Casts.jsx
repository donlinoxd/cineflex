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

const Casts = ({ id }) => {
  const url = `${variables.BASE_URL}movie/${id}/credits?api_key=${variables.TMDB_API_KEY}&language=en-US`;
  const { data: casts, isLoading } = useFetch(url);
  const { slidesPerView } = useSlidesPerView(200);

  return (
    <div>
      <div className="mb-1 lg:mb-2 text-lg sm:text-xl cursor-pointer font-bold tracking-wide">
        <h2>Casts</h2>
      </div>
      {isLoading ? (
        <Loader2 />
      ) : (
        <>
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
            {casts.cast.map(({ profile_path, id, name, character }) => {
              if (!profile_path) return null;
              return (
                <SwiperSlide key={id} className="bg-gray-900 rounded-md">
                  <Link to={`/browse/person/${id}`}>
                    <img
                      className="rounded-md cursor-pointer"
                      src={variables.IMG_BASE_URL_200 + profile_path}
                      alt={name}
                    />
                    <div className="text-center h-20 overflow-y-scroll scrollbar-hide flex flex-col justify-center">
                      <span>{name} as</span>
                      <em> {character ? `'${character}'` : null}</em>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default Casts;
