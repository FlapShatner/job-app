import React, { useState } from 'react'
import { cn } from '../utils/cn'
import { useAtomValue, useAtom } from 'jotai'
import { findEmptyStrings, missingRequired } from '../utils/utils'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import {
  ageConfirmAtom,
  contactAtom,
  selectedPositionsAtom,
  appealAtom,
  employedAtom,
  currentEmploymentAtom,
  apAtom,
  aiAtom,
  wdAtom,
  tdAtom,
  vpAtom,
  nsAtom,
  smAtom,
  prAtom,
  saAtom,
  prevEmployAtom,
  pitchAtom,
  availableAtom,
  conditionsAtom,
  missingFieldsAtom
} from '../state/atoms'
import Loading from './loading'

const Submit = () => {
  const [isLoading, setIsLoading] = useState(false)
  const ageConfirm = useAtomValue(ageConfirmAtom)
  const contact = useAtomValue(contactAtom)
  const selectedPositions = useAtomValue(selectedPositionsAtom)
  const appeal = useAtomValue(appealAtom)
  const employed = useAtomValue(employedAtom)
  const currentEmployment = useAtomValue(currentEmploymentAtom)
  const ap = useAtomValue(apAtom)
  const ai = useAtomValue(aiAtom)
  const wd = useAtomValue(wdAtom)
  const td = useAtomValue(tdAtom)
  const vp = useAtomValue(vpAtom)
  const ns = useAtomValue(nsAtom)
  const sm = useAtomValue(smAtom)
  const pr = useAtomValue(prAtom)
  const sa = useAtomValue(saAtom)
  const prevEmploy = useAtomValue(prevEmployAtom)
  const pitch = useAtomValue(pitchAtom)
  const available = useAtomValue(availableAtom)
  const conditions = useAtomValue(conditionsAtom)
  const [missingFields, setMissingFields] = useAtom(missingFieldsAtom)

  const router = useRouter()

  const notify = () => toast('Please fill out all required fields', { type: 'error' })

  const handleClick = async () => {
    const emptyFields = [...findEmptyStrings(contact), ...findEmptyStrings(pitch), ...findEmptyStrings(appeal), ...findEmptyStrings(conditions)]
    let missing = missingRequired(emptyFields)
    let proceed = true
    if (emptyFields.length > 0) {
      setMissingFields(missing)
      if (missing.length > 0) {
        proceed = false
      }
    }
    if (selectedPositions.length === 0) {
      missing = [...missing, 'positions']
      setMissingFields([...missing, 'positions'])

      proceed = false
    }
    if (appeal === '') {
      missing = [...missing, 'appeal']
      setMissingFields([...missing, 'appeal'])

      proceed = false
    }
    if (pitch === '') {
      missing = [...missing, 'pitch']
      setMissingFields([...missing, 'pitch'])

      proceed = false
    }
    if (!available && conditions.length === 0) {
      missing = [...missing, 'conditions']
      setMissingFields([...missing, 'conditions'])

      proceed = false
    }
    if (!proceed) {
      notify()
      return
    }

    const data = {
      ageConfirm: ageConfirm,
      contact,
      selectedPositions,
      appeal,
      employed,
      currentEmployment,
      experience: {
        ap,
        ai,
        wd,
        td,
        vp,
        ns,
        sm,
        pr,
        sa
      },
      prevEmploy,
      pitch,
      available,
      conditions
    }
    setIsLoading(true)
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const res = await response.json()
    console.log('res:', res)
    if (res.id) {
      setIsLoading(false)
      toast('Application submitted successfully', { type: 'success' })
      router.push('/complete')
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={cn('flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold h-12 w-[300px] rounded')}
      >
        {isLoading ? <Loading /> : 'Submit Application'}
      </button>

      <ToastContainer />
    </div>
  )
}

export default Submit
