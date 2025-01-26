import { faBell, faComments, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {

    return <div className="w-full flex justify-between h-16 mt-4">
        <div>

        </div>
        <div className="flex justify-evenly w-80">
            <a href="/" className="">Home</a>
            <a href="/Artists" className="">Artist</a>
            <a href="/Shop" className="">Shop</a>
            <a href="/Exhibition" className="">Exhibition</a>
            <a href="/Gallery" className="">Gallery</a>
            <a href="/about" className="">About Us</a>
        </div>
        <div className="flex w-40">
            <FontAwesomeIcon icon={faComments} className="w-5 mx-3"/>
            <FontAwesomeIcon icon={faBell} className="w-5 mx-3"/>
            <FontAwesomeIcon icon={faShoppingCart} className="w-5 mx-3"/>
        </div>
    </div>
}

export default NavBar;