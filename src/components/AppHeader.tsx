import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "@icons/Logo";
import { DesktopNavbar } from "@components/DesktopNavbar/DesktopNavbar";
import { PageRouter } from "@enums/page-router.enum";
import { APP_NAME } from "@data/page-constants.data";
import { useIsMobileQuery } from "@hooks/useIsMobileQuery";
import { MobileNavbar } from "@components/MobileNavbar/MobileNavbar";
import { useScrollTo } from "@hooks/useScrollTo";

export const AppHeader = () => {
  const isMobile = useIsMobileQuery(1024);
  const { scrollToElement } = useScrollTo("#root");

  return (
    <nav className="navbar sticky top-0 z-20 bg-base-100 shadow">
      <div className="mx-2 flex-1 px-2">
        <Link
          to={PageRouter.Main}
          className="btn-ghost btn text-xl font-bold normal-case"
          onClick={scrollToElement}
        >
          <Logo className="mr-4" />
          {APP_NAME}
        </Link>
      </div>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </nav>
  );
};
