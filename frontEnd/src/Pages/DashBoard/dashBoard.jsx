import { Grid, Tab } from "@mui/material";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import MainDashBoard from "./MainDashBoard";
import Calendar from "../../common-ui/Calender";
import Token from "../../Redux/Token";
import AlertMsg from "../../common-ui/AlertBox";
import { Link } from 'react-router-dom'
import HomePage from "../Home/homeDashboard";
import AddTrips from "../Home/AddTrips";
import ViewOffers from "../Home/GetOffers";
import UserStore from "../Home/Store";

const events = [
  {
    title: "New Year's Day",
    start: "2025-01-01T00:00:00",
    description: "Celebration of the first day of the year.",
    backgroundColor: "#FFD700",
    textColor: "#000000",
  },
  {
    title: "Republic Day",
    start: "2025-01-26T00:00:00",
    description: "Celebration of the adoption of the Indian Constitution.",
    location: "National Celebrations",
    backgroundColor: "#3E8E41",
    textColor: "#ffffff",
  },
  {
    title: "Good Friday",
    start: "2025-04-18T00:00:00",
    description: "Commemoration of the crucifixion of Jesus Christ.",
    backgroundColor: "#C71585",
    textColor: "#ffffff",
  },
  {
    title: "Labour Day",
    start: "2025-05-01T00:00:00",
    description: "Celebration of workers and their contributions.",
    backgroundColor: "#FF6347",
    textColor: "#ffffff",
  },
  {
    title: "Independence Day",
    start: "2025-08-15T00:00:00",
    description: "Celebration of India's independence from British rule.",
    location: "National Celebrations",
    backgroundColor: "#ff5733",
    textColor: "#ffffff",
  },
  {
    title: "Gandhi Jayanti",
    start: "2025-10-02T00:00:00",
    description: "Commemoration of Mahatma Gandhi's birth.",
    location: "National Memorials",
    backgroundColor: "#8B4513",
    textColor: "#ffffff",
  },
  {
    title: "Diwali",
    start: "2025-11-01T00:00:00",
    description: "Festival of lights celebrated by Hindus across India.",
    backgroundColor: "#FF4500",
    textColor: "#ffffff",
  },
  {
    title: "Christmas Day",
    start: "2025-12-25T00:00:00",
    description: "Celebration of the birth of Jesus Christ.",
    location: "Churches, Homes",
    backgroundColor: "#008000",
    textColor: "#ffffff",
  },
  {
    title: "Eid al-Fitr",
    start: "2025-04-20T00:00:00",
    description: "Celebration marking the end of Ramadan.",
    backgroundColor: "#32CD32",
    textColor: "#ffffff",
  },
  {
    title: "Eid al-Adha",
    start: "2025-06-26T00:00:00",
    description: "Celebration of sacrifice and generosity.",
    backgroundColor: "#FF6347",
    textColor: "#ffffff",
  },
  {
    title: "Raksha Bandhan",
    start: "2025-08-05T00:00:00",
    description: "Celebration of the bond between brothers and sisters.",
    backgroundColor: "#FFD700",
    textColor: "#000000",
  },
  {
    title: "Ganesh Chaturthi",
    start: "2025-09-05T00:00:00",
    description: "Celebration of Lord Ganesha's birthday.",
    location: "Homes, Temples",
    backgroundColor: "#FF4500",
    textColor: "#ffffff",
  },
  {
    title: "Navratri",
    start: "2025-09-26T00:00:00",
    end: "2025-10-04T23:59:59",
    description: "Nine nights of worship and fasting dedicated to Goddess Durga.",
    location: "Homes, Temples",
    backgroundColor: "#800080",
    textColor: "#ffffff",
  },
  {
    title: "Dussehra",
    start: "2025-10-04T00:00:00",
    description: "Celebration of the victory of good over evil.",
    backgroundColor: "#FF0000",
    textColor: "#ffffff",
  },
  {
    title: "Karva Chauth",
    start: "2025-10-30T00:00:00",
    description: "A fasting ritual observed by married Hindu women.",
    backgroundColor: "#C71585",
    textColor: "#ffffff",
  }
];

function DashBoard() {
  const [errStatus, setErrStatus] = useState('')
  const errClose = (str) => setErrStatus('')
  const handleEvents = (arg) => {
    console.log(arg);

    alert(arg.dateStr)
  }
  const handleDateClick = (info) => {
    alert('Date clicked: ' + info.event._def.extendedProps.description);
  };

  useEffect(() => {
    const data = Token.getUser()
    if (Object.keys(data).length === 0) {
      console.log(data);
      setErrStatus("User Session Expried.Please SignIn Again....!")
    }
  }, [])
  const naviGatePiils = [
    {
      "name": "DASHBOARD",
      "value": "0"
    },

    {
      "name": "EVENTS",
      "value": "1"
    },
    {
      "name": "HOME",
      "value": "2"
    },
    {
      "name": "ADD TRIP",
      "value": "3"
    },
    {
      "name": "VIEW PLANS",
      "value": "4"
    },
    {
      "name": "STORE",
      "value": "5"
    },
  ]
  const [value, setValue] = useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
        <Container>
          <AlertMsg errClose={errClose} errStatus={errStatus} severity={'error'} />
          <Link to={'/'}>LOGOUT</Link>
          <TabContext value={value}>
            <TabList onChange={handleChange}>
              {naviGatePiils.map((tabs) => (
                <Tab label={tabs.name} value={tabs.value} key={tabs.value} />
              ))}
            </TabList>
          </TabContext>
          {value === "0" ?
            <div>
              <MainDashBoard />
            </div>
            : null}
          {value === "1" ?
            <div>
              <h2 className="shadow-sm p-3 mb-2 bg-body-tertiary rounded">Welcome to india</h2>
              <Calendar events={events} dateClick={handleEvents} eventView={handleDateClick} />
            </div> : null}
          {value === "2" ?
            <div>
              <HomePage />
            </div> : null}
          {value === "3" ?
            <div>
              <AddTrips />
            </div> : null}
          {value === "4" ?
            <div>
              <ViewOffers />
            </div> : null}
          {value === "5" ? <UserStore /> : null}

        </Container>
    </>

  )
}

export default DashBoard;