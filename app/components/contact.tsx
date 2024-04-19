'use client'
import React from 'react'
import { useAtom } from 'jotai'
import { contactAtom } from '../state/atoms'

const Contact = () => {
  const [contact, setContact] = useAtom(contactAtom)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setContact(prev => ({ ...prev, [id]: value }))
  }
  return (
    <form className="flex flex-col gap-2 mr-auto mb-2  w-full  ">
      <h2 className="font-bold bg-slate-300 pl-2 ">Personal Information</h2>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            className="w-full border border-dark-tr pl-1"
            value={contact.firstName}
            onChange={handleChange}
            placeholder="First name"
            id="firstName"
            type="text"
          />
          <input
            className="w-full border border-dark-tr pl-1"
            value={contact.lastName}
            onChange={handleChange}
            placeholder="Last name"
            id="LastName"
            type="text"
          />
        </div>
        <div className="flex gap-2">
          <input value={contact.email} onChange={handleChange} className="w-2/3 border border-dark-tr pl-1" placeholder="Email" id="email" type="email" />
          <input value={contact.phone} onChange={handleChange} className="w-1/3 border border-dark-tr pl-1" placeholder="Phone #" id="phone" type="tel" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input value={contact.address} onChange={handleChange} className="w-2/3 border border-dark-tr pl-1" placeholder="Address" id="address" type="text" />
          <input
            value={contact.apt}
            onChange={handleChange}
            className="w-1/3 border border-dark-tr pl-1"
            placeholder="Apt., suite, etc."
            id="apt"
            type="text"
          />
        </div>
        <div className="flex gap-2">
          <input value={contact.city} onChange={handleChange} className="w-2/3 border border-dark-tr pl-1" placeholder="City" id="city" type="text" />
          <input value={contact.state} onChange={handleChange} className="w-1/3 border border-dark-tr pl-1" placeholder="State" id="state" type="text" />
        </div>
        <div className="flex gap-2">
          <input value={contact.zip} onChange={handleChange} className="w-2/3 border border-dark-tr pl-1" placeholder="Postal Code" id="zip" type="text" />
          <input value={contact.country} onChange={handleChange} className="w-1/3 border border-dark-tr pl-1" placeholder="Country" id="country" type="text" />
        </div>
      </div>
    </form>
  )
}

export default Contact
