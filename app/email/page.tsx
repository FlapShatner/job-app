import { mockData } from '@/app/data/mock'
import { Body, Button, Container, Column, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

export default function Email() {
  const data = mockData
  return (
    <Html lang="en">
      <Head />
      <Tailwind>
        <Body>
          <Container>
            <Section className="mt-4 border border-slate-500">
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
            <Section className="border border-slate-500 mt-2">
              <Text className="pl-2">
                Meets Age Req: {data.ageConfirm ? 'Yes' : 'No'}
              </Text>
            </Section>
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
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
