import { useContext } from "react";
import { Link } from "react-router-dom";
import FavContext from "../../store/FavoritesContext";
import classes from './MainNav.module.css';
function MainNav(){
const favctx = useContext(FavContext)
    return <header className={classes.header}>
        <div className={classes.logo}>header</div>
        <nav>
            <ul>
                <li><Link to="/">All Meetups</Link></li>
                <li><Link to="new-meetup">New Meetups</Link></li>
                <li><Link to="favorites">
                    <span className={classes.badge}>{favctx.numberOfFav}</span> Favorites</Link></li>
            </ul>

        </nav>

    </header>;

}
export default MainNav;