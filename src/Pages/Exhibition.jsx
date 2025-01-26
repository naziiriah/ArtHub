import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Exhibition = () => {
    const navigate = useNavigate()
    return (
        <div className="max-h-screen max-w-full ">
            <div className="w-full h-full bg-white-bg">
                <div className="w-11/12 mx-auto">
                    <div className="flex justify-between  pt-10">
                        <FontAwesomeIcon icon={faHome} onClick={()=> navigate('/')} className=" text-deep-gre"/>
                        <div className="w-60">
                            <div className="h-10 w-11/12 px-3 pt-2 mb-3 rounded-md font-bold capitalize bg-gray-300">
                                Country:  Nigeria
                            </div>
                            <div className="h-10 w-11/12 px-3 pt-2 mb-3 rounded-md font-bold capitalize bg-gray-300">
                                City:  All
                            </div>
                        </div>
                        <div className="w-2">

                        </div>
                    </div>
                    <div className="w-11/12 mx-auto">
                        <div className="flex my-6">
                            <div className="h-64 w-48">
                                <img src={'../../src/assets/photo_2025-01-20_08-30-58.jpg'}  className="w-88 h-64"/>
                            </div>
                            <div className=" w-50 mx-8">
                                <h2 className="font-bold text-2xl uppercase">
                                    Beyond the canvas
                                </h2>
                                <div>Location: pyramid art center. abuja</div>
                                <div>Duration: december 1st - january 31,2025</div>

                                <h2 className="my-2 text-lg font-bold capitalize">Description</h2>
                                <p>the exhibition celebrates absract and experimental art, showcasing the works of contemporary Nigerian painters, sculptors and digital artisits. It challenges conventional boundaries, featuring installations that incorporates light, sound and augumened reality</p>
                            </div>
                        </div>
                        <div className="flex my-6">
                        <div className="h-64 w-48">
                                <img src={'../../src/assets/photo_2025-01-20_08-31-27.jpg'} className="w-88 h-64"/>
                            </div>
                            <div className=" w-50 mx-8">
                                <h2 className="font-bold text-2xl uppercase">
                                    Earth and Spirit
                                </h2>
                                <div>Location:Terra Kulture, Lagos</div>
                                <div>Duration: december 5th - january 15th, 2025</div>

                                <h2 className="my-2 text-lg font-bold capitalize">Description:</h2>
                                <p>the exhibition celebrates absract and experimental art, showcasing the works of contemporary Nigerian painters, sculptors and digital artisits. It challenges conventional boundaries, featuring installations that incorporates light, sound and augumened reality</p>
                            </div>
                        </div>
                        <div className="h-32">

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Exhibition;