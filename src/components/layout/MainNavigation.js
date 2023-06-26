import classes from './MainNavigation.module.css';
import Link from "next/link";
import NewsletterSignup from "@/components/meetups/FeedbackForm";
import FeedbackForm from "@/components/meetups/FeedbackForm";

function MainNavigation() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/feedback'>Feedback Form</Link>
                    </li>
                    <li>
                        <Link href='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link href='/new-meetup'>Add New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
