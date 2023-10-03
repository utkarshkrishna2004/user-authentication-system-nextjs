"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
   const router = useRouter();

   const [user, setUser] = React.useState({
      email: "",
      password: "",
   });

   const [buttonDisabled, setButtonDisabled] = React.useState(false);
   const [loading, setLoading] = React.useState(false);

   const onLogin = async () => {
      try {
         setLoading(true);
         const response = await axios.post("/api/users/login", user);
         console.log("Log In success", response.data);
         toast.success("Log In success");
         router.push("/profile");
      } catch (error: any) {
         console.log("Log In failed", error.message);
         toast.error(error.message);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      if (user.email.length > 0 && user.password.length > 0) {
         setButtonDisabled(false);
      } else {
         setButtonDisabled(true);
      }
   }, [user]);

   return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1 className=" text-4xl font-bold m-6">
            {loading ? "Processing..." : "Log In"}
         </h1>
         <hr />

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
