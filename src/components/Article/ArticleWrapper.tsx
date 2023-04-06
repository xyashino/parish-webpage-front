import React, { useContext } from "react";
import { MenuContext } from "@context/MenuContext";
import { BackgroundImage } from "@components/ui/BackgroundImage";

export const ArticleWrapper = () => {
  const { activeItem } = useContext(MenuContext);
  return (
    <>
      <BackgroundImage image={activeItem.image as string} />
      <article className="prose-md prose  text-black lg:prose-xl">
        {activeItem.article || null}
      </article>
    </>
  );
};
