import { useEffect, useState } from "react";

export const useWindowDimension = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const updateState = () => {
      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
      setIsDesktop(desktopQuery.matches);
    };

    updateState();

    mobileQuery.addEventListener("change", updateState);
    tabletQuery.addEventListener("change", updateState);
    desktopQuery.addEventListener("change", updateState);

    return () => {
      mobileQuery.removeEventListener("change", updateState);
      tabletQuery.removeEventListener("change", updateState);
      desktopQuery.removeEventListener("change", updateState);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};
