import { createContext, useState } from "react";

const FavContext = createContext({
    favorites:[],
    numberOfFav:0,
    addFavorites:(favItem) => {},
    removeFavorites:((itemId)=>{}),
    isFavItem:((itemId)=>{})
});

export function FavContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);
    function addFavorites(favItem){
        setUserFavorites((perv)=>{
            return perv.concat(favItem);
        })
        
    }


    function removeFavorites(meetingId){
        setUserFavorites((prev)=>{
            return prev.filter((item)=>{
                return item.id !== meetingId;
            })

        })
    }

    function isFavItem(itemId){
        return userFavorites.some((item)=>{
           return item.id === itemId;
        })
        

    }
    const context ={
        favorites: userFavorites,
        numberOfFav:userFavorites.length,
        addFavorites: addFavorites,
        removeFavorites:removeFavorites,
        isFavItem:isFavItem
     };

    return (<FavContext.Provider value={context}>
        {props.children}
    </FavContext.Provider>
    );
}

export default FavContext;