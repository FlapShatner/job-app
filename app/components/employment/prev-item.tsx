import React from 'react'
import { useAtom } from 'jotai'
import { prevEmployAtom } from '../../state/atoms'

type PrevItemProps = {
  index: number
  prev: {
    id: string
    employer: string
    duration: string
    reason: string
  }
}

const PrevItem = ({ prev, index }: PrevItemProps) => {
  const [prevEmploy, setPrevEmploy] = useAtom(prevEmployAtom)
  const heading = `Previous Employment ${index + 1}`
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setPrevEmploy(prev => {
      const newPrev = [...prev]
      newPrev[index] = { ...newPrev[index], [id]: value }
      return newPrev
    })
  }
  return (
    <div className="bg-slate-200 p-2">
      <p>
        {heading}
      </p>
      <div className="flex gap-2 mt-1">
        <div>
          <label className="text-sm" htmlFor="employer">
            Employer name
          </label>
          <input onChange={handleChange} value={prev.employer} id="employer" className=" border border-dark-tr pl-1 rounded-sm w-full" type="text" />
        </div>
        <div>
          <label className="text-sm" htmlFor="duration">
            How long
          </label>
          <input onChange={handleChange} value={prev.duration} id="duration" className=" border border-dark-tr pl-1 rounded-sm w-full" type="text" />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="reason">
          Reason for leaving
        </label>
        <input onChange={handleChange} value={prev.reason} id="reason" className=" border border-dark-tr pl-1 rounded-sm  w-full" type="text" />
      </div>
    </div>
  )
}

export default PrevItem
