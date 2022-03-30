import React from 'react'
import { Featured } from '../../components/Featured/Featured'
import { Hero } from '../../components/Hero/Hero'
import { Signup } from '../../components/Signup/Signup'

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Featured></Featured>
      <Signup></Signup>
    </div>
  )
}
