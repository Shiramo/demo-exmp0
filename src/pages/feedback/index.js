import FeedbackForm from "@/components/meetups/FeedbackForm";
import TelegramBot from 'node-telegram-bot-api';


export default function FeedbackPage(){
    console.log('11');
    async function addMeetupHandler(meetupData){
        console.log('FeedbackPage ', meetupData);
        const response = await fetch('/api/feedback', {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type':'application/json'
            }

        });
        const data = await response.json();
    }
    return <FeedbackForm onAddMeetup={addMeetupHandler} />
}