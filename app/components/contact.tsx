'use client'
import React, { useEffect } from 'react'
import { cn } from '../utils/cn'
import { useAtom } from 'jotai'
import { contactAtom, missingFieldsAtom } from '../state/atoms'

const Contact = () => {
  const [contact, setContact] = useAtom(contactAtom)
  const [missingFields, setMissingFields] = useAtom(missingFieldsAtom)

  const isMissing = (field: string) => missingFields.includes(field)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setContact(prev => ({ ...prev, [id]: value }))
  }
  return (
    <form className="flex flex-col gap-2 mr-auto mb-2  w-full  ">
      <h2 className="font-bold bg-slate-300 pl-2 ">Personal Information</h2>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="w-full">
            <label htmlFor="firstName" className={cn('text-sm', isMissing('firstName') && 'text-red-600')}>
              First Name
            </label>
            <input
              className={cn('w-full border border-dark-tr pl-1', isMissing('firstName') && 'border-red-600')}
              value={contact.firstName}
              onChange={handleChange}
              id="firstName"
              type="text"
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName" className={cn('text-sm', isMissing('lastName') && 'text-red-600')}>
              Last Name
            </label>
            <input
              className={cn('w-full border border-dark-tr pl-1', isMissing('lastName') && 'border-red-600')}
              value={contact.lastName}
              onChange={handleChange}
              id="lastName"
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <div className="flex flex-col w-2/3">
            <label htmlFor="email" className={cn('text-sm', isMissing('email') && 'text-red-600')}>
              Email
            </label>
            <input
              value={contact.email}
              onChange={handleChange}
              className={cn(' border border-dark-tr pl-1', isMissing('email') && 'border-red-600')}
              id="email"
              type="email"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="phone" className={cn('text-sm', isMissing('phone') && 'text-red-600')}>
              Phone #
            </label>
            <input
              value={contact.phone}
              onChange={handleChange}
              className={cn('border border-dark-tr pl-1', isMissing('phone') && 'border-red-600')}
              id="phone"
              type="tel"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="flex flex-col w-2/3">
            <label htmlFor="address" className={cn('text-sm', isMissing('address') && 'text-red-600')}>
              Address
            </label>
            <input
              value={contact.address}
              onChange={handleChange}
              className={cn('border border-dark-tr pl-1', isMissing('address') && 'border-red-600')}
              id="address"
              type="text"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="apt" className="text-sm">
              Apt., suite, etc.
            </label>
            <input value={contact.apt} onChange={handleChange} className="border border-dark-tr pl-1" id="apt" type="text" />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-2/3 flex flex-col">
            <label htmlFor="city" className={cn('text-sm', isMissing('city') && 'text-red-600')}>
              City
            </label>
            <input
              value={contact.city}
              onChange={handleChange}
              className={cn('border border-dark-tr pl-1', isMissing('city') && 'border-red-600')}
              id="city"
              type="text"
            />
          </div>
          <div className="w-1/3 flex flex-col">
            <label htmlFor="state" className={cn('text-sm', isMissing('state') && 'text-red-600')}>
              State
            </label>
            <input
              value={contact.state}
              onChange={handleChange}
              className={cn('border border-dark-tr pl-1', isMissing('state') && 'border-red-600')}
              id="state"
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col w-2/3">
            <label htmlFor="zip" className={cn('text-sm', isMissing('zip') && 'text-red-600')}>
              Postal Code
            </label>
            <input
              value={contact.zip}
              onChange={handleChange}
              className={cn('border border-dark-tr pl-1', isMissing('zip') && 'border-red-600')}
              id="zip"
              type="text"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label htmlFor="country" className={cn('text-sm', isMissing('country') && 'text-red-600')}>
              Country
            </label>
            <input
              value={contact.country}
              onChange={handleChange}
              className={cn('border border-dark-tr pl-1', isMissing('country') && 'border-red-600')}
              id="country"
              type="text"
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default Contact
