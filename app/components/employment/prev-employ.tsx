import React, { useEffect } from 'react'
import PrevItem from './prev-item'
import { useAtom } from 'jotai'
import { prevEmployAtom } from '../../state/atoms'

const PrevEmploy = () => {
  const [prevEmploy] = useAtom(prevEmployAtom)

  return (
    <div className="w-full">
      <h2 className="font-bold bg-slate-300 pl-2">Previous Employment</h2>
      <div className="flex flex-col gap-2 mt-3">
        {prevEmploy.map((prev, index) => <PrevItem index={index} prev={prev} key={index} />)}
      </div>
    </div>
  )
}

export default PrevEmploy
