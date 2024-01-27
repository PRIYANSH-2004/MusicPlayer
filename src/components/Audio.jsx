import React from 'react'

const Audio =()=>{
    return(
        <div className="">

        <div class='flex items-center justify-center min-h-screen'>
            <div class='w-full max-w-lg  mx-auto bg-gray-500 rounded-lg shadow-xl'>
                <div class='max-w-md mx-auto space-y-6 my-20 px-20'>
                    <div class="w-full h-full flex flex-col p-4 bg-black/40 rounded-lg">
                        <img src="https://i.scdn.co/image/ab67616d0000b2739e3f258987afca1e41440fb5"/>
                        <h1 class="font-semibold text-lg text-white mt-3">Alarm</h1>
                        <p class="font-semibold text-sm text-gray-200">Google</p>
                        {/* <img class="h-5 w-16 mt-6 filter opacity-60 brightness grayscale invert" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"/> */}
                    </div>
                <audio controls >
                    {/* <source src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg" type="audio/mpeg" /> */}
                    <source src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg" type="audio/ogg" />
                </audio>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Audio;