
import { useEffect, useState } from 'react';
import MeetupList from '../component/meetups/MeetupList'
let meetups=[];

function AllMeetUpsPage(){

  const [isLoaded, setLoaded] = useState(false);
useEffect(()=>{
  fetch('https://react-test-b2f50-default-rtdb.firebaseio.com/meetups.json')
  .then((res)=>{
    return res.json();
  }).then((data)=>{
     meetups=[];
    for(let key in data){
      const temp={
        id:key,
        ...data[key]
      }
      meetups.push(temp);
      console.log(meetups);
    }
    setLoaded(true);
  })}, []);


    if(isLoaded){
      return <section>
                  <h1>All Meetups</h1>
                  <MeetupList meetups={meetups}></MeetupList>
          
          </section>
    }

    return<section>
      <h1>Loading</h1>

    </section>
}

export default AllMeetUpsPage;