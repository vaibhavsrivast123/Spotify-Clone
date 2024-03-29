import React from 'react';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
export default function Body({spotify}) {
  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify = {spotify} />
      <h1>I am a body</h1>
      <div className = "body-info">
                <img src = {discover_weekly?.images[0].url} alt = "" />
                <div className = "body-infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className = "body-songs">
                <div className = "body-icons">
                    <PlayCircleFilledIcon className = "body-shuffle" />
                    <FavoriteIcon fontSize = "large" />
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map((item)=>
                    <SongRow track = {item.track} />
                )}
            </div>
            </div>
    
  );
}
