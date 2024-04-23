import React from 'react'

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-lg border border-slate-500 rounded-sm ">
        <h1 className="text-xl py-1 px-12 bg-slate-300">Your application has been submitted!</h1>
        <p className="px-12 pt-2 pb-4 bg-slate-200">
          We will review your information, and if it seems like a good fit we will reach out via email or phone call.
        </p>
        <p className="px-12 bg-slate-200">Ink Monkey LLC</p>
        <p className="px-12 pb-2 bg-slate-200 text-sm">inkmonkeyllc@gmail.com</p>
      </div>
    </div>
  )
}

export default Page
