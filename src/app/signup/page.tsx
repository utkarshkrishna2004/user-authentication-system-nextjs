"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignUpPage() {
   const [user, setUser] = React.useState({
      email: "",
      password: "",
      username: "",
   });

   const onSignup = async () => {};

   return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1 className=" text-4xl font-bold m-6">Sign Up</h1>
         <hr />
         <label className=" text-lg font-medium" htmlFor="username">
            Enter Username
         </label>
         <input
            className="p-2 bg-gray-900 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white "
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
         />

         <label className=" text-lg font-medium" htmlFor="email">
            Enter Email
         </label>
         <input
            className="p-2 bg-gray-900 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
         />

         <label className=" text-lg font-medium" htmlFor="password">
            Enter Password
         </label>
         <input
            className="p-2 bg-gray-900 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
         />

         <button
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 mt-4 cursor-pointer transition-transform hover:bg-orange-500 hover:scale-110 hover:text-black hover:font-semibold hover:border-none  "
         >
            Sign-Up Here
         </button>
         <Link
            href="/login"
            className=" cursor-pointer transition-transform hover:text-orange-500 hover:scale-105"
         >
            Visit Log In Page
         </Link>
      </div>
   );
}
