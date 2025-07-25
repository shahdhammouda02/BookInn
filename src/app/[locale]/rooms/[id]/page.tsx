import { RoomDetails } from "@/features/rooms/components/RoomDetails";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  return <RoomDetails id={id} />;
};

export default page;
