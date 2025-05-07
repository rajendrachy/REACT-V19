import {Link, Outlet} from "react-router";
import './header.css';

export function NavBar() {
    return (
        <div>
        <div className="header">

<div>
    <h3>
    <Link to="/text" className="link"><h2>Logo</h2></Link>
    </h3>
</div>

<div>
<ul>
    <li>
    <Link to="/" className="link">Home</Link>
    </li>

    <li>
    <Link to="/about" className="link">About</Link>
    </li>

    <li>
    <Link to="/text" className="link">Logo</Link>
    </li>


{/* Nasted Navigation */}
    <li>
    <Link to="/college" className="link">College</Link>
    </li>
</ul>
</div>


        </div>
<Outlet />
    </div>
    )
}



