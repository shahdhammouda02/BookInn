"use client"

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react"

interface ErrorProps{
    error: Error;
    reset: ()=> void
}

const GlobalError = ({error, reset}: ErrorProps) =>{
    const t = useTranslations("")
    return(
        <div className="p-20 text-center text-red-600">
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <Button onClick={()=> reset()}>Try again</Button>
        </div>
    )
}

export default GlobalError