import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const FinalPage = () => {
    const navigate =  useNavigate();
    return (
        <div className="max-h-screen max-w-full">
            <div className="w-full h-72 bg-green-background flex justify-center">
                <img src="../../src/assets/photo_2025-01-20_08-28-36.jpg" alt="congrats-Image"/>
            </div>
            <div className="w-full mt-10">
                <h2 className="capitalize text-2xl font-bold mt-5 text-center">thank you</h2>
                <h2 className="capitalize text-xl font-bold mt-5 text-center"><FontAwesomeIcon icon={faCircleCheck} className="ml-5 text-deep-gre"/> payment done successfully</h2>
                <div className="flex justify-center mt-4">
                    <button className="text-white capitalize rounded-xl text-lg font-bold bg-deep-gre px-16 py-2" onClick={()=> navigate('/')}>back to home</button>
                </div>
            </div>
        </div>
    )
}

export default FinalPage;