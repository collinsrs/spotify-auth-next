import React from "react";
import Link from "next/link";
import type { AuthLink } from "../types/AuthLink";


export default function AuthLink({params, authType, className, children}: AuthLink) {
        //initialise the types

        if (className == undefined || null) {
            return (
                <Link href='/' >
                    {children}
                </Link>
              )
        }


        
    return (
      <Link href='/' className={className} >
            {children}
      </Link>
    )

}