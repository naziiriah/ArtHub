import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Galleries = () => {
    const navigate = useNavigate()

    return(
            <div className="max-h-screen max-w-full ">
                <div className="w-full h-full bg-white-bg">
                    <div className="w-11/12 mx-auto">
                        <div className="flex justify-between  pt-10">
                            <FontAwesomeIcon icon={faHome} onClick={() => navigate('/')} className=" text-deep-gre"/>
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
                            <div className="flex my-6 justify-between">
                                <div className="h-64 w-1/3 mx-10">
                                    <img src={'../../src/assets/photo_2025-01-20_08-31-20.jpg'} className="w-full h-full" />
                                </div>
                                <div className="w-2/3">
                                    <div className=" font-bold text-2xl uppercase">omenka gallery</div>                                    
                                    <div className="font-bold my-2 capitalize">location: ikoyi, lagos</div>
                                    <p>
                                        Omenka Gallery is renowed for its focus on contemporary African Art, providing a platform for emerging and established artisits. it frequently organizes solo and group exhibitions with an emphasis on innovative and boundry-pushing works.
                                    </p>
                                    <div className=" flex justify-end mt-4 mr-20">
                                        <button className="px-4 py-1 text-white bg-deep-gre rounded-md">see more...</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-32 bg-slate-400 opacity-20 my-5"></div>
                            <div className="flex justify-between  pt-10 w-full">
                                <div className="w-3/5">
                                <div className=" font-bold text-2xl uppercase">nike art gallery</div>                                    
                                <div className="font-bold my-2 capitalize">location: Lekki, lagos</div>
                                    <p>
                                        Owned by Chief Nike Davies Okundaye, this four story gallery is one of the largest in Nigeria, housing over 8000 artworks. It showcases diverse Nigerian art forms, including paintings, sculptures, textiles and beadwork. The gallery serves as a cultural hub offering workshops on traditional crafts
                                    </p>
                                    <div className=" flex justify-start mt-6 ">
                                    <button className="px-4 py-1 text-white bg-deep-gre rounded-md">see more...</button>
                                    </div>
                                </div>
                                <div className="h-64 w-1/3 mx-10">
                                    <img src={'../../src/assets/photo_2025-01-20_08-31-28.jpg'} />
                                </div>
                            </div>
                            <div className="h-24"></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Galleries;