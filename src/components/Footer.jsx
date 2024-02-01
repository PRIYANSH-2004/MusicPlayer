import React from 'react'

function Footer(){
    return (
        

<footer className="  bg-white dark:bg-gray-900 ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-gray-900">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/04/youtube_music_logo-freelogovectors.net_.png" className="h-8 me-3" alt="Music Player Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Music Player</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources used</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Twitter</a>
                      </li>
                  </ul>
              </div>

          </div>
      </div>
      
    </div>
</footer>

    )
} 

export default Footer