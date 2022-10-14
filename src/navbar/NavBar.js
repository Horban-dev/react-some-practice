import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav">
            <div className="nav_links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default NavBar;