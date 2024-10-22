import React, {useState} from "react";
import '../assets/styles/basic.css';
import '../assets/styles/FirstPage.css';
import mp3 from '../assets/mp3/1.wav';
import zet from '../assets/image/zet.jpg';
import zetletter from '../assets/image/zetletter.jpg';
import ReactAudioPlayer from 'react-audio-player';

const FirstPage = () => {

    // const [playState, setPlayState] = useState(false);


    return (
        <div>
            <div className="bluescreen flex-side">
                <div className="col-6 relative">
                    <h3 className="zet-letter" style={{fontFamily : 'MyFont1'}}>
                        Jetpack <br /> &nbsp; Dog
                    </h3>
                    <p>ca</p>
                    <span>Bird</span>
                </div>
                <div className="col-6 relative flex-side">
                    <img className="zet" src={zet} alt='zet picture' />
                    <div class="player">
                        <div class="controls flex-row">

                            <img src={zet} alt="dog" /> 
                            {/* {playState ? <button id="play" onClick={() => {setPlayState(false)}}><i class="fa fa-play"></i></button> : <button id="pause" onClick={() => {setPlayState(true)}}><i class="fa fa-pause"></i></button>} */}
                            <div>
                                <h6>IM MICHAEL NOW</h6>
                                <ReactAudioPlayer
                                    src={mp3} // Replace with your audio file path
                                    controls
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