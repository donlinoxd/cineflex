import { useState, useEffect, useCallback } from "react";

export const useSlidesPerView = (px) => {
  const [slidesPerView, setSlidesPerView] = useState(
    Math.ceil(window.innerWidth / px)
  );

  const handleResize = useCallback(() => {
    setSlidesPerView(Math.ceil(window.innerWidth / px));
  }, [px]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return { slidesPerView };
};
