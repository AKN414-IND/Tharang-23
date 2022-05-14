import { Link } from "react-router-dom";
import classes from "./Dropdown.module.css"

const Dropdown = (props) => {
    return(
        <ul className={classes.dropdown}>
            <li><Link to="/events/cultural" onClick={props.click} className={classes.links}>Culturals</Link></li>
            <li><Link to="/events/technical" onClick={props.click} className={classes.links}>Technical</Link></li>
            <li><Link to="/events/hacakthon" onClick={props.click} className={classes.links}>Hackathon</Link></li>
        </ul>
    )
}

export default Dropdown;