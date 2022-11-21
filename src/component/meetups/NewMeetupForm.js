import { useRef } from "react";
import Card from "../ui/card";
import classes from'./NewMeetupForm.module.css';


function NewMeetupForm(props){
    const titleInput = useRef();
    const imageInput = useRef();
    const addressInput = useRef();
    const descriptionInput = useRef();



    function submitHandler(event){
        event.preventDefault();
        const data = {
            title:titleInput.current.value,
            image:imageInput.current.value,
            address:addressInput.current.value,
            description:descriptionInput.current.value
        }

        props.onFill(data);

    }   

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}> 
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleInput}/>
            </div>

            <div className={classes.control}> 
                <label htmlFor="image">Image</label>
                <input type="url" required id="image"  ref={imageInput}/>
            </div>

            <div className={classes.control}> 
                <label htmlFor="address">Address</label>
                <input type="text" required id="address" ref={addressInput}/>
            </div>

            <div className={classes.control}> 
                <label htmlFor="description">Description</label>
                <textarea required id="description"  rows="5" ref={descriptionInput}></textarea>
            </div>
            <div className={classes.actions}> 
            <button>Submit</button>
           </div>
        </form>
    </Card>
}

export default NewMeetupForm;