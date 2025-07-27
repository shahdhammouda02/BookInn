"use client"

import React from "react"
import { Button } from "@/components/ui/button";

interface ErrorProps{
    error: Error;
    reset: ()=> void
}

const GlobalError = ({error, reset}: ErrorProps) =>{
    return(
        <div className="p-20 text-center text-red-600">
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <Button onClick={()=> reset()}>Try again</Button>
        </div>
    )
}

export default GlobalError