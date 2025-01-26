import { useNavigate } from "react-router-dom"

const Shops = () => {

    const navigate = useNavigate()
    return (
        <div className="max-h-screen max-w-full">
            <div className="w-full h-72 bg-green-background">
                <div className="w-11/12 m-auto text-white">
                    <h2 className="text-3xl capitalize pt-6 font-semibold pb-3">
                        Discover Unique<br/> Artworks
                    </h2>
                    <p>Explore and acquire exquisite pieces<br/> from artists around the globe.</p>

                    <div className="w-full flex justify-between capitalize mt-10">
                        <div className="text-center font-bold">
                            10,000+ <br/>
                            artworks available
                        </div>
                        <div className="text-center font-bold">
                            50+ countries<br/>
                            global reach
                        </div>
                        <div className="text-center font-bold">
                            20,000+ <br/>
                            Satisfied collectors
                        </div>
                        <div className="text-center font-bold">
                            500+ <br/>
                            Artist represented
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-11/12 mt-11 mx-auto flex justify-between">
                    <div className=" mx-20 w-80" >
                        <img src={"../../src/assets/IMG_2144.JPG"} alt="Painter" className="rounded-xl w-80 h-60"/>
                        
                        <div className="my-2 w-full capitalize">
                            <h3><span className="font-bold">title:</span> echoes of earth</h3>
                            <h3><span className="font-bold">price:</span> #180,000</h3>
                            <h3><span className="font-bold">Location:</span> Abeokuta, ogun state</h3>
                        </div>
            
                        <div className="my-2 flex w-full justify-end">
                            <button className="px-4 py-1 text-white bg-deep-gre rounded-md" onClick={()=> navigate('/Detail')}>see more...</button>     
                        </div>
                       
                    </div>
                    <div className=" mx-20 w-80" >
                        <img src={"../../src/assets/IMG_2152.JPG"} alt="Painter" className="rounded-xl w-80 h-60"/>
                        
                        <div className="my-2 w-full capitalize">
                            <h3><span className="font-bold">title:</span> ethereal gaze</h3>
                            <h3><span className="font-bold">price:</span> #200,000</h3>
                            <h3><span className="font-bold">Location:</span> enugu, enugu state</h3>
                        </div>
            
                        <div className="my-2 flex w-full justify-end">
                            <button className="px-4 py-1 text-white bg-deep-gre rounded-md">see more...</button>     
                        </div>
                       
                    </div>
                    <div className=" mx-20 w-80" >
                        <img src={"../../src/assets/photo_2025-01-20_08-28-46.JPG"} alt="Painter" className="rounded-xl w-80 h-60"/>
                        
                        <div className="my-2 w-full capitalize">
                            <h3><span className="font-bold">title:</span> threads of culture</h3>
                            <h3><span className="font-bold">price:</span> #150,000</h3>
                            <h3><span className="font-bold">Location:</span> kano, kano state</h3>
                        </div>
            
                        <div className="my-2 flex w-full justify-end">
                            <button className="px-4 py-1 text-white bg-deep-gre rounded-md">see more...</button>     
                        </div>
                       
                    </div>
                </div>  
                <div className="w-11/12 mt-11 mx-auto flex justify-between">
                    <div className=" mx-20 w-80" >
                        <img src={"../../src/assets/IMG_2144.JPG"} alt="Painter" className="rounded-xl w-80 h-60"/>
                        
                        <div className="my-2 w-full capitalize">
                            <h3><span className="font-bold">title:</span> echoes of earth</h3>
                            <h3><span className="font-bold">price:</span> #180,000</h3>
                            <h3><span className="font-bold">Location:</span> Abeokuta, ogun state</h3>
                        </div>
            
                        <div className="my-2 flex w-full justify-end">
                            <button className="px-4 py-1 text-white bg-deep-gre rounded-md">see more...</button>     
                        </div>
                       
                    </div>
                    <div className=" mx-20 w-80" >
                        <img src={"../../src/assets/IMG_2152.JPG"} alt="Painter" className="rounded-xl w-80 h-60"/>
                        
                        <div className="my-2 w-full capitalize">
                            <h3><span className="font-bold">title:</span> ethereal gaze</h3>
                            <h3><span className="font-bold">price:</span> #200,000</h3>
                            <h3><span className="font-bold">Location:</span> enugu, enugu state</h3>
                        </div>
            
                        <div className="my-2 flex w-full justify-end">
                            <button className="px-4 py-1 text-white bg-deep-gre rounded-md">see more...</button>     
                        </div>
                       
                    </div>
                    <div className=" mx-20 w-80" >
                        <img src={"../../src/assets/photo_2025-01-20_08-28-46.JPG"} alt="Painter" className="rounded-xl w-80 h-60"/>
                        
                        <div className="my-2 w-full capitalize">
                            <h3><span className="font-bold">title:</span> threads of culture</h3>
                            <h3><span className="font-bold">price:</span> #150,000</h3>
                            <h3><span className="font-bold">Location:</span> kano, kano state</h3>
                        </div>
            
                        <div className="my-2 flex w-full justify-end">
                            <button className="px-4 py-1 text-white bg-deep-gre rounded-md">see more...</button>     
                        </div>
                       
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Shops