import { Fragment } from "react";

function MeetupDetails() {
  return (
    <Fragment>
      <img
        src="https://images.unsplash.com/photo-1572112533098-2785b64123da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
        alt="Our first meetup"
      />
      <h1>A First Meetup</h1>
      <address>London Eye</address>
      <p>The Meetup description</p>
    </Fragment>
  );
}

export default MeetupDetails;
