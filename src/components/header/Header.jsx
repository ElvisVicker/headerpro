import { Link, Outlet } from "react-router-dom";
import './Header.css'
export default function Header() {
    return (
        <div className="headerContainer">
            <img className="headerLogo" src="https://img.freepik.com/premium-vector/car-logo-design-simple-modern-concept-vector-eps-10_567423-203.jpg?w=2000" alt="Motors Logo" ></img>
            <div className="listlink">
                <Link to="/home" className="noLinkUnderline">Home</Link>
                <Link to="/home" className="noLinkUnderline">Inventory</Link>
                <Link to="/home" className="noLinkUnderline">Company</Link>
                <Link to="/home" className="noLinkUnderline">Contact</Link>
                <Link to="/home" className="noLinkUnderline">About</Link>
            </div>


           
        </div>

    );
}