import { faHome, faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigation  = useNavigate();
    return (
        <div className="max-h-screen max-w-full ">
            <div className="w-full h-full bg-white-bg">
                <div className="w-11/12 mx-auto">
                <div className="w-full h-10"></div>
                    <div className="w-full h-28 bg-dep-gre rounded-lg ">
                        <div className="w-11/12 mx-auto">
                            <div className="flex justify-between  pt-10">
                                <FontAwesomeIcon icon={faHomeAlt} className="text-white text-2xl hover:cursor-pointer" onClick={()=> navigation('/')}/>
                                <h3 className="capitalize text text-3xl text-white font-bold">
                                    About us
                                </h3>
                                <h3></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 mt-6 mx-auto flex justify-between">
                    <div className=" rounded-md shadow-md w-5/12 h-52 bg-white">
                        <img src={"../../src/assets/photo_2025-01-20_08-28-26.JPG"}  className="w-full h-full"/>
                    </div>
                    <div className=" w-5/12 h-52 ">
                     <div className="w-11/12 mx-auto">
                        <h2 className="mt-4 text-2xl font-bold capitalize text-dep-gre">
                            Empowering Nigerian Artist
                        </h2>
                        <p className="mt-4 leading-16 ">
                            At ArtLynk, we believe in the transformative power of art and the boundless creativity of Nigerian artists. Our platform is designed to bridge the gap between artistic expression and global opportunities.
                        </p>
                     </div>
                    </div>
                </div>
                <div className="w-11/12 mt-6 mx-auto">
                <div className="w-5/12">
                    <h2 className="mt-4 text-2xl font-bold capitalize text-dep-gre">
                        Our Mission
                    </h2>
                    <p className="mt-4 leading-16 ">
                        Our mission is to empower Nigerian artists by providing them with a platform that highlights thier talent, connects them to a wider audience.
                    </p>
                </div>
                <div className="w-full flex justify-end">
                    <div className="w-5/12 text-end">
                        <h2 className="mt-4 text-end text-2xl font-bold capitalize text-dep-gre">
                            who we are
                        </h2>
                        <p className="mt-4 text-end leading-16 ">
                            ArtLynk was created by a team passionate about art, technology and storytelling. Our goal is to provide artists with a space where thier voices are heard, their art is appreciated and stories shared
                        </p>
                    </div>
                </div>
                <div className="w-full justify-between flex mt-10">
                    <div className="w-5/12">
                        <h2 className="mt-4 text-2xl font-bold capitalize text-dep-gre">
                                what we do
                        </h2>
                        <div className="w-11/12 px-2 my-2 h-16 rounded-lg bg-dep-gre text-white">
                            <span className=" font-bold capitalize text-lg">audience reach: </span> visibility for artists through targeted campaigns.
                        </div>
                        <div className="w-11/12 px-2 my-2 h-16 rounded-lg bg-dep-gre text-white">
                            <span className=" font-bold capitalize text-lg">Payment solutions: </span> Secure and flexible payment options, including bank transfers.
                        </div>
                        <div className="w-11/12 px-2 my-2 h-16 rounded-lg bg-dep-gre text-white">
                            <span className=" font-bold capitalize text-lg">exhibition updates: </span> Information on art exhibitions to showcase works.
                        </div>
                    </div>
                    <div className=" rounded-md shadow-md w-5/12 h-80 bg-white">
                        <img src={"../../src/assets/photo_2025-01-20_08-28-28.jpg"} className="w-full"/>
                    </div>
                </div>
                <div className="w-full h-44">

                </div>
                </div>
                <div className="w-full text-center  h-48 rounded-t-4xl bg-gradient-to-r from-dep-gre from-90%">
                    <h2 className="font-bold text-xl pt-3 text-white">
                        Join Us
                    </h2>
                    <p className="text-white">
                        Wether you're an artist ready to share your story or a collector looking for authentic <br/>
                        Nigerian art, ArtLynk is the place you. Join us today and be a part of a commiunity that <br/>
                        Celebrates creativity,culture and connection.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About;

