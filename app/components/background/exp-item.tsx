'use client'
import { cn } from '@/app/utils/cn'
import React, { useState, useEffect, useMemo, use } from 'react'
import Square from '../icons/square'
import CheckSq from '../icons/check-sq'
import { useAtom } from 'jotai'
import { apAtom, aiAtom, wdAtom, tdAtom, vpAtom, nsAtom, smAtom, prAtom, saAtom } from '@/app/state/atoms'

export type ExpItemType = {
  id: string
  name: string
  note: string
  isInput: boolean
}

const ExpItem = ({ exp }: { exp: ExpItemType }) => {
  //   const [isChecked, setIsChecked] = useState(false)
  //   const [details, setDetails] = useState('')
  const [expAtom, setExpAtom] = useAtom(
    useMemo(
      () => {
        switch (exp.id) {
          case 'ap':
            return apAtom
          case 'ai':
            return aiAtom
          case 'wd':
            return wdAtom
          case '3d':
            return tdAtom
          case 'vp':
            return vpAtom
          case 'ns':
            return nsAtom
          case 'sm':
            return smAtom
          case 'pr':
            return prAtom
          case 'sa':
            return saAtom
          default:
            return apAtom
        }
      },
      [exp.id]
    )
  )

  type ExpData = {
    id: string
    isSelect: boolean
    name: string
    info: string
  }

  const isChecked = expAtom.isSelect
  const details = expAtom.info

  const handleCheck = () => {
    setExpAtom((prev: ExpData) => {
      return { ...prev, isSelect: !prev.isSelect }
    })
  }

  const handleInput = (value: string) => {
    setExpAtom((prev: ExpData) => {
      return { ...prev, info: value }
    })
  }

  return (
    <div key={exp.id} className={cn('flex flex-col border-slate-600 rounded-sm border w-full', isChecked && 'bg-slate-200')}>
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
            <input
              value={details}
              onChange={e => handleInput(e.target.value)}
              type="text"
              className="border border-slate-500 rounded-sm pl-1 m-1 mt-0 ml-7 w-[calc(100%-34px)]"
            />
          </div>}
      </div>
    </div>
  )
}

export default ExpItem
