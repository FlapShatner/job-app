import React, { useState } from 'react'
import { cn } from '../utils/cn'
import { useAtom } from 'jotai'
import { availableAtom, conditionsAtom, missingFieldsAtom } from '../state/atoms'
import CheckSq from './icons/check-sq'
import Square from './icons/square'

const Conditions = () => {
  const [available, setAvailable] = useAtom(availableAtom)
  const [conditions, setConditions] = useAtom(conditionsAtom)
  const [missingFields, setMissingFields] = useAtom(missingFieldsAtom)
  const options = [{ id: 'yes', label: 'Yes', value: true }, { id: 'no', label: 'No', value: false }]

  const isMissing = (field: string) => missingFields.includes(field)

  return (
    <div className=" w-full">
      <h2 className="font-bold bg-slate-300 pl-2">Availability</h2>
      <p className="bg-slate-200 pl-2">
        Do you have any special conditions that would <span className="font-bold">limit</span> you from these work hours:
      </p>
      <p className="bg-slate-200 pl-2"> Monday - Thursday 9:00 to 5:00 (1 Hour Lunch Break)</p>
      <p className="bg-slate-200 pl-2">Friday from 9:00am to 3:00pm (1 Hour Lunch Break)</p>

      <div className="flex gap-2 mt-2">
        {options.map(option =>
          <div onClick={() => setAvailable(!available)} className="flex items-center gap-1 cursor-pointer" key={option.id}>
            <span>
              {option.label}
            </span>
            {available === !option.value ? <CheckSq /> : <Square />}
          </div>
        )}
      </div>
      {!available &&
        <div className={cn(isMissing('conditions') && 'border-2 border-red-600')}>
          <p className="bg-slate-200 pl-2 my-2">Please explain:</p>
          <textarea value={conditions} onChange={e => setConditions(e.target.value)} className="border border-dark-tr pl-1 rounded-sm w-full" id="conditions" />
        </div>}
    </div>
  )
}

export default Conditions
