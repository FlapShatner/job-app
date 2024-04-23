import { mockData } from '@/app/data/mock'
import { Body, Button, Container, Column, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
import { Data } from '../types/exp'

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
//
export default function ReactEmail({ data }: { data: Data }) {
  //   const data = mockData
  const experience = filterSelected(data.experience)
  return (
    <Html lang="en">
      <Head />
      <Tailwind>
        <Body>
          <Section className="mt-4 border mr-auto border-slate-500">
            <Text className="pl-2">
              Name: {data.contact.firstName} {data.contact.lastName}
            </Text>
            <Text className="pl-2">
              Email: {data.contact.email}
            </Text>
            <Text className="pl-2">
              Phone: {data.contact.phone}
            </Text>
            <Text className="pl-2">
              Address: {data.contact.address}
            </Text>
            <Text className="pl-2">
              Apt: {data.contact.apt}
            </Text>
            <Text className="pl-2">
              City: {data.contact.city}
            </Text>
            <Text className="pl-2">
              State: {data.contact.state}
            </Text>
            <Text className="pl-2">
              Zip: {data.contact.zip}
            </Text>
            <Text className="pl-2">
              Country: {data.contact.country}
            </Text>
          </Section>
          <Hr />
          <Section className="border border-slate-500 mt-2">
            <Text className="pl-2">
              Meets Age Req: {data.ageConfirm ? 'Yes' : 'No'}
            </Text>
          </Section>
          <Hr />
          <Section className="border border-slate-500 mt-2">
            <Text className="pl-2">
              Preferred Positions:
              {data.selectedPositions.map((position, index) =>
                <p key={position.id}>
                  <span>{index + 1}.</span> {position.title}
                </p>
              )}
            </Text>
          </Section>
          <Hr />
          <Section className="border border-slate-500 mt-2">
            <Text className="pl-2">
              <Text>Why does the industry appeal to you?</Text>
              <Text>
                {data.appeal}{' '}
              </Text>
            </Text>
          </Section>
          <Hr />
          <Section className="border border-slate-500 mt-2">
            <Text className="pl-2">Experience:</Text>
            {Object.values(experience).map((item, index) =>
              <div key={item.id}>
                <p>
                  <span>{index + 1}.</span> {item.name}
                </p>
                {item.info &&
                  <div className="pl-2">
                    <p className="text-sm">Experience with:</p>
                    <p>
                      {item.info}
                    </p>
                  </div>}
              </div>
            )}
          </Section>
          <Hr />
          <Section className="border border-slate-500 mt-2">
            <p className="pl-2">
              Currently Employed: {data.employed ? 'Yes' : 'No'}
            </p>
            <div>
              {data.employed &&
                <div className="pl-2 mt-2">
                  <Text className="text-sm">
                    Employer: {data.currentEmployment.location}
                  </Text>
                  <Text className="text-sm">
                    Duration: {data.currentEmployment.duration}
                  </Text>
                </div>}
            </div>
          </Section>
          <Hr />
          <Section className="border border-slate-500 mt-2">
            <Text className="pl-2">Previous Employment:</Text>
            <div className="pl-2">
              {data.prevEmploy.map((employment, index) =>
                <div key={employment.id}>
                  <Text className="text-sm">
                    Employer{' '}
                    <span>
                      {index + 1}: {employment.employer ? employment.employer : 'N/A'}
                    </span>
                  </Text>
                  {employment.employer &&
                    <div>
                      <Text className="text-sm">
                        Duration: {employment.duration}
                      </Text>
                      <Text className="text-sm">
                        Reason for leaving: {employment.reason}
                      </Text>
                    </div>}
                  <Hr />
                </div>
              )}
            </div>
          </Section>
          <Hr />
          <Section className="border border-slate-500 mt-2">
            <Text className="pl-2">Why would you be a good fit:</Text>
            <Text className="pl-2">
              {data.pitch}
            </Text>
          </Section>
          <Hr />
          <Section className="border border-slate-500 mt-2">
            <Text className="pl-2">
              Limitations on hours: {!data.available ? 'Yes' : 'None'}
            </Text>
            {!data.available &&
              <Text className="pl-2">
                Conditions: {data.conditions}
              </Text>}
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
