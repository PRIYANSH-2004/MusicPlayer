import React, { useEffect, useRef, useState } from "react";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import next from "../assets/next.svg";
import prev from "../assets/prev.svg";

const Audio = () => {
    const audioref = useRef(null);

  // changing volume
  const changeVol = (val) => {
    audioref.current.volume = val / 100;
  };

  const [check, setCheck] = useState(true);
//   const [ppButton, setPPbutton] = useState(true);
//   const songDuration = audioref.current.duration
//  console.log(audioref.current.duration);

  // let check = true
  // for play pause

  const playPause = () => {
    setCheck((state) => !state);
    setPPbutton((state) => !state);
    // console.log(audioref.current.duration);
    if (check) {
      audioref.current.play();
    } else {
      audioref.current.pause();
    }
    // how to play when song ends
  };

  return (
    <div className="">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-lg  mx-auto bg-gray-500 rounded-lg shadow-xl">
          <div className="max-w-md mx-auto space-y-6 my-20 px-20">
            <div className="w-full h-full flex flex-col p-4 bg-black/40 rounded-lg">
              <img src="https://i.scdn.co/image/ab67616d0000b2739e3f258987afca1e41440fb5" />
              <h1 className="font-semibold text-lg text-white mt-3">Alarm</h1>
              <p className="font-semibold text-sm text-gray-200">Google</p>
              {/* <img className="h-5 w-16 mt-6 filter opacity-60 brightness grayscale invert" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"/> */}
            </div>
            <audio autoPlay ref={audioref}>
              <source
                className="bg-red-500"
                src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
                type="audio/ogg"
              />
            </audio>
            <div className="flex justify-end">
              {/* prev song */}
              <button
                className=" hover:bg-gray-600
            rounded-full text-sm p-2.5
              me-2 dark:bg-gray-500
               dark:hover:bg-gray-450 "
              >
                <img src={prev} />
              </button>
              {/* PLAY / PAUSE*/}
              <button
                onClick={playPause}
                type="button"
                className=" hover:bg-gray-600
                rounded-full text-sm p-2.5
                  me-2 dark:bg-gray-500
                   dark:hover:bg-gray-450 "
              >
                {/* {playPause} */}
                <img src={play} alt="palyPauseButton" />
                {/* <img src={pause} alt="palyPauseButton" /> */}
                <span className="sr-only">play button</span>
              </button>
              {/* next song */}
              <button
                className=" hover:bg-gray-600
            rounded-full text-sm p-2.5
              me-2 dark:bg-gray-500
               dark:hover:bg-gray-450 "
              >
                <img src={next} />
              </button>
              {/* volume control */}
              <input
                type="range"
                min="0"
                max="100"
                step="3"
                onChange={(e) => {
                  changeVol(e.target.value);
                }}
              />
            </div>
              <h2>time: </h2>
            {/* since we have to pass value in above, so we used function inside onchnage */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audio;
