import React from 'react'
import { cn } from '../utils/cn'
import { useAtom } from 'jotai'
import { pitchAtom, missingFieldsAtom } from '../state/atoms'

const Pitch = () => {
  const [pitch, setPitch] = useAtom(pitchAtom)
  const [missingFields, setMissingFields] = useAtom(missingFieldsAtom)
  const isMissing = (field: string) => missingFields.includes(field)
  return (
    <div className={cn('w-full', isMissing('pitch') && 'border-2 border-red-600')}>
      <h2 className="font-bold bg-slate-300 pl-2">Why do you feel you would make a good candidate for Ink Monkey LLC?</h2>
      <div className="flex gap-2 mt-2">
        <textarea onChange={e => setPitch(e.target.value)} value={pitch} className="border border-dark-tr pl-1 rounded-sm w-full" id="pitch" />
      </div>
    </div>
  )
}

export default Pitch
