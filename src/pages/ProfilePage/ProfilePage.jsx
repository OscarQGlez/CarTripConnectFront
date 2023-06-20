import React from "react";
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





function ProfilePage() {

  return (
    <Container>
      <h1>My profile</h1>

      <Card>
        <Avatar
          sx={{ width: "150px", height: "150px" }}
          src={image}
          alt="Avatar"
        />
        <List>
          <ListItem>
            <ListItemText
              primary="Nombre"
              primaryTypographyProps={{ fontSize: "16px" }}
              secondary="María Pérez"
              secondaryTypographyProps={{ fontSize: "20px" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Edad"
              primaryTypographyProps={{ fontSize: "16px" }}
              secondary="30 años"
              secondaryTypographyProps={{ fontSize: "20px" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Ubicación"
              primaryTypographyProps={{ fontSize: "16px" }}
              secondary="La Aldea"
              secondaryTypographyProps={{ fontSize: "20px" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Vehículo"
              primaryTypographyProps={{ fontSize: "16px" }}
              secondary="Caddy"
              secondaryTypographyProps={{ fontSize: "20px" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Rating"
              primaryTypographyProps={{ fontSize: "16px" }}
              secondary="10"
              secondaryTypographyProps={{ fontSize: "20px" }}
            />
          </ListItem>
        </List>
      </Card>
    </Container>
  );
}

export default ProfilePage;
