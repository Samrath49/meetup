import MeetupList from '../components/meetups/MeetupList';

const TEMP_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image: 'https://images.unsplash.com/photo-1572112533098-2785b64123da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80',
    address: 'London Eye',
    description: 'Our first meetup is so good'
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image: 'https://images.unsplash.com/photo-1531561452248-84db55b6d9a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    address: 'London Palace',
    description: 'Our Second meetup was wonderful'
  }
];

function HomePage() {
  return <MeetupList meetups={TEMP_MEETUPS} />
}

export default HomePage;