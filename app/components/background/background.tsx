import React from 'react'
import Appeal from './appeal'
import Experience from './experience'

const Background = () => {
  return (
    <div className="w-full mt-4">
      <h2 className="font-bold bg-slate-300 pl-2">Background</h2>
      <Appeal />
      <Experience />
    </div>
  )
}

export default Background
