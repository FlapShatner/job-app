'use client'
import React from 'react'
import { cn } from '../utils/cn'
import { positions } from '../data/positions'
import { Position } from '../types/positions'
import Delete from './icons/delete'
import { useAtom } from 'jotai'
import { selectedPositionsAtom, missingFieldsAtom } from '../state/atoms'
import PositionSelect from './position-select'

const Positions = () => {
  const [selectedPositions, setSelectedPositions] = useAtom(selectedPositionsAtom)
  const [missingFields, setMissingFields] = useAtom(missingFieldsAtom)
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
  const isMissing = (field: string) => missingFields.includes(field)
  return (
    <div className={cn('w-full mt-4', isMissing('positions') && 'border-2 border-red-600')}>
      <div className={cn()}>
        <h2 className={cn('font-bold bg-slate-300 pl-2')}>Positions</h2>
        <p className={cn('bg-slate-200 pl-2')}>Please select what type of position you feel you would be best suited for</p>
        <p className={cn('text-sm bg-slate-200 pl-2 pb-1')}>(Choose 1 or more in order of appeal)</p>
      </div>
      <div className="flex gap-4 mt-2">
        <PositionSelect />
        <ul className="flex flex-col gap-1 w-1/2 border border-slate-500">
          <p className="text-sm text-center">Selected Positions</p>
          {selectedPositions.map((position, index) =>
            <li className="flex justify-between gap-1 bg-slate-300 w-full px-1" key={position.id}>
              <span className="text-sm sm:text-base">
                {index + 1}. {position.title}
              </span>
              <Delete onClick={() => handleOptionChange(position)} />
            </li>
          )}
        </ul>
      </div>

      {/* <ul className="grid grid-cols-2 mt-2 gap-1">
        {positions.map(position => {
          const [isSelected] = selectedPositions.filter(selected => selected.id === position.id)
          return (
            <li
              key={position.id}
              className={cn('flex items-center gap-2 border border-slate-500 rounded-sm pl-1 cursor-pointer  hover:bg-slate-200', isSelected && 'opacity-45')}
              onClick={() => handleOptionChange(position)}
            >
              <div>
                {position.title}
              </div>
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default Positions
