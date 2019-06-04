import React, { useEffect, useState } from "react";
import Slider from "react-input-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import formattedTime from "../../utils/formattedTime";
import "./css/index.scss";

const colorStyle = { color: "#fff" };

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [volume, setVolumeAudio] = useState(100);
  const [time, setTimeAudio] = useState(0);

  const setTime = x => {
    setTimeAudio(x);
    audio.currentTime = x;
  };
  const setVolume = volume => {
    setVolumeAudio(volume);
    audio.volume = volume / 100;
  };

  let interval = null;
  useEffect(() => {
    if (playing) {
      audio.play();
      interval = setInterval(() => {
        setTimeAudio(audio.currentTime);
      }, 500);
    } else {
      audio.pause();
      clearInterval(interval);
    }
    return () => {
      audio.pause();
      return clearInterval(interval);
    };
  }, [playing]);

  return [setPlaying, volume, setVolume, time, setTime];
};

const Player = ({
  audio,
  cover,
  name,
  artist,
  playing,
  seconds,
  toogleSong
}) => {
  const [setPlaying, volume, setVolume, time, setTime] = useAudio(audio.url);
  useEffect(() => {
    setPlaying(playing);
  }, [playing]);

  useEffect(() => {
    setTime(0);
    setPlaying(playing);
  }, [audio]);

  return (
    <React.Fragment>
      <div className="musicPlayer__disc">
        <div className="musicPlayer__disc-img">
          <img src={cover} alt={name} />
        </div>
        <div className="musicPlayer__disc-data">
          <div className="musicPlayer__disc-name">{name}</div>
          <div className="musicPlayer__disc-artist">{artist}</div>
        </div>
      </div>
      <div className="musicPlayer__player">
        <div>
          <button onClick={() => toogleSong(!playing)}>
            {playing ? (
              <FontAwesomeIcon icon={faPause} style={colorStyle} />
            ) : (
              <FontAwesomeIcon icon={faPlay} style={colorStyle} />
            )}
          </button>
        </div>
        <div className="musicPlayer__player--slide">
          <Slider
            axis="x"
            x={(time * 100) / seconds}
            onChange={({ x }) => setTime((x * seconds) / 100)}
          />
          <span className="musicPlayer__player--time">{`${formattedTime(
            time
          )} / ${formattedTime(seconds)}`}</span>
        </div>
      </div>
      <div className="musicPlayer__volume">
        <span className="musicPlayer__volume--icon">
          <FontAwesomeIcon icon={faVolumeUp} style={colorStyle} />
        </span>
        <Slider axis="x" x={volume} onChange={({ x }) => setVolume(x)} />
      </div>
    </React.Fragment>
  );
};
const MusicPlayer = props => {
  return (
    <div className="musicPlayer">{props.audio && <Player {...props} />}</div>
  );
};

export default MusicPlayer;
