import React from 'react'
import {MoonLoader} from 'react-spinners' 

function Loader() {
    const st = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh"
    }
  return (
    <div style={st}>
    <MoonLoader color="#d49644" />
    </div>
  )
}

export default Loader
