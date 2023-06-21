import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getOrigin } from '../../services/trip.services';
import { getDestination } from "../../services/trip.services";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MediaCard({propCard}) {

    let [card, setCard] = useState(propCard)
    console.log(card);

    useEffect(() => {
        async function getLocations(){
            const destination = await getDestination(propCard.destinationId) 
            const origin = await getOrigin(propCard.originId)
            propCard.origin = origin.location
            propCard.destination = destination.location
            setCard({...propCard})
        }
        getLocations()
    }, [])
    //console.log(card)
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://unsplash.it/1000/450/?random"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Trip
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "16px" }}
          >
            <p>{card.origin}</p>
            <p>{card.destination}</p>
            <p>{card.departure_time.slice(0, 5)}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/tripdetail">
            <Button size="small">View trip</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}