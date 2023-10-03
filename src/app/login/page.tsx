"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
   const [user, setUser] = React.useState({
      email: "",
      password: "",
   });

   const onLogin = async () => {};

   return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1 className=" text-4xl font-bold m-6">Log In</h1>
         <hr />

         <label className=" text-lg font-medium" htmlFor="email">
            email
         </label>
         <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
         />

         <label className=" text-lg font-medium" htmlFor="password">
            password
         </label>
         <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
         />

         <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 mt-4 cursor-pointer transition-transform hover:bg-orange-500 hover:scale-110 hover:text-black hover:font-semibold hover:border-none  "
         >
            Log-In Here
         </button>
         <Link
            href="/signup"
            className=" cursor-pointer transition-transform hover:text-orange-500 hover:scale-105"
         >
            Visit Sign Up Page
         </Link>
      </div>
   );
}
