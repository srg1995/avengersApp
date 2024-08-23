import React from "react";
import { HeartIcon } from "../../assets/icons";
import Layout from "../../components/Layout";
import Carousel from "../../components/Carousel/Carousel";
import useCarousel from "../../common/hook/useCarousel";

export default function CharacterDetail() {
  const { characterDetail } = useCarousel();

  return (
    <Layout>
      {characterDetail?.id ? (
        <>
          <article id="characterDetail">
            <img src={characterDetail?.image} alt={characterDetail?.name} />
            <div id="info">
              <div id="title">
                <h2>{characterDetail?.name}</h2>
                <HeartIcon />
              </div>
              <p>{characterDetail?.description}</p>
            </div>
          </article>
          <article id="comics">
            <h2>COMICS</h2>
            <Carousel carouselData={characterDetail?.comics?.items} />
          </article>
        </>
      ) : (
        <div className="spinner"></div>
      )}
    </Layout>
  );
}
