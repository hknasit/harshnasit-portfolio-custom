import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='m-4 flex justify-between'>
      <div>
        Harsh Nasit
      </div>
      <div>
        Right side manu
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects </Link>
        <Link href={"Experence"}> Experience</Link>
        <button>Resume</button>
      </div>
    </div>
  )
}
