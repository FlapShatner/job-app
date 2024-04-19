'use client'
import React from 'react'
import { useAtom } from 'jotai'
import { appealAtom } from '../../state/atoms'

const Appeal = () => {
  const [appeal, setAppeal] = useAtom(appealAtom)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setAppeal(e.target.value)

  return (
    <div className="">
      <p className="bg-slate-200 pl-2">Tell us why a position in the graphics industry appeals to you</p>
      <textarea onChange={handleChange} className="w-full border border-dark-tr pl-1 mt-2" />
    </div>
  )
}

export default Appeal
