import React from 'react'
import { useAtomValue, useAtom } from 'jotai'
import { findEmptyStrings, missingRequired } from '../utils/utils'
import { sendData } from '../utils/services'
import { makeFile } from '../server/actions'
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
 dataAtom,
} from '../state/atoms'
import Doc from './doc'

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

 const handleClick = () => {
  const emptyFields = [...findEmptyStrings(contact), ...findEmptyStrings(pitch), ...findEmptyStrings(appeal), ...findEmptyStrings(conditions)]
  let missing = missingRequired(emptyFields)
  let proceed = true
  if (emptyFields.length > 0) {
   setMissingFields(missing)
   proceed = false
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
  if (missingFields.length > 0) {
   return
  }
  const data = {
   ageConfirm,
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
    sa,
   },
   prevEmploy,
   pitch,
   available,
   conditions,
  }
  setData(data)
  //   sendData(data)
  //   makeFile(data)
  console.log(data)
 }

 return (
  <div>
   <Doc data={data} />
   <button
    onClick={handleClick}
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded'>
    Submit Application
   </button>
  </div>
 )
}

export default Submit
