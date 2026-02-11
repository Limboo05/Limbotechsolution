import React from "react";
import ReactPlayer from "react-player/youtube"; // You can use /lazy or /youtube for better performance

export default function Video(props: { Source: string }) {
    return (
        <div className="Video" id="Explainer">
            <div className="VideoContainer">
                <ReactPlayer
                    url={props.Source}
                    className="ReactPlayer"
                    controls={true}
                    width="100%"
                    height="100%"
                    // Optional: use a custom thumbnail if you don't want the YT one
                    // light="/vid/Poster.png" 
                />
            </div>
        </div>
    )
}