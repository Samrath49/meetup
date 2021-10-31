import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
      <MeetupDetail image={"https://images.unsplash.com/photo-1572112533098-2785b64123da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"} 
      title={"Our first meetup"}
      address={"London Eye"}
      description={"The meetup description"}
      />
  );
}

export default MeetupDetails;
