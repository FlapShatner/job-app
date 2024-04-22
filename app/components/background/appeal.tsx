'use client'
import React from 'react'
import { cn } from '@/app/utils/cn'
import { useAtom } from 'jotai'
import { appealAtom, missingFieldsAtom } from '../../state/atoms'

const Appeal = () => {
  const [missingFields, setMissingFields] = useAtom(missingFieldsAtom)
  const [appeal, setAppeal] = useAtom(appealAtom)
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setAppeal(e.target.value)
  const isMissing = (field: string) => missingFields.includes(field)
  return (
    <div className={cn(isMissing('appeal') && 'border-2 border-red-600')}>
      <p className="bg-slate-200 pl-2">Tell us why a position in the graphics industry appeals to you</p>
      <textarea value={appeal} onChange={handleChange} className="w-full border border-dark-tr pl-1 mt-2" />
    </div>
  )
}

export default Appeal
