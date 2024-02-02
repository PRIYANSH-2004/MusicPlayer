import React, {useEffect, useRef, useState} from 'react'
// import ReactHowler from 'react-howler'

const Audio =()=>{
    const audioref = useRef(null);

    const play = ()=>{
        audioref.current.play();
        console.log(audioref.current);
    }
    const pause = ()=>{
        audioref.current.pause();
    }
    const volUp= ()=>{
        audioref.current.volume +=0.1;
    }
    const volDown= ()=>{
        audioref.current.volume -=0.1;
    }

    const [vol,setVol ]= useState(30)
    // as vol changes we set it
    const volChange = useEffect(()=>{
            if(audioref)
            audioref.current.volume=vol/100
            

    },[vol]);

    const [check , setCheck] = useState(false)
    // const [remainingTime , setRemainingTime] = useState(audioref.current.duration)

    // let check = true
    // for play pause
    
    const PP = useEffect(()=>{
        console.log(check);
        console.log(audioref.current.currentTime);
        if(check)
        audioref.current.play();
        else
        audioref.current.pause();   

        if((audioref.current.duration -audioref.current.currentTime )==0){
            console.log("ended");
            setCheck(true)
        }

    } ,[check])


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


            {/* PLAY */}
            <button onClick={(e)=>{check=check ? setCheck(false):setCheck(true); }} type="button" className="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 21 21">
                <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m4.494 5.535l12-.038a2 2 0 0 1 2 1.845l.006.155V13.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V7.535a2 2 0 0 1 1.994-2"/>
                    <path fill="currentColor" d="m9.5 12.5l3-2l-3-2z"/>
                    </g></svg>
<span className="sr-only">play button</span>
</button>



            {/* PLAY */}
            {/* <button onClick={play} type="button" className="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 21 21">
                            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m4.494 5.535l12-.038a2 2 0 0 1 2 1.845l.006.155V13.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V7.535a2 2 0 0 1 1.994-2"/>
                                <path fill="currentColor" d="m9.5 12.5l3-2l-3-2z"/>
                                </g></svg>
            <span className="sr-only">play button</span>
            </button> */}



            {/* pause*/}
            {/* <button onClick={pause} type="button" className="text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 21 21">
                            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m4.494 5.535l12-.038a2 2 0 0 1 2 1.845l.006.155V13.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V7.535a2 2 0 0 1 1.994-2"/>
                                <path fill="currentColor" d="m9.5 12.5l3-2l-3-2z"/>
                                </g></svg>
            <span className="sr-only">pause button</span>
            </button> */}
   
            {/* <button onClick={volUp}>VOL up</button>
            <button onClick={volDown}>VOL down</button> */}
            <input type="range" min="0" max="100" step="3" onChange={(e)=>{setVol(e.target.value) }}/> 
            {/* since we have to pass value in above, so we used function inside onchnage */}
                </div>
            </div>
        </div>

        
        </div>
    )
}

export default Audio;