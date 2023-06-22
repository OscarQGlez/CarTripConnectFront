import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  Card,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import "./ProfilePage.css"
import image from  "../../assets/img/avatar.png";
import Rating from "@mui/material/Rating";
import BasicRating from "./RatingComponent/RatingComponent";
import ProfileCardInfo from "./ProfileCardInfo/ProfileCardInfo";
import { getAlltrips } from "../../services/trip.services";
import MyTrips from "./MyTrips/MyTrips";
import TripDetails from "../TripDetails/TripDetails";
import { red } from "@mui/material/colors";
import '../ProfilePage/ProfilePage.css'






function ProfilePage() {
  const [trips, setTrips] = useState([])

  const getTrips = async () => {
    const result  =await getAlltrips()
    setTrips(result)
  }

  useEffect(() => {
    getTrips()
  }, [])


console.log(trips)


const showTrips = () => {
  if(trips !== 0) {
    return (
      <>
        {/*trips.map((trip, idx) => {
          return (
            <MyTrips key={idx} trip={trip} />
          )
        })*/}
        <MyTrips />
      </>
    );
  }
}
  return (
    <div className="trips-container">
      <ProfileCardInfo />
      <div>{showTrips()}</div>
    </div>
  );
}

export default ProfilePage;
