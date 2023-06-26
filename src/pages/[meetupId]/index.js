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

export async function getStaticPaths(filter, options) {
    const client = await MongoClient.connect('mongodb+srv://ozhytar:1Shiramo4688cl1@cluster0.hc3gyhn.mongodb.net/meetup?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsConnection = db.collection('meetups');
    const meetups = await meetupsConnection.find({}, {_id: 1}).toArray();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: {meetupId: meetup._id.toString() },
        }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://ozhytar:1Shiramo4688cl1@cluster0.hc3gyhn.mongodb.net/meetup?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsConnection = db.collection('meetups');
    let selectedMeetup = await meetupsConnection.findOne({_id: new ObjectId(meetupId)})

    if (!selectedMeetup) {
        selectedMeetup._id = new ObjectId('64990c43e321dd9cd510173e');
        selectedMeetup.title = '1 Title';
        selectedMeetup.image = 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/12/ss-1545461061.jpg';
        selectedMeetup.description = 'Some description 1';
    }

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
        }
    };
}