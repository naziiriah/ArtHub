import { faPlateWheat } from "@fortawesome/free-solid-svg-icons/faPlateWheat"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

const Artists = () => {
    const navigate = useNavigate();
    return(
        <div className="max-h-screen max-w-full ">
            <div className="w-full h-full bg-white-bg">
                <h3 className="text-center capitalize text-5xl font-bold pt-5">Discover our artists</h3>
                <p className="text-center mt-6 font-bold">Dive into the world of creativity with ArtLynk. Meet the talented</p>
                <p className="text-center  font-bold">artists who bring unique visions to life</p>
                <div className="mt-5 flex justify-center">
                        {/* <label HtmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                    <input type="text" id="email" className=" text-gray-900 bg-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg" placeholder="Search By Name" required />
                </div>
                <div className="w-5/6 mt-10 mx-auto flex justify-evenly" >
                    <div className=" mx-3 w-80" onClick={()=> navigate('/artist')}>
                        <img src={"../../src/assets/QPVP8940.JPG"} alt="Painter" className="rounded w-80 h-48"/>
                        
                        <div className="my-2 flex w-full justify-between">
                            <h2 className="font-bold">Eto Onwordi</h2>
                            <button className="border-spacing-2 shadow-md text-white bg-black border-black border-2 w-20 border-solid rounded-md h-8">
                                Follow
                            </button>
                        </div>
                        <h3>Painter</h3>
                        <div className="my-2 flex w-full ">
                            <FontAwesomeIcon icon={faPlateWheat}/>
                            <FontAwesomeIcon icon={faPlateWheat}/>
                        </div>
                    </div>
                    <div className=" mx-3 w-80" onClick={()=> navigate('/artist')}>
                        <img src={"../../src/assets/photo_2025-01-20_08-31-30.JPG"} alt="Painter" className="rounded w-80 h-48"/>
                        
                        <div className="my-2 flex w-full justify-between">
                            <h2 className="font-bold">Zion Ode</h2>
                            <button className="border-spacing-2 shadow-md text-white bg-black border-black border-2 w-20 border-solid rounded-md h-8">
                                Follow
                            </button>
                        </div>
                        <h3>Ceramist</h3>
                        <div className="my-2 flex w-full ">
                            <FontAwesomeIcon icon={faPlateWheat}/>
                            <FontAwesomeIcon icon={faPlateWheat}/>
                        </div>
                    </div>
                    <div className=" mx-3 w-80" onClick={()=> navigate('/artist')}>
                        <img src={"../../src/assets/photo_2025-01-20_08-31-30.JPG"} alt="Painter" className="rounded w-80 h-48"/>
                        
                        <div className="my-2 flex w-full justify-between">
                            <h2 className="font-bold">Benedict Igelle</h2>
                            <button className="border-spacing-2 shadow-md text-white bg-black border-black border-2 w-20 border-solid rounded-md h-8">
                                Follow
                            </button>
                        </div>
                        <h3>Contemporary Painter</h3>
                        <div className="my-2 flex w-full ">
                            <FontAwesomeIcon icon={faPlateWheat}/>
                            <FontAwesomeIcon icon={faPlateWheat}/>
                        </div>
                    </div>
                    <div className=" mx-3 w-80" onClick={()=> navigate('/artist')}>
                        <img src={"../../src/assets/photo_2025-01-20_08-28-31.JPG"} alt="Painter" className="rounded w-80 h-48"/>
                        
                        <div className="my-2 flex w-full justify-between">
                            <h2 className="font-bold">Gushop Mark</h2>
                            <button className="border-spacing-2 shadow-md text-white bg-black border-black border-2 w-20 border-solid rounded-md h-8">
                                Follow
                            </button>
                        </div>
                        <h3>Digital Artist</h3>
                        <div className="my-2 flex w-full ">
                            <FontAwesomeIcon icon={faPlateWheat}/>
                            <FontAwesomeIcon icon={faPlateWheat}/>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 mt-10 mx-auto flex justify-evenly mb-3">
                <div className=" mx-3 w-80" onClick={()=> navigate('/artist')}>
                        <img src={"../../src/assets/photo_2025-01-20_08-28-23.JPG"} alt="Painter" className="rounded w-80 h-48"/>
                        
                        <div className="my-2 flex w-full justify-between">
                            <h2 className="font-bold">Eto Onwordi</h2>
                            <button className="border-spacing-2 shadow-md text-white bg-black border-black border-2 w-20 border-solid rounded-md h-8">
                                Follow
                            </button>
                        </div>
                        <h3>Painter</h3>
                        <div className="my-2 flex w-full ">
                            <FontAwesomeIcon icon={faPlateWheat}/>
                            <FontAwesomeIcon icon={faPlateWheat}/>
                        </div>
                    </div>
                    <div className=" mx-3 w-80" onClick={()=> navigate('/artist')}>
                        <img src={"../../src/assets/photo_2025-01-20_08-28-55.JPG"} alt="Painter" className="rounded w-80 h-48"/>
                        
                        <div className="my-2 flex w-full justify-between">
                            <h2 className="font-bold">Eto Onwordi</h2>
                            <button className="border-spacing-2 shadow-md text-white bg-black border-black border-2 w-20 border-solid rounded-md h-8">
                                Follow
                            </button>
                        </div>
                        <h3>Painter</h3>
                        <div className="my-2 flex w-full ">
                            <FontAwesomeIcon icon={faPlateWheat}/>
                            <FontAwesomeIcon icon={faPlateWheat}/>
                        </div>
                    </div>
                    <div className=" mx-3 w-80" onClick={()=> navigate('/artist')}>
                        <img src={"../../src/assets/photo_2025-01-20_08-28-19.JPG"} alt="Painter" className="rounded w-80 h-48"/>
                        
                        <div className="my-2 flex w-full justify-between">
                            <h2 className="font-bold">Eto Onwordi</h2>
                            <button className="border-spacing-2 shadow-md text-white bg-black border-black border-2 w-20 border-solid rounded-md h-8">
                                Follow
                            </button>
                        </div>
                        <h3>Painter</h3>
                        <div className="my-2 flex w-full ">
                            <FontAwesomeIcon icon={faPlateWheat}/>
                            <FontAwesomeIcon icon={faPlateWheat}/>
                        </div>
                    </div>
                    <div className=" mx-3 w-80" onClick={()=> navigate('/artist')}>
                        <img src={"../../src/assets/photo_2025-01-20_08-31-29.JPG"} alt="Painter" className="rounded w-80 h-48"/>
                        
                        <div className="my-2 flex w-full justify-between">
                            <h2 className="font-bold">Eto Onwordi</h2>
                            <button className="border-spacing-2 shadow-md text-white bg-black border-black border-2 w-20 border-solid rounded-md h-8">
                                Follow
                            </button>
                        </div>
                        <h3>Painter</h3>
                        <div className="my-2 flex w-full ">
                            <FontAwesomeIcon icon={faPlateWheat}/>
                            <FontAwesomeIcon icon={faPlateWheat}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-40 w-full bg-deep-gre  rounded-t-lg">
                <div>
                    <h4 className="text-center text-white my-6 pt-6 mx-auto w-3/5">
                        2024 ArtLynk. Uniting creativity and art lovers worldwide.
                    </h4>
                    <div className=" flex justify-center mt-16">
                        <div className="flex ">
                            <h5 className="text-white capitalize mx-3">About ArtLynk</h5>
                            <h5 className="text-white capitalize mx-3">About ArtLynk</h5>
                            <h5 className="text-white capitalize mx-3">Privacy Policy</h5>
                            <h5 className="text-white capitalize mx-3">Term & Conditions</h5>
                            <h5 className="text-white capitalize mx-3">Get Support</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artists