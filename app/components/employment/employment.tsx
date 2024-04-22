import React from 'react'
import { useAtom } from 'jotai'
import { employedAtom, currentEmploymentAtom } from '../../state/atoms'
import Square from '../icons/square'
import CheckSq from '../icons/check-sq'

const Employment = () => {
  const [employed, setEmployed] = useAtom(employedAtom)
  const [currentEmployment, setCurrentEmployment] = useAtom(currentEmploymentAtom)
  const options = [{ id: 'yes', label: 'Yes', value: true }, { id: 'no', label: 'No', value: false }]
  const handleCheck = (value: boolean) => setEmployed(value)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setCurrentEmployment(prev => ({ ...prev, [id]: value }))
  }
  return (
    <div className="w-full">
      <h2 className="font-bold bg-slate-300 pl-2">Current Employment</h2>
      <p className="bg-slate-200 pl-2">Are you currently employed?</p>
      <div className="flex gap-2 ml-2 mt-1">
        {options.map(option =>
          <div onClick={() => handleCheck(option.value)} className="flex items-center gap-1 cursor-pointer" key={option.id}>
            <span>
              {option.label}
            </span>
            {employed === option.value ? <CheckSq /> : <Square />}
          </div>
        )}
      </div>
      {employed &&
        <div className="flex gap-2 mt-1">
          <input
            onChange={handleChange}
            className=" border border-dark-tr pl-1 rounded-sm"
            placeholder="Employer?"
            value={currentEmployment.location}
            id="location"
            type="text"
          />
          <input
            onChange={handleChange}
            className=" border border-dark-tr pl-1"
            placeholder="How long?"
            value={currentEmployment.duration}
            id="duration"
            type="text"
          />
        </div>}
    </div>
  )
}

export default Employment
