import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { Data } from '../types/exp'
import { mockData } from '../data/mock'

// Create styles
const styles = StyleSheet.create({
 page: {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  backgroundColor: '#E4E4E4',
 },
 section: {
  margin: 6,
  padding: 10,
 },
 block: {
  marginTop: 8,
 },
 row: {
  flexDirection: 'row',
  marginTop: 8,
  gap: 12,
 },
 field: {
  backgroundColor: '#cbd5e1',
  paddingHorizontal: 2,
 },
 heading: {
  fontSize: 24,
  textAlign: 'center',
  marginBottom: 8,
 },
 label: {
  fontSize: 14,
  marginBottom: 1,
 },
 applicant: {
  fontSize: 14,
  padding: 4,
  marginTop: 2,
  textAlign: 'center',
 },
 employ: {
  fontSize: 14,
  backgroundColor: '#e2e8f0',
  paddingTop: 2,
 },
 inset: {
  paddingLeft: 12,
 },
})
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

// Create Document Component
export const MyDocument = ({ data }: { data: Data }) => {
 const experience = filterSelected(data.experience)
 return (
  <Document>
   <Page
    size='A4'
    style={styles.page}>
    <View style={styles.section}>
     <Text style={styles.heading}>Application</Text>
     <Text style={styles.label}>Name:</Text>
     <Text style={styles.field}>
      {data.contact.firstName} {data.contact.lastName}
     </Text>
     <View style={styles.row}>
      <View>
       <Text style={styles.label}>Email:</Text>
       <Text style={styles.field}>{data.contact.email}</Text>
      </View>
      <View>
       <Text style={styles.label}>Phone #</Text>
       <Text style={styles.field}>{data.contact.phone}</Text>
      </View>
     </View>
     <View style={styles.row}>
      <View>
       <Text style={styles.label}>Address:</Text>
       <Text style={styles.field}>{data.contact.address}</Text>
      </View>
      <View>
       <Text style={styles.label}>Apt:</Text>
       <Text style={styles.field}>{data.contact.apt} </Text>
      </View>

      <View>
       <Text style={styles.label}>City:</Text>
       <Text style={styles.field}>{data.contact.city}</Text>
      </View>
      <View>
       <Text style={styles.label}>State:</Text>
       <Text style={styles.field}> {data.contact.state} </Text>
      </View>
     </View>
     <View style={styles.row}>
      <View>
       <Text style={styles.label}>Zip:</Text>
       <Text style={styles.field}> {data.contact.zip} </Text>
      </View>
      <View>
       <Text style={styles.label}>Country:</Text>
       <Text style={styles.field}>{data.contact.country}</Text>
      </View>
     </View>
    </View>
    <View style={styles.section}>
     <Text style={styles.label}>Meets age requirement:</Text>
     <Text style={styles.field}>Yes</Text>
    </View>
    <View style={styles.section}>
     <Text style={styles.label}>Preferred Positions:</Text>
     {data.selectedPositions.map((position, index) => (
      <Text
       style={styles.field}
       key={position.id}>
       {index + 1}. {position.title}
      </Text>
     ))}
    </View>
    <View style={styles.section}>
     <Text style={styles.label}>Why does the industry appeal to you?</Text>
     <Text style={styles.field}>{data.appeal}</Text>
    </View>
    <View style={styles.section}>
     <Text style={styles.label}>Experience:</Text>
     {Object.values(experience).map((item, index) => (
      <View
       style={styles.block}
       key={item.id}>
       <Text style={styles.field}>
        {index + 1}. {item.name}
       </Text>
       <Text style={styles.field}>{item.info}</Text>
      </View>
     ))}
    </View>
    <View style={styles.section}>
     <Text style={styles.label}>Currently Employed:</Text>
     <Text style={styles.field}>{data.employed ? 'Yes' : 'No'}</Text>
     {data.employed && (
      <View>
       <Text style={styles.label}>Employer:</Text>
       <Text style={styles.field}>{data.currentEmployment.location}</Text>
       <Text style={styles.label}>Duration:</Text>
       <Text style={styles.field}>{data.currentEmployment.duration}</Text>
      </View>
     )}
    </View>
   </Page>
   <Page
    size='A4'
    style={styles.page}>
    <Text style={styles.applicant}>
     Applicant: {data.contact.firstName} {data.contact.lastName}
    </Text>
    <View style={styles.section}>
     <Text style={styles.label}>Previous Employment:</Text>
     {data.prevEmploy.map((employment, index) => (
      <View
       style={styles.block}
       key={index}>
       <Text style={styles.field}>{employment.employer ? index + 1 + '.' + employment.employer : index + 1 + '.' + 'None'}</Text>
       {employment.employer && (
        <View style={styles.inset}>
         <Text style={styles.employ}>Duration:</Text>
         <Text style={styles.field}>{employment.duration}</Text>
         <Text style={styles.employ}>Reason for leaving:</Text>
         <Text style={styles.field}>{employment.reason}</Text>
        </View>
       )}
      </View>
     ))}
    </View>
    <View style={styles.section}>
     <Text style={styles.label}>Why would you be a good fit:</Text>
     <Text style={styles.field}>{data.pitch}</Text>
    </View>
    <View style={styles.section}>
     <Text style={styles.label}>Hours Limitations:</Text>
     <Text style={styles.field}>{!data.available ? 'Yes' : 'None'}</Text>
     {!data.available && (
      <View>
       <Text style={styles.label}>Conditions:</Text>
       <Text style={styles.field}>{data.conditions}</Text>
      </View>
     )}
    </View>
   </Page>
  </Document>
 )
}
