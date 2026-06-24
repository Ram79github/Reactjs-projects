import React from 'react';
import Card from './Card.jsx';


export default function App(){
  //array of objects inside array there are 10 obj each had separate properties
  const lobOpening = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" ,
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "₹12 LPA",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Google",
    logo:"https://imgs.search.brave.com/MIGGUxXvA8eZP5fR9x6pAwOOVi846wgiFXYQTCH5kqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0y/NDc2NDc5LnBuZz9m/PXdlYnAmdz0xMjg" ,
    posted: "2 days ago",
    title: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "₹18 LPA",
    location: "Bangalore, India",
  },
  {
    id: 3,
    company: "Microsoft",
    logo:"https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png" ,
    posted: "1 week ago",
    title: "React Developer",
    type: "Remote",
    level: "Junior Level",
    salary: "₹10 LPA",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Netflix",
    logo:"https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" ,
    posted: "3 days ago",
    title: "Product Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "₹20 LPA",
    location: "Pune, India",
  },
  {
    id: 5,
    company: "Meta",
    logo:"https://pngimg.com/uploads/meta/meta_PNG12.png" ,
    posted: "4 days ago",
    title: "UI Designer",
    type: "Contract",
    level: "Mid Level",
    salary: "₹14 LPA",
    location: "Delhi, India",
  },
  {
    id: 6,
    company: "Adobe",
    logo:"https://imgs.search.brave.com/NALEoVfLg6FpKK2a8FQsttnCb6-PO-PbBb_WrfjUeH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL2ZyZWUv/dGh1bWIvZnJlZS1h/ZG9iZS0zZC1pY29u/LXBuZy1kb3dubG9h/ZC03NTE2ODc4LnBu/Zw" ,
    posted: "6 days ago",
    title: "UX Researcher",
    type: "Full Time",
    level: "Senior Level",
    salary: "₹16 LPA",
    location: "Noida, India",
  },
  {
    id: 7,
    company: "Spotify",
    logo: "https://imgs.search.brave.com/S59QEtLOynkPW1H4O5Q7tVDnBZ5rmgwsjHdRDJumgBk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXNwb3RpZnktaWNv/bi1zdmctZG93bmxv/YWQtcG5nLTkwOTAy/OTYucG5nP2Y9d2Vi/cCZ3PTEyOA",
    posted: "1 day ago",
    title: "Web Designer",
    type: "Remote",
    level: "Junior Level",
    salary: "₹8 LPA",
    location: "Chennai, India",
  },
  {
    id: 8,
    company: "Tesla",
    logo:"https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png" ,
    posted: "2 weeks ago",
    title: "UI Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "₹22 LPA",
    location: "Ahmedabad, India",
  },
  {
    id: 9,
    company: "Uber",
    logo: "https://imgs.search.brave.com/OFni6Lwgvu4aKdGJzvPPebhxK3DlI-DQc9d44djyvGo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi91YmVyLWlj/b24tc3ZnLWRvd25s/b2FkLXBuZy0xMTk2/MDg3Mi5wbmc_Zj13/ZWJwJnc9MTI4",
    posted: "3 days ago",
    title: "Frontend Engineer",
    type: "Full Time",
    level: "Mid Level",
    salary: "₹15 LPA",
    location: "Kolkata, India",
  },
  {
    id: 10,
    company: "Airbnb",
    logo: "https://imgs.search.brave.com/_0kHGxtuXnWcQeWzVtxrjd8XDYyrJ9g7ZR7Ry7fGrl0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvQWly/Ym5iLVBORy1QaWN0/dXJlLnBuZw",
    posted: "1 week ago",
    title: "Senior Product Designer",
    type: "Remote",
    level: "Senior Level",
    salary: "₹19 LPA",
    location: "Goa, India",
  },
];
console.log({lobOpening})
    return (
      //mapping jobOpening array and return cad component to pass props  and 10 cards for jobs
        <div className="parent">
           {lobOpening.map((job)=>{
            return(
              <Card
      // sending props// 
    company={job.company}
    logo={job.logo}
    posted= {job.posted}
    title={job.title}
    type={job.type}
    level={job.level}
    salary={job.salary}
    location={job.location}/>
            )
           })}
        </div>
    );
}