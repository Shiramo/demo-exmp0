import {Fragment} from "react";
import MeetupDetail from "@/components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from "mongodb";


export default function MeetupDetailsPage(props) {
    return (
        <Fragment>
            <MeetupDetail
                image={props.meetupDate.image}
                title={props.meetupDate.title}
                description={props.meetupDate.description}
                address={props.meetupDate.address}
            />
            <button>HERE Y R</button>
        </Fragment>
    );
}

export async function getStaticPaths(filter, options) {
    const client = await MongoClient.connect('mongodb+srv://ozhytar:1Shiramo4688cl1@cluster0.hc3gyhn.mongodb.net/meetup?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsConnection = db.collection('meetups');
    const meetups = await meetupsConnection.find().toArray();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: {meetupId: meetup._id.toString() },
        }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId.toString();

    const client = await MongoClient.connect('mongodb+srv://ozhytar:1Shiramo4688cl1@cluster0.hc3gyhn.mongodb.net/meetup?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsConnection = db.collection('meetups');
    let selectedMeetup = await meetupsConnection.findOne({_id: new ObjectId(meetupId)})

    const meetupIdString = selectedMeetup._id.toString();

    await client.close();

    return {
        props: {
            meetupDate: {
                id: meetupIdString,
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
                address: selectedMeetup.address,
            },
        }
    };
}