import { auth } from "@/lib/auth";
import Link from "next/link";
import Logout from "./logout";

export default async function Navbar() {
    const data = await auth();
    return (
        <div className="sticky top-0 z-50 h-[60px] w-screen bg-gradient-to-r from-teal-500 to-teal-700 max-sm:px-5 flex items-center justify-between px-10 shadow-2xl">
           <Link href={"/"} className="font-inter font-bold text-[20px] text-white">
           HotCoffee☕
           </Link>
            {data? (<div className="flex items-center gap-2 h-[30px]">
                <p>{data.user.name}</p>
                <Logout/>
                </div>) :(
                <div className="flex gap-2">
                <Link href={"/login"} className="px-4 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-teal-300 transition duration-300">
                Login</Link>

                <Link href={"/register"} className="px-4 py-2 bg-white text-teal-500 font-semibold rounded-lg hover:bg-teal-300 hover:text-white transition duration-300">
                Register</Link>
            </div>
            )
            }
            
        </div>
    )
}