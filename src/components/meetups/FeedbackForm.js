import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function FeedbackForm(props) {
    const titleInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();

        const enteredMessage = titleInputRef.current.value;

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
