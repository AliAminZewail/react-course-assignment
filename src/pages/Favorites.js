import { useContext } from "react";
import MeetupList from "../component/meetups/MeetupList";
import FavContext from "../store/FavoritesContext";

function FavioratePage(){

const favctx = useContext(FavContext);

return <section>
                <h1>All Meetups</h1>
                
                 <MeetupList meetups={favctx.favorites}></MeetupList>
          
          </section>
  
}

export default FavioratePage;