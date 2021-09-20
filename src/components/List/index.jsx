import React from 'react';
import {Link} from 'react-router-dom';
import style from './index.module.css';
export default function List({title,animes,action}){

    return(
        <div className={style.listContainer}>
          <div className={style.listTitle}>
          <h2>{title}</h2>
          </div>
          <ul className ={style.items}>
              {
                  animes&&animes.map(anime=>
                    action?
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/Anime/${anime.mal_id}`}>
                      <div key={anime.mal_id} className={style.item}>
                        <span>{anime.title}</span>
                        <span className={style.label}>{anime.type==="TV"?"ANIME":anime.type}</span>
                      </div>
                    </Link>:
                    <div key={anime.mal_id} className={style.item}>
                    <span>{anime.title}</span>
                    <span className={style.label}>{anime.type==="TV"?"ANIME":anime.type}</span>
                  </div>
                      )
              }
          </ul>
        </div>
    );
}