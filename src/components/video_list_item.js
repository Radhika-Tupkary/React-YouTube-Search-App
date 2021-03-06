import React, {Component} from 'react';

const videoListItem = ({video, onVideoSelect}) => {

    const url = video.snippet.thumbnails.default.url;

    return (
        <li onClick = {() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={url}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default videoListItem;