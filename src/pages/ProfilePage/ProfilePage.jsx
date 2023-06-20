import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import "./ProfilePage.css"





function ProfilePage() {
  return (
    <Container className="container1">
      <Typography className="header" variant="h4">
        Nombre del Usuario
      </Typography>
      <Avatar sx={{  width: "200px", height: "200px"}} src="../../assets/img/avatar.png" alt="Avatar" />
      <List>
        <ListItem >
          <ListItemText primary="Nombre" secondary="María Pérez" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Edad" secondary="30 años" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ubicación" secondary="Ciudad, País" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Vehículo" secondary="Vehículo" />
        </ListItem>
      </List>
    </Container>
  );
}

export default ProfilePage;
