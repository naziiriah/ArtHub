const SignUP = () => {
    return(
        <div className="max-h-screen flex max-w-full">
            <div className="w-50 h-screen bg-green-background text-red-50 rounded-tr-xl rounded-b-xl">
                    <div className=" w-9/12 pt-40 container m-auto opacity-100">
                        <h2 className="text-white font-extrabold text-8xl ">ArtLynk</h2>
                        <p className="text-white font-bold text-xl mt-3">Empowering Creatives</p>
                    </div>
            </div>
            <div className="w-50 align-middle h-screen">
                <div className="h-20"></div>
                <h2 className="capitalize text-3xl font-extrabold text-black text-center my-4">Sign Up</h2>
                <form className="max-w-sm mx-auto">
                    
                    <div className="mb-5">
                        {/* <label HtmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                        <input type="text" id="email" className=" text-gray-900 bg-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg" placeholder="First Name" required />
                    </div>
                    <div className="mb-5">
                        {/* <label HtmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                        <input type="text" id="email" className=" text-gray-900 bg-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg" placeholder="Last Name" required />
                    </div>
                    <div className="mb-5">
                        {/* <label HtmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                        <input type="email" id="email" className=" text-gray-900 bg-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg" placeholder="Email" required />
                    </div>
                    <div class="mb-5">
                        <input type="password" id="password" className="bg-slate-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Password" />
                    </div>
                    <div className="mb-5 flex justify-center">
                        <label HtmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">Accept Terms and Conditions</label>
                    </div>
                    <div className="mb-5 flex justify-center">
                        <label HtmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">Or</label>
                    </div>
                    <div className="w-full flex justify-center">
                    <button type="button" className="text-white bg-slate-400 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                        </svg>
                        Sign in with Google
                        </button>
                    </div>
                    <div className="w-full my-5 flex justify-center">
                    
                        <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                            <svg class="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                            Sign in with Apple
                        </button>
                        {/* <button type="submit" className="text-white px-14 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-xl text-sm sm:w-auto  py-2.5 text-center dark:black dark:hover:bg-black dark:focus:ring-green-200 capitalize">Sign in with Apple</button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUP;