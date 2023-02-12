import { useLayoutEffect, useState } from "react";

export const useIsMobileQuery = (minDesktopSize: number) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < minDesktopSize);

  useLayoutEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(() => window.innerWidth < minDesktopSize);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return isMobile;
};
