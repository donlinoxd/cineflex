import { useFetch } from "../../Hooks/useFetch";
import variables from "../../Helpers/variables";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Trailers = ({ id }) => {
  const url = `${variables.BASE_URL}movie/${id}/videos?api_key=${variables.TMDB_API_KEY}&language=en-US`;
  const { data: trailers, isLoading } = useFetch(url);

  return (
    <div>
      <div className="mb-1 lg:mb-2 text-lg sm:text-xl cursor-pointer font-bold tracking-wide">
        <h2>Trailers</h2>
      </div>
      {isLoading || (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={8}
            navigation={true}
            pagination={{ type: "fraction" }}
            centeredSlides={trailers.results.length < 2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
          >
            {trailers.results.map(
              (trailer) =>
                trailer.site === "YouTube" && (
                  <SwiperSlide key={trailer.id}>
                    <div className="relative w-full">
                      <div
                        className="h-0 overflow-hidden"
                        style={{ paddingBottom: "52.25%", paddingTop: "30px" }}
                      >
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${trailer.key}`}
                          title={trailer.name}
                          frameBorder="0"
                          allowFullScreen={true}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </>
      )}
    </div>
  );
};

export default Trailers;
