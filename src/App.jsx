import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Audio from './components/Audio'

function App() {
  const [count, setCount] = useState(0)

  return (
    < div>
     <Header/>
     <Audio/>
     <Footer/>
    </div >
  )
}

export default App
