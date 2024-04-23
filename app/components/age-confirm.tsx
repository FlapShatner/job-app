'use client'
import React from 'react'
import CheckSq from './icons/check-sq'
import { useAtom } from 'jotai'
import { ageConfirmAtom } from '../state/atoms'
import Square from './icons/square'

const AgeConfirm = () => {
  const [ageConfirm, setAgeConfirm] = useAtom(ageConfirmAtom)
  const options = [{ id: 'yes', label: 'Yes', value: true }, { id: 'no', label: 'No', value: false }]
  const handleChange = (value: boolean) => setAgeConfirm(value)
  return (
    <div className="flex flex-col gap-1 border bg-slate-100 border-dark-tr py-1 px-2 rounded-sm">
      <span>I qualify for the age requirements of the Missouri Career Center being between the ages of 18-24</span>
      <div className="flex gap-2">
        {options.map(option =>
          <div onClick={() => handleChange(option.value)} className="flex items-center gap-1 cursor-pointer" key={option.id}>
            <span>
              {option.label}
            </span>
            {ageConfirm === option.value ? <CheckSq /> : <Square />}
          </div>
        )}
      </div>
    </div>
  )
}

export default AgeConfirm
