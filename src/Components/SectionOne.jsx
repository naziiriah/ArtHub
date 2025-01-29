import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { faPalette } from "@fortawesome/free-solid-svg-icons/faPalette"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SectionOne = () => {
    return(
        <div className="w-full h-full bg-white-bg">
            <div className="w-full h-20"></div>
            <div className="w-11/12 mx-auto mb-10 flex justify-between">
                <div className="">
                    <p className="font-extrabold mb-2 text-6xl text-dep-gre capitalize ">
                        Discover and own <br/> unique art pieces
                    </p>
                    <div className="flex justify-between mt-6 font-semibold">
                        <div className="bg-deep-gre px-6 rounded-xl py-2 text-white text-center uppercase">
                            explore collections
                        </div>
                        <div className="bg-white px-6 rounded-xl py-2 text-dep-gre border-2 border-solid border-deep-gre text-center uppercase">
                            join our community
                        </div>
                    </div>
                </div>
                <div className="w-10"></div>
                <div className="font-bold">
                    <p>Step into ArtLynk, where creativity thrives and art comes alive.<br/>
                        Explore our curated collections and find the perfect piece <br />
                        thats speaks to your soul
                    </p>
                    <div className="uppercase mt-4 text-dep-gre flex justify-between">
                        <div className="flex">
                            <FontAwesomeIcon icon={faPalette} />
                           <h2>diverse art <br /> styles</h2> 
                        </div>
                        <div className="flex">
                        <FontAwesomeIcon icon={faPeopleGroup} />
                            community of <br /> creatives 
                        </div>
                        <div className="flex">
                        <FontAwesomeIcon icon={faCartShopping}  className=""/>
                            seamless <br /> purchasing
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around ">
                <div className="w-48 h-48 bg-mold bg-cover rounded-lg text-white">
                    
                </div>
                <div className="w-48 h-48 bg-mold-2 bg-cover bg-no-repeat rounded-lg text-white">
                    
                </div>
                <div className="w-48 h-48 bg-mold-3 bg-cover rounded-lg text-white">
                    
                </div>
                <div className="w-48 h-48 bg-mold-4 bg-cover rounded-lg text-white">
                    
                </div>
                <div className="w-48 h-48 bg-mold-5 bg-cover rounded-lg text-white">
                    
                </div>
            </div>
            <div className="w-full h-12"></div>

        </div>
    )
}

export default SectionOne