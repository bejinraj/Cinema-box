import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} / CinemaBox`;
  });

  return null;
};

export default useTitle;
