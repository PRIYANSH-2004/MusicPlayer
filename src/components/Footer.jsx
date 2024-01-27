import React from 'react'

function Footer(){
    return (
        

<footer class=" relative inset-x-0 bottom-0 h-16 bg-white dark:bg-gray-900 ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-gray-900">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                  <img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/04/youtube_music_logo-freelogovectors.net_.png" class="h-8 me-3" alt="Music Player Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Music Player</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources used</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Twitter</a>
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