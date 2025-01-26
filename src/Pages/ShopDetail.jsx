import { useNavigate } from "react-router-dom"

const ShopDetail = () => {
const navigate =  useNavigate()


    return(
        <div className="max-h-screen max-w-full ">
                <div className="w-full h-full bg-white-bg">
                    <div className="h-20"></div>
                    <div className="w-11/12 flex mx-auto  pt-10">
                        <div>
                            <img src={"../../src/assets/IMG_2144.JPG"} alt="Painter" className="w-72 h-96"/>
                        </div>
                        <div className="w-24"></div>
                        <div className="w-1/2  ">
                            <h3 className="capitalize my-2 text-xl"><span className="font-bold">Title:</span> Echoes of Earth</h3>
                            <p className="text-lg leading-10">
                                <span className="font-bold capitalize">echoes of earth</span> is a captivating collection of clay jars that embodies the timeless connection between humanity and naturak world<br/>
                                Each piece of this collection is shaped by hand, reflecting the earthly, tactile essence of clay as a medium that bridges past and present. The jars with thier organic forms and muted tones, evoke memories of ancient craftmanship.
                            </p>
                            <div className="my-3 text-xl caption-top">
                            <h3><span className="font-bold">price:</span> #180,000</h3>
                            <h3><span className="font-bold">Location:</span> Abeokuta, ogun state</h3>
                            </div>
                            <div>
                                <button onClick={() =>navigate('/payment')} className="bg-black text-white my-2 px-16 py-3">Buy</button>
                            </div>
                            <button onClick={() =>navigate('/')} className="bg-gray-300 capitalize  my-2 px-16 py-3">message</button>
                            <div>
                            <button onClick={() =>alert('Added to cart')} className="bg-gray-300 capitalize  my-2 px-16 py-3">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default ShopDetail