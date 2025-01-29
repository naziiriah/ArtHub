import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionFive = () => {
    return (
         <div className="w-full h-full bg-white-bg">
            <div className="w-full h-20"></div>
            <div>
                <h2 className="capitalize font-bold text-4xl text-center text-dep-gre">the perfect plan for your needs</h2>
                <p className=" mt-4 text-center font-normal text-dep-gre">Tailored plans to showcase your talent, grow your<br/> audience, sell your art with ease.</p>
            </div>
            <div className="w-full text-white mt-8 flex justify-center">
                <div>
                    <div className="h-20"></div>
                    <div className="w-60 h-80 bg-dep-gre rounded-sm border-solid border-b-4 shadow-inner border-green-900">
                        <div className="w-11/12 mx-auto">
                            <div className="h-4">

                            </div>
                            <h2 className="font-bold capitalize text-xl">Starter Plan</h2>
                            <h4 className="text-sm text-gray-200 mb-3"> <span className="font-bold text-white text-xl">#0</span>/month</h4>
                            <h4 className="text-gray-200 mb-3">includes:</h4>
                            <div className="flex justify-between my-2">
                                <FontAwesomeIcon icon={faCheckCircle}  className="text-green-300 "/> <div className="w-7"></div>
                                <p className="text-sm">Basic website design templates tailored for artists.</p>
                            </div>

                            <div className="flex justify-between my-2">
                                <FontAwesomeIcon icon={faCheckCircle}  className="text-green-300 "/> 
                                <div className="w-7"></div>
                                <p className="text-sm">Access to analyze for basic insights [views, likes, shares].</p>
                            </div>

                            <div className="flex justify-between my-2">
                                <FontAwesomeIcon icon={faCheckCircle}  className="text-green-300 "/> 
                                <div className="w-7"></div>
                                <p className="text-sm">Social media integration for sharing.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="w-72 mx-5 bg-dep-gre shadow-inner rounded-sm border-solid border-b-4 border-green-900">
                        <div className="w-11/12 mx-auto">
                            <div className="h-4">

                            </div>
                            <h2 className="font-bold capitalize text-2xl">Pro Plan</h2>
                            <h4 className="text-lg text-gray-200 mb-3"> <span className="font-bold text-white text-2xl">#7,500</span>/month</h4>
                            <h4 className="text-gray-200 mb-3">includes:</h4>
                            <div className="flex = my-2">
                                <FontAwesomeIcon icon={faCheckCircle}  className="text-green-300 "/> <div className="w-4"></div>
                                <p className="text-lg">All stater plan features.</p>
                            </div>

                            <div className="flex justify-between my-2">
                                <FontAwesomeIcon icon={faCheckCircle}  className="text-green-300 "/> 
                                <div className="w-5"></div>
                                <p className="text-lg">Advanced templates with customization options.</p>
                            </div>

                            <div className="flex my-2">
                                <FontAwesomeIcon icon={faCheckCircle}  className="text-green-300 "/> 
                                <div className="w-4"></div>
                                <p className="text-lg">Unlimited portfolio uploads.</p>
                            </div>
                            <div className="flex justify-between my-2">
                                <FontAwesomeIcon icon={faCheckCircle}  className="text-green-300 "/> 
                                <div className="w-7"></div>
                                <p className="text-lg">Built-in ecommerce tools, including payment options like bank transfer.</p>
                            </div>
                            <div className="h-20 w-full">
                                

                            </div>
                        </div>
                </div>
                <div>
                    <div className="h-20"></div>
                    <div className="w-60 h-80 bg-dep-gre shadow-inner rounded-sm border-solid border-b-4 border-green-900">
                        <div className="w-11/12 mx-auto">
                            <div className="h-4">

                            </div>
                            <h2 className="font-bold capitalize text-xl">Elite Plan</h2>
                            <h4 className="text-sm text-gray-200 mb-3"> <span className="font-bold text-white text-xl">#15,000</span>/month</h4>
                            <h4 className="text-gray-200 mb-3">includes:</h4>
                            <div className="flex  my-2">
                                <FontAwesomeIcon icon={faCheckCircle}  className="text-green-300 "/> <div className="w-4"></div>
                                <p className="text-sm">All Pro plan features.</p>
                            </div>

                            <div className="flex justify-between my-2">
                                <FontAwesomeIcon icon={faCheckCircle}  className="text-green-300 "/> 
                                <div className="w-7"></div>
                                <p className="text-sm">Event updates and personalized promotion for exhibitions.</p>
                            </div>

                            <div className="flex justify-between my-2">
                                <FontAwesomeIcon icon={faCheckCircle}  className="text-green-300 "/> 
                                <div className="w-7"></div>
                                <p className="text-sm">Access to advanced analytics, including audience demographics and engagement trends.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-20"></div>

        </div>
    )
}

export default SectionFive;