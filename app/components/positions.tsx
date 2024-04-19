'use client'
import React from 'react'
import { positions } from '../data/positions'
import { Position } from '../types/positions'
import Delete from './icons/delete'
import { useAtom } from 'jotai'
import { selectedPositionsAtom } from '../state/atoms'

const Positions = () => {
  const [selectedPositions, setSelectedPositions] = useAtom(selectedPositionsAtom)
  const handleOptionChange = (option: Position) => {
    setSelectedPositions(prevSelected => {
      const currentIndex = prevSelected.findIndex(position => position.id === option.id)
      if (currentIndex === -1) {
        return [...prevSelected, { id: option.id, title: option.title }]
      } else {
        return prevSelected.filter(position => position.id !== option.id)
      }
    })
  }
  return (
    <div className="w-full mt-4">
      <div className="">
        <h2 className="font-bold bg-slate-300 pl-2">Positions</h2>
        <p className="bg-slate-200 pl-2">Please select what type of position you feel you would be best suited for</p>
        <p className="text-sm bg-slate-200 pl-2 pb-1">(Choose 1 or more in order of appeal)</p>
      </div>
      <ul className="flex flex-col gap-1 mt-1">
        {selectedPositions.map((position, index) =>
          <li className="flex gap-1 bg-slate-200 w-max px-1" key={position.id}>
            {index + 1}. {position.title}
            <Delete onClick={() => handleOptionChange(position)} />
          </li>
        )}
      </ul>
      <ul className="grid grid-cols-2 mt-2 gap-1">
        {positions.map(position =>
          <li
            key={position.id}
            className="flex items-center gap-2 border border-slate-500 rounded-sm pl-1 cursor-pointer  hover:bg-slate-200"
            onClick={() => handleOptionChange(position)}
          >
            <div>
              {position.title}
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Positions
