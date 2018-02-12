import React, {Component} from 'react';
import VideoListItem from './video_list_item'

const VideoList = ({videos, onVideoSelect}) => {

    let videoItems = videos.map(video => {
        return <VideoListItem video={video} key={video.etag} onVideoSelect={onVideoSelect}/>
    });

    return (<ul className="col-md-4 list-group">
        {videoItems}
        </ul>);

};

export default VideoList;