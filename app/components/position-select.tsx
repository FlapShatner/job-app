import React from 'react'
import { cn } from '../utils/cn'
import { positions } from '../data/positions'
import { Position } from '../types/positions'

import { useAtom } from 'jotai'
import { selectedPositionsAtom, missingFieldsAtom } from '../state/atoms'
const PositionSelect = () => {
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
  const [selectedPositions, setSelectedPositions] = useAtom(selectedPositionsAtom)
  const [missingFields, setMissingFields] = useAtom(missingFieldsAtom)
  return (
    <div className="w-1/2">
      {positions.map(position => {
        const [isSelected] = selectedPositions.filter(selected => selected.id === position.id)
        return (
          <li
            key={position.id}
            className={cn('flex items-center gap-2 border border-slate-500 rounded-sm pl-1 cursor-pointer  hover:bg-slate-200', isSelected && 'opacity-45')}
            onClick={() => handleOptionChange(position)}
          >
            <div className="text-sm sm:text-base">
              {position.title}
            </div>
          </li>
        )
      })}
    </div>
  )
}

export default PositionSelect
