import FeedbackForm from "@/components/meetups/FeedbackForm";

export default function FeedbackPage(){
    async function addMeetupHandler(meetupData){

        const response = await fetch('/api/feedback', {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type':'application/json'
            }

        });
        // counter = counter + 1;
        const data = await response.json();
    }
    return <FeedbackForm onAddMeetup={addMeetupHandler} />
}