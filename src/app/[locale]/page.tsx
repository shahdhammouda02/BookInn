import React from 'react'
import {Home} from '@/features/page'
import { hotelsData } from '@/data/cardsData'

const page = () => {
  return (
    <main>
      <Home hotels={hotelsData}/>
    </main>
  )
}

export default page
