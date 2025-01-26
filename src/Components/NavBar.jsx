import { faBell, faComments, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
const navi = useNavigate()
    return <div className="w-full flex justify-between h-16 mt-4">
        <div>

        </div>
        <div className="flex justify-evenly w-80">
            <div onClick={() => navi("/")} className="">Home</div>
            <div onClick={() => navi("/Artists")} className="">Artist</div>
            <div onClick={() => navi("/Shop")} className="">Shop</div>
            <div onClick={() => navi("/Exhibition" )} className="">Exhibition</div>
            <div onClick={() => navi("/Gallery")}  className="">Gallery</div>
            <div onClick={() => navi("/about")} className="">About Us</div>
        </div>
        <div className="flex w-40">
            <FontAwesomeIcon icon={faComments} className="w-5 mx-3"/>
            <FontAwesomeIcon icon={faBell} className="w-5 mx-3"/>
            <FontAwesomeIcon icon={faShoppingCart} className="w-5 mx-3"/>
        </div>
    </div>
}

export default NavBar;