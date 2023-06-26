import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function FeedbackForm(props) {
    const titleInputRef = useRef();
    // const imageInputRef = useRef();
    // const addressInputRef = useRef();
    // const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredMessage = titleInputRef.current.value;

        console.log('FeedbackForm', enteredMessage);
        // const enteredImage = imageInputRef.current.value;
        // const enteredAddress = addressInputRef.current.value;
        // const enteredDescription = descriptionInputRef.current.value;

        // const meetupData = {
        //     title: enteredTitle,
        //     image: enteredImage,
        //     address: enteredAddress,
        //     description: enteredDescription,
        // };

        const meetupData = {
            message: enteredMessage,
        };

        props.onAddMeetup(meetupData);

        titleInputRef.current.value = "";
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Message</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Send message to Telegram Bot</button>
                </div>
            </form>
        </Card>
    );
}

export default FeedbackForm;
