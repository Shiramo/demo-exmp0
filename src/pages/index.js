import MeetupList from "@/components/meetups/MeetupList";
import {MongoClient} from "mongodb";
import {Fragment} from "react";
import Head from "next/head";

8n
export default function HomePage(props) {

    return <Fragment>
        <Head>
            <link rel='icon' href='/head.ico' />
            <title>NextJs Meetups</title>
            <meta
                name='description'
                content='Here you can find yourself!'
            />
            <meta name="keywords" content="MetvaRusya, YskiyMir, EveryRusIsGuilty" />
        </Head>
        <MeetupList meetups={props.meetups}/>
    </Fragment>
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://ozhytar:1Shiramo4688cl1@cluster0.hc3gyhn.mongodb.net/meetup?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsConnection = db.collection('meetups');
    const meetups = await meetupsConnection.find().toArray();

    await client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 10
    };
}
