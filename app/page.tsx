'use client'
import Contact from './components/contact'
import { DevTools } from 'jotai-devtools'
import AgeConfirm from './components/age-confirm'
import Positions from './components/positions'
import Description from './components/description'
import Background from './components/background/background'
import Employment from './components/employment/employment'
import PrevEmploy from './components/employment/prev-employ'
import Pitch from './components/pitch'
import Conditions from './components/conditions'
import Submit from './components/submit'
import Email from './email/email'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-8 max-w-2xl">
      {/* <DevTools /> */}
      <Description />
      <Contact />
      <AgeConfirm />
      <Positions />
      <Background />
      <Employment />
      <PrevEmploy />
      <Pitch />
      <Conditions />
      <Submit />
    </main>
  )
}
