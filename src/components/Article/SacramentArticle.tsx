import React ,{ useContext } from "react";
import { MenuContext } from "@context/MenuContext";
import { BackgroundImage } from "@components/ui/BackgroundImage";

export const SacramentArticle = () => {
  const { activeItem } = useContext(MenuContext);
  return (
    <div>
      <BackgroundImage image={activeItem.image as string} />
      <article className="prose text-black prose-lg lg:prose-xl">
        {activeItem.article || null}
      </article>
    </div>
  );
};
