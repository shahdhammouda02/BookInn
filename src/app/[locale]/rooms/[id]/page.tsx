import { RoomDetails } from '@/features/rooms/components/RoomDetails'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
  return <RoomDetails id={params.id} />
}

export default page
