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
        </Fragment>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://ozhytar:1Shiramo4688cl1@cluster0.hc3gyhn.mongodb.net/meetup?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsConnection = db.collection('meetups');
    const meetups = await meetupsConnection.find({}, { _id: 1 }).toArray();

    const paths = meetups.map((meetup) => ({
        params: {meetupId: meetup._id.toString() },
    }));

    return {
        fallback: true,
        paths
    }
}

export async function getStaticProps(context) {
    console.log('id :', context);
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://ozhytar:1Shiramo4688cl1@cluster0.hc3gyhn.mongodb.net/meetup?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsConnection = db.collection('meetups');
    const selectedMeetup = await meetupsConnection.findOne({_id: new ObjectId(meetupId)})

    await client.close();

    return {
        props: {
            meetupDate: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
                address: selectedMeetup.address,
            },
        },
        revalidate: 10
    };
}