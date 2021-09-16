import React from "react";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";
import List from "../List";
import CardDescription from "../CardDescription";
import style from './index.module.css';
export default function Favorites() {
  const animes = useSelector((state) => state.animeFavorites);
  useEffect(() => {
   
  });
  return (
    <div className={style.favorites}>
      <div className = {style.listFavorites}>
      <List title = "Favorites" animes = {animes} />
      </div>
      { animes&&animes.map(anime=>
      anime.mal_id===""?
      <CardDescription key={anime.mal_id}
          title={anime.title}
          type={anime.type}
          episodes={anime.episodes}
          aired={anime.aired}
          duration={anime.duration}
          rating={anime.rating}
          score={anime.score}
          rank={anime.rank}
          popularity={anime.popularity}
          premiered={anime.premiered}
          opening_themes={anime.opening_themes}
          ending_themes={anime.ending_themes}
        />
        :
        null
      )
      }
      
    </div>
  );
}
