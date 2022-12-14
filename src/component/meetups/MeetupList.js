import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

function MeetupList(props){
    return <ul className={classes.list}>
            {props.meetups.map((meetup)=>{
                return <MeetupItem key={meetup.id}
                id={meetup.id}  
                image={meetup.image}
                title={meetup.title}
                description={meetup.description}
                address={meetup.address}
                />
            })}
        </ul>



}


export default MeetupList;