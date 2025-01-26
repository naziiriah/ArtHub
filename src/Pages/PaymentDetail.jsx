import { useNavigate } from "react-router-dom"

const PaymentDetail = () => {
    const navifgation=  useNavigate();
    return (
        <div className="max-h-screen max-w-full ">
            <div className="w-full h-full">
                <div className="text-center capitalize font-bolder text-4xl mt-4 ">
                    payment details
                </div>
                <div className="w-11/12 flex mt-4 justify-around">
                    <div className="mt-32">
                        <img src="../../src/assets/photo_2025-01-20_08-31-26.jpg" alt="card"/>
                    </div>
                    <div className="w-1/3 mt-16">
                        <h2 className="font-bold mb-6 capitalize">payment details</h2>
                        <h5 className="text-gray-600 text-sm leading-5 my-2">Name on Card</h5>
                        <h2 className="font-bold mb-6 capitalize">Thomas David</h2>
                        <h5 className="text-gray-600 text-sm leading-5 my-2">Card Number</h5>
                        <h2 className="font-bold mb-6 capitalize">1234  5678  1234  5678</h2>
                        <div className="flex justify-between">
                            <div>
                            <h5 className="text-gray-600 text-sm leading-5 my-2">Valid Through</h5>
                            <h2 className="font-bold mb-6 capitalize">02/22</h2>
                            </div>
                            <div>
                            <h5 className="text-gray-600 text-sm leading-5 my-2 w-12">CVV</h5>
                            <h2 className="font-bold mb-6 capitalize border-solid border-b-2 border-cyan-600">201</h2>
                            </div>
                        </div>
                        <div className="w-full flex justify-end mt-12">
                            <button onClick={() => navifgation('/final')} className="uppercase py-3 px-14 bg-gray-700 text-white rounded-md">
                                pay #180,000
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetail