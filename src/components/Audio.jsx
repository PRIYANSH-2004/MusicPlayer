import React, {useEffect, useRef, useState} from 'react'

const Audio =()=>{
    const audioref = useRef(null);



// changing volume
    const changeVol = (val)=>{
        audioref.current.volume=val/100
    }

    const [check , setCheck] = useState(true)
    // const [remainingTime , setRemainingTime] = useState(audioref.current.duration)

    // let check = true
    // for play pause



    const playPause = ()=>{
        setCheck(state=> !state)
        // console.log(check);
        if(check){
            console.log("play");
            audioref.current.play();
        }
        else{
            console.log("pause");
            audioref.current.pause();
        }
        // how to play when song ends 
    }


    return(
        <div className="">

        <div className='flex items-center justify-center min-h-screen'>
            <div className='w-full max-w-lg  mx-auto bg-gray-500 rounded-lg shadow-xl'>
                <div className='max-w-md mx-auto space-y-6 my-20 px-20'>
                    <div className="w-full h-full flex flex-col p-4 bg-black/40 rounded-lg">
                        <img src="https://i.scdn.co/image/ab67616d0000b2739e3f258987afca1e41440fb5"/>
                        <h1 className="font-semibold text-lg text-white mt-3">Alarm</h1>
                        <p className="font-semibold text-sm text-gray-200">Google</p>
                        {/* <img className="h-5 w-16 mt-6 filter opacity-60 brightness grayscale invert" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"/> */}
                    </div>
                    <audio autoPlay ref={audioref}  >
                        <source className='bg-red-500' src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg" type="audio/ogg" />

                    </audio>


            {/* PLAY / PAUSE*/}
            <button onClick={playPause} type="button" className="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 21 21">
                <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m4.494 5.535l12-.038a2 2 0 0 1 2 1.845l.006.155V13.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V7.535a2 2 0 0 1 1.994-2"/>
                    <path fill="currentColor" d="m9.5 12.5l3-2l-3-2z"/>
                    </g></svg>
<span className="sr-only">play button</span>
</button>



            <input type="range" min="0" max="100" step="3" onChange={(e)=>{changeVol(e.target.value) }}/> 
            {/* since we have to pass value in above, so we used function inside onchnage */}
                </div>
            </div>
        </div>

        
        </div>
    )
}

export default Audio;