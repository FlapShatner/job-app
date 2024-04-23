interface ExperienceItem {
 id: string
 isSelect: boolean
 name: string
 info: string
}
interface Contact {
 firstName: string
 lastName: string
 email: string
 phone: string
 address: string
 apt: string
 city: string
 state: string
 zip: string
 country: string
}

interface Position {
 id: string
 title: string
}

interface Experience {
 [key: string]: ExperienceItem
}

export interface Data {
 contact: Contact
 selectedPositions: Position[]
 ageConfirm: boolean
 appeal: string
 employed: boolean
 currentEmployment: {
  location: string
  duration: string
 }
 prevEmploy: {
  id: string
  employer: string
  duration: string
  reason: string
 }[]
 pitch: string
 available: boolean
 conditions: string
 experience: Experience
}
