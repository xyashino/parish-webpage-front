import { useContext } from "react";
import { MenuContext } from "@context/MenuContext";
import { BackgroundImage } from "@components/ui/BackgroundImage";

export const SacramentArticle = () => {
  const { activeItem } = useContext(MenuContext);
  return (
    <div>
      <BackgroundImage image={activeItem.image as string} />
      <article className="prose p-4 text-black">
        {activeItem.article || null}
      </article>
    </div>
  );
};
