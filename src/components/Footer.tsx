'use client'

import { FaHeart } from 'react-icons/fa6'

const Copyright = () => (
  <div className="text-neutral-400">&copy; {new Date().getFullYear()} Sanders Gutiérrez. All rights reserved.</div>
)

const MadeWith = () => (
  <div className="text-neutral-400">
    Made with
    <FaHeart className="inline mx-1.5 fill-red-600" />
    by @UnTalSanders
  </div>
)

export function Footer() {
  return (
    <footer className="bg-[#1e1e1e] py-5 text-center text-white">
      <div className="wrapper mx-auto flex flex-col-reverse items-center gap-2 md:flex-row md:flex-wrap md:justify-between">
        <Copyright />
        <MadeWith />
      </div>
    </footer>
  )
}
