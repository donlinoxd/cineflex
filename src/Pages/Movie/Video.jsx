import playBtn from "../../Assets/bx-play.svg";

const Video = ({ id, title, isLoading }) => {
  return (
    <>
      {isLoading && (
        <div
          className="bg-gray-100 animate-pulse w-full flex items-center justify-center"
          style={{ height: `${window.innerWidth * 0.5}px` }}
        >
          <div className="bg-blue-200 animate-pulse w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center">
            <img src={playBtn} alt="Play Button" />
          </div>
        </div>
      )}

      {id && (
        <div className="relative w-full">
          <div
            className="h-0 overflow-hidden"
            style={{ paddingBottom: "52.25%", paddingTop: "30px" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.2embed.ru/embed/tmdb/movie?id=${id}`}
              title={title}
              frameBorder="0"
              allowFullScreen={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
