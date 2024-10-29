/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className="w-full mx-auto text-center">
            <h2>Navbar</h2>
            <nav className="flex justify-center gap-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/posts">Post</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;