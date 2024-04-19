import React from 'react'
import { exp } from '@/app/data/experience'
import CheckSq from '../icons/check-sq'
import Square from '../icons/square'
import ExpItem from './exp-item'

const Experience = () => {
  return (
    <div className="mt-2">
      <p className="bg-slate-200 pl-2">Please select any applications you have experience with</p>
      <p className="text-sm bg-slate-200 pl-2 pb-1">(Enter details if indicated)</p>
      <div className="flex flex-col gap-1 mt-1">
        {exp.map((exp, index) => <ExpItem exp={exp} key={exp.id} />)}
      </div>
    </div>
  )
}

export default Experience
