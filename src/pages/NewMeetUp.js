import NewMeetupForm from '../component/meetups/NewMeetupForm';
import {useNavigate} from 'react-router-dom';
 
function NewMeetUpPage(){
const nav = useNavigate();
    function sendData(formData){
        fetch('https://react-test-b2f50-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(formData),
            headers:{
                'Content-Type': 'application/json'

            }
        }).then((res)=>{
            console.log(res);

        }

        ).catch((err)=>{
            console.log(err);
        }
        ).finally(()=>{
            nav('/');
        })


 
    }


    return <section>
        <h1>Add New Meetup </h1>
        <NewMeetupForm onFill={sendData}/>
    </section>
    }

export default NewMeetUpPage;