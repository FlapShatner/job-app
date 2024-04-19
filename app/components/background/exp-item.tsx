'use client'
import { cn } from '@/app/utils/cn'
import React, { useState, useEffect } from 'react'
import Square from '../icons/square'
import CheckSq from '../icons/check-sq'
import { useAtom } from 'jotai'

export type ExpItemType = {
  id: string
  name: string
  note: string
  isInput: boolean
}

const ExpItem = ({ exp }: { exp: ExpItemType }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [details, setDetails] = useState('')

  type ExpData = {
    id: string
    name: string
    info: string
  }

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  const handleInput = (value: string) => {
    setDetails(value)
  }

  return (
    <div key={exp.id} className="flex w-96 flex-col border-slate-600 rounded-sm border">
      <div className={cn('flex flex-col')}>
        <p onClick={handleCheck} className="pr-1 flex gap-1 cursor-pointer">
          {isChecked ? <CheckSq /> : <Square />} {exp.name}
          {!exp.isInput &&
            <span className="text-sm flex items-center">
              {exp.note}
            </span>}
        </p>
        {isChecked &&
          exp.isInput &&
          <div>
            <p className={cn('text-sm', exp.isInput && 'ml-7')}>
              {exp.note}
            </p>
            <input value={details} onChange={e => handleInput(e.target.value)} type="text" className="border border-slate-500 rounded-sm pl-1 m-1 mt-0 ml-7" />
          </div>}
      </div>
    </div>
  )
}

export default ExpItem
