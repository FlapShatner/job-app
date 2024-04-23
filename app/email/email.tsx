'use client'
import React from 'react'
import { useAtomValue, useAtom } from 'jotai'
import { Data } from '../types/exp'
import { dataAtom } from '../state/atoms'
import { mockData } from '../data/mock'

interface ExperienceItem {
  id: string
  isSelect: boolean
  name: string
  info: string
}

interface Experience {
  [key: string]: ExperienceItem
}

function filterSelected(experience: Experience): Experience {
  const selected: Experience = {}
  for (const key in experience) {
    if (experience[key].isSelect) {
      selected[key] = experience[key]
    }
  }
  return selected
}

const Email: React.FC<Readonly<{ data: Data }>> = ({ data }) => {
  //   const data = useAtomValue(dataAtom)
  // const data = mockData
  const experience = filterSelected(data.experience)
  console.log(data)
  return (
    <div className="p-8 max-w-xl flex flex-col gap-4">
      <div className="bg-slate-200 flex flex-col gap-2">
        <h2 className="text-lg bg-slate-300">Contact Information:</h2>
        <div className="flex flex-col">
          <p className="text-sm">Applicant:</p>
          <div className="flex gap-2 ">
            <p className="">
              {data.contact.firstName}
            </p>
            <p>
              {data.contact.lastName}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <p className="text-sm">Email:</p>
            <p>
              {data.contact.email}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Phone:</p>
            <p>
              {data.contact.phone}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">Address:</p>
          <p>
            {data.contact.address}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">apt, suite, etc.: </p>
          <p>
            {data.contact.apt}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">City: </p>
          <p>
            {data.contact.city}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">State:</p>
          <p>
            {data.contact.state}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">Zip:</p>
          <p>
            {data.contact.zip}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">Country: </p>
          <p>
            {data.contact.country}
          </p>
        </div>
      </div>
      <div className="bg-slate-200">
        <h2 className="text-lg bg-slate-300">Meets age req.:</h2>
        <p>
          {data.ageConfirm ? 'Yes' : 'No'}
        </p>
      </div>
      <div className="bg-slate-200">
        <h2 className="text-lg bg-slate-300">Preferred Positions:</h2>
        {data.selectedPositions.map((position, index) =>
          <p key={position.id}>
            <span>{index + 1}.</span> {position.title}
          </p>
        )}
      </div>
      <div className="bg-slate-200">
        <h2 className="text-lg bg-slate-300">Why does the graphics industry appeal to you:</h2>
        <p>
          {data.appeal}
        </p>
      </div>
      <div className="bg-slate-200">
        <h2 className="text-lg bg-slate-300">Experience:</h2>
        <div className="flex flex-col gap-2">
          {Object.values(experience).map((item, index) =>
            <div key={item.id}>
              <h3>
                <span>{index + 1}.</span> {item.name}
              </h3>
              {item.info &&
                <div>
                  <p className="text-sm">Experience with:</p>
                  <p>
                    {item.info}
                  </p>
                </div>}
            </div>
          )}
        </div>
      </div>
      <div className="bg-slate-200">
        <h2 className="text-lg bg-slate-300">Currently Employed:</h2>
        <p>
          {data.employed ? 'Yes' : 'No'}
        </p>
        <div>
          {data.employed &&
            <div className="mt-2 flex flex-col gap-2">
              <div>
                <p className="text-sm">Employer:</p>
                <p>
                  {data.currentEmployment.location}
                </p>
              </div>
              <div>
                <p className="text-sm">Duration:</p>
                <p>
                  {data.currentEmployment.duration}
                </p>
              </div>
            </div>}
        </div>
      </div>
      <div className="bg-slate-200">
        <h2 className="bg-slate-300 text-lg">Previous Employment:</h2>
        <div className="flex flex-col gap-3">
          {data.prevEmploy.map((employment, index) =>
            <div key={employment.id}>
              <div>
                <p className="text-sm">
                  Employer <span>{index + 1}:</span>{' '}
                </p>
                <p>
                  {employment.employer ? employment.employer : 'N/A'}
                </p>
              </div>
              {employment.employer &&
                <div className="flex flex-col">
                  <div>
                    <p className="text-sm">Duration:</p>
                    <p>
                      {employment.duration}
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-sm">Reason for leaving:</p>
                    <p>
                      {employment.reason}
                    </p>
                  </div>
                </div>}
            </div>
          )}
        </div>
      </div>
      <div className="bg-slate-200">
        <h2 className="bg-slate-300 text-lg">Why do you feel you would make a good candidate?</h2>
        <p>
          {data.pitch}
        </p>
      </div>
      <div className="bg-slate-200">
        <h2 className="bg-slate-300">Any hours limitations?:</h2>
        <p>
          {!data.available ? 'Yes' : 'No'}
        </p>
        {!data.available &&
          <div>
            <h3 className="bg-slate-300">Conditions:</h3>
            <p>
              {data.conditions}
            </p>
          </div>}
      </div>
    </div>
  )
}

export default Email
