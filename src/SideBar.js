import React from 'react';
import './SideBar.css'
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from './DataLayer';

function SideBar() {
  const[{playlists},dispatch] = useDataLayerValue();
  return (
    <div className = "sidebar">
            <img className = "sidebar-logo" src =
            "" alt=""/>
            <SidebarOption  title = "Home" />
            <SidebarOption  title = "Search" />
            <SidebarOption  title = "Your Library" />
            
            <br />
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) =>(
                <SidebarOption title={playlist.name} />
            ))
            }
            
        </div>

    );

}

export default SideBar
