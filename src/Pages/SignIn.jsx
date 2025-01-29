const SignIN = () => {
    return(
        <div className="max-h-screen flex max-w-full">
            <div className="w-50 align-middle h-screen">
                <div className="h-40"></div>
                <h2 className="capitalize text-3xl font-extrabold text-black text-center my-4">Log In</h2>
                <form className="max-w-sm mx-auto">
                    <div className="mb-5">
                        {/* <label HtmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                        <input type="email" id="email" className=" text-gray-900 bg-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg" placeholder="Email" required />
                    </div>
                    <div class="mb-5">
                        
                        <input type="password" id="password" className="bg-slate-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Password" />
                    </div>
                    <div className="mb-5 flex justify-end">
                        
                        <label HtmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right">Forgot Password ?</label>
                    </div>
                    <div className="w-full flex justify-center">
                        <button type="submit" className="text-white px-14 bg-dep-gre hover:bg-dep-gre focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-xl text-sm sm:w-auto  py-2.5 text-center dark:bg-dep-gre dark:hover:bg-dep-gre dark:focus:ring-green-200 capitalize">Sign in</button>
                    </div>
                </form>
            </div>
            
            <div className="w-50 h-screen bg-green-background rounded-tl-xl rounded-bl-xl">
                
                    <div className=" w-11/12 pt-40 container m-auto opacity-100">
                        <h2 className="text-white uppercase font-extrabold text-8xl text-end">Welcome <br/>back</h2>
                    </div>
            </div>
        </div>
    )
}

export default SignIN;