import React from 'react';
import {isPlayingValidate} from '../../actions/AudioPlayer-actions';

const AudioPlayer = () => {
  return (
    <>
    <audio 
      src="" 
      controls
      id="audioPlayer"
    >
      sorry your browser doesn't support audio player

    </audio>
    <ul id="playlist">
      <li className="current-song">
          <a
            href="./music/02 Part of Me (feat. AudioOpera).m4a"
          >
            part of me getter
          </a>
      </li>
      <li className="">
          <a
            href="./music/150Getter-Suh-Dude.mp3" 
          >
            suh dude getter
          </a>
      </li>
    </ul>
    </>
  );
};

export default AudioPlayer;