import React, {useState,useRef, useEffect } from "react";
import '../assets/styles/basic.css';
import '../assets/styles/FirstPage.css';
import mp3 from '../assets/mp3/1.wav';
import zet from '../assets/image/zet.jpg';
import ca from '../assets/image/ca.jpg';
import bird from '../assets/image/bird.jpg';
import zetletter from '../assets/image/zetletter.jpg';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from "react-router-dom";

const FirstPage = () => {

    const [isPlaying, setIsPlaying] = useState(true);

    const copyToClipBoard = async(sent) => {
        await navigator.clipboard.writeText(sent);
        alert('copied correctly!');
    }

    return (
        <div>
            <div className="bluescreen flex-side">
                <div className="col-6 relative">
                    <img src={zetletter} onClick={() => {copyToClipBoard('Jetpack Dog')}} alt="zetLetter" class='zet-letter'/> 
                    <img className="ca-pic" onClick={() => {copyToClipBoard('CA')}}  src={ca} alt="ca" />
                    <img className="bird-pic" onClick={() => {copyToClipBoard('Bird')}}  src={bird} alt="bird" />
                </div>
                <div className="col-6 relative flex-side">
                    <Link to="https://ai-monitor.vercel.app/"><img className="zet" src={zet} alt='zet picture' /></Link>
                    
                    <div class="player">
                        <div class="controls flex-row">

                            <img src={zet} alt="dog" /> 
                            <div>
                                <h6>IM MICHAEL NOW</h6>
                                <ReactAudioPlayer
                                    src={mp3} // Replace with your audio file path
                                    loop={true}
                                    controls
                                    autoPlay={isPlaying}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}   

export default FirstPage;