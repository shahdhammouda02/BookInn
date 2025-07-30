"use client"
import { Button } from '@/components/ui/button'
import React from 'react'

const OffersFilters = () => {
  return (
     <div className="flex flex-wrap gap-3">
      <Button className="border rounded-md px-3 py-1 text-sm">Free Wi-Fi</Button>
      <Button className="border rounded-md px-3 py-1 text-sm">Parking</Button>
      <Button className="border rounded-md px-3 py-1 text-sm">Pool</Button>
    </div>
  )
}

export default OffersFilters
