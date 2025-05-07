import {NavLink} from "react-router";

export function College() {
    return (
        <div className="college" style={{textAlign: "center"}}>
        <h2>College Section</h2>
        <NavLink to="/" className="link">Student</NavLink>
        <NavLink to="/" className="link">Department</NavLink>

        <NavLink to="/" className="link">College Details</NavLink>
        </div>
    )
}
