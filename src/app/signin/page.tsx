import React from 'react';
import Image from "next/image";

export default function Login() {
  return (
    <div>
      {/* Header */}
      <header className="bg-white">
        <div className="w-full py-9 bg-[#F6F5FF]">
          {/* Breadcrumbs */}
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-[#1D3178]">My Account</h1>
            <nav className="text-sm text-gray-600 mb-2">
              <ol className="list-reset flex">
                <li>
                  <a href="/" className="text-gray-900 hover:underline">
                    Home . Pages .
                  </a>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-pink-500 font-semibold">Sign in</li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      {/* Login Form Section */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8">
          {/* Login Heading */}
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Login
          </h1>
          <p className="text-sm text-gray-400 text-center mb-6">
            Please login using account details below.
          </p>

          <form>
            {/* Email Address */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 placeholder:text-gray-400 p-2"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 placeholder:text-gray-400 p-2"
              />
              <div className="mt-2 text-left">
                <a
                  href="/forgot-password"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none"
              >
                Sign In
              </button>
            </div>

            {/* Description Text */}
            <p className="text-sm text-gray-500 text-center mt-4">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-pink-500 hover:underline">
                Create account
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Footer Image */}
      <div className="flex justify-center">
        <Image src="/bg2.png" alt="footerimg" width={900} height={93} />
      </div>
    </div>
  );
}
