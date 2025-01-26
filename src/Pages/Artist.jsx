import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Artist = () => {
    const navigation = useNavigate()
    return(
        <div className="max-h-screen max-w-full">
            <div className="w-10/12 mx-auto mt-6">
                <div>
                    <FontAwesomeIcon icon={faHome} className=" hover:cursor-pointer" onClick={()=> navigation('/')}/>
                    <div className="w-full h-99 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 my-3">
                        <div className="w-full h-28  bg-dep-gre rounded-t-lg">
                            <div className="w-full h-full bg-hero-pattern opacity-10">
                            </div>
                        </div>
                        <div className="mt-3 mx-auto w-11/12">
                            <div className="flex justify-between w-full">
                                <div className="w-1/4">
                                    <img src={"../../src/assets/QPVP8940.JPG"} alt="Painter" className="w-40 h-40 rounded-full mb-2"/>
                                    <div className="ml-5">
                                        <h2 className="font-bold text-2xl">
                                            Eto Onwordi
                                        </h2>
                                        <p>Painter</p>
                                    </div>
                                </div>
                                <div className="w-3/4">
                                    <div className="flex justify-between my-2">
                                        <div className="flex justify-around">
                                            <img src={"../../src/assets/IMG_2172.JPG"} alt="Painter" className="w-24 h-28 mx-2 rounded-md  mb-2"/>
                                            <img src={"../../src/assets/IMG_2167.JPG"} alt="Painter" className="w-24 h-28 mx-2 rounded-md  mb-2"/>
                                            <img src={"../../src/assets/IMG_2152.JPG"} alt="Painter" className="w-24 h-28 mx-2 rounded-md  mb-2"/>
                                        </div>
                                        <div>
                                            <button className="border-spacing-2 shadow-md border-black border-2 w-28 border-solid rounded-md font-bold h-8">
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">About</h2>
                                        <p>
                                            Eto Onwordi is a Nigerian contemporary painter known for his vibrant use of color and bold expressive strokes. His works captures the essence of modern African life, blending abstract forms with cultural narratives.                                            
                                        </p>
                                        <h4 className="font-bold text-lg mt-3">
                                            Portfolio: http/onlport.com
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )        
}

export default Artist;