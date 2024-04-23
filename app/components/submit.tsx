import React from 'react'
import { useAtomValue, useAtom } from 'jotai'
import { findEmptyStrings, missingRequired } from '../utils/utils'
import { sendEmail } from '../utils/services'
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
  missingFieldsAtom,
  dataAtom
} from '../state/atoms'
import ReactEmail from '../email/react-email'

const Submit = () => {
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
  const [data, setData] = useAtom(dataAtom)
  const [missingFields, setMissingFields] = useAtom(missingFieldsAtom)

  const handleClick = async () => {
    const emptyFields = [...findEmptyStrings(contact), ...findEmptyStrings(pitch), ...findEmptyStrings(appeal), ...findEmptyStrings(conditions)]
    let missing = missingRequired(emptyFields)

    if (emptyFields.length > 0) {
      setMissingFields(missing)
      console.log('emptyfieldsmissing:', missing)
      if (missing.length > 0) return
    }
    if (selectedPositions.length === 0) {
      missing = [...missing, 'positions']
      setMissingFields([...missing, 'positions'])
      console.log('positionsmissing:', missing)
      return
    }
    if (appeal === '') {
      missing = [...missing, 'appeal']
      setMissingFields([...missing, 'appeal'])
      console.log('appealmissing:', missing)
      return
    }
    if (pitch === '') {
      missing = [...missing, 'pitch']
      setMissingFields([...missing, 'pitch'])
      console.log('pitchmissing:', missing)
      return
    }
    if (!available && conditions.length === 0) {
      missing = [...missing, 'conditions']
      setMissingFields([...missing, 'conditions'])
      console.log('availmissing:', missing)
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
    setData(data)
    console.log(data)

    const response = await fetch('http://localhost:3000/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const res = await response.json()
    console.log('res:', res)
  }

  return (
    <div>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded">
        Submit Application
      </button>
      {/* <ReactEmail data={data} /> */}
    </div>
  )
}

export default Submit
