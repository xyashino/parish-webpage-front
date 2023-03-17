import React from "react";
import { Album } from "@backendTypes";
import { Link } from "react-router-dom";

const { VITE_GALLERY_URL } = import.meta.env;

interface Props {
  title: Album["title"];
  subtitle: Album["subtitle"];
  bgImg: Album["backgroundImage"];

  id: Album["id"];
}

export const AlbumCard = ({ title, subtitle, id, bgImg }: Props) => {
  return (
    <div className="max-w-5/6 card glass mb-8 w-96">
      <figure>
        <img src={VITE_GALLERY_URL + bgImg} alt="Album cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
        <div className="card-actions justify-end">
          <Link to={`/album/${id}`} className="btn-primary btn">
            Zobacz Więcej
          </Link>
        </div>
      </div>
    </div>
  );
};
