"use client"

import { signOut } from "next-auth/react"

export default function Logout(){
    return(
        <button onClick={()=> signOut({redirectTo: "/login"})} className="px-4 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-teal-300 transition duration-300">Logout</button>
    )
}