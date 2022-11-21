import { useContext } from 'react';
import FavContext from '../../store/FavoritesContext';
import Card from '../ui/card';
import classes from './meetupitem.module.css';

function MeetupItem(props){
const favctx = useContext(FavContext);
let isFav= favctx.isFavItem(props.id);
function favHandler(){
    if(isFav){
        favctx.removeFavorites(props.id);
    }
    else{
        favctx.addFavorites({
            id:props.id,
            address:props.address,
            title:props.title,
            image:props.image,
            description:props.description
        })
    }

}


return <Card> <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={favHandler}>{isFav? 'Remove From Favorites': 'Add To Favorties'}</button>
        </div>        
    </li>
    </Card>;

}
export default MeetupItem;