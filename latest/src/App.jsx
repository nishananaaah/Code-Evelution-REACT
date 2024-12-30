import React from 'react'

import './App.css'
import Mycomponent from './COMPONENTS/Greet'//you can export/import with any name
import Welcome from './COMPONENTS/Welcome'

function App() {
 


  return (
    <>
    <div>
      <Mycomponent/>
      <Welcome/>
    
    </div>
    </>
  )
}

export default App
