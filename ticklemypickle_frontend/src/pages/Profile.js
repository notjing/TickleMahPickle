import React, { useContext } from "react";
import useUsers, { UserContext } from "../context/DatabaseUsers.js";

import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  Avatar,
  Button,
  Divider,
  Grid,
  Card,
  CardContent,
  CardHeader
} from "@mui/material";
import { styled } from "@mui/system";
import * as icons from "@mui/icons-material";
const colors = {
  dark: "#537D5D",
  lighter: "#73946B",
  medium: "#9EBC8A",
  background: "#D2D0A0",
  tableHeader: "#73946B",
  tableRowLight: "#E8E8C8",
  tableRowDark: "#DCDCAA",
  tableBorder: "#999",
  auraFilledHeading: "#193b02"
};

const MainContent = styled(Box)({
  // backgroundColor: colors.background,
  padding: 0,
  height: "100vh",
  width: "100%",
  fontFamily: "Raleway, sans-serif",
  overflow: "auto",
  boxSizing: "border-box"
});

const Container = styled(Box)({
  display: "flex",
  fontFamily: "Raleway, sans-serif",
  height: "100vh",
  width: "100%",
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  overflow: "hidden"
});

const StyledHeading = styled(Typography)({
  fontFamily: "Alumni Sans Pinstripe, sans-serif",
  fontSize: "4rem",
  fontWeight: 600,
  marginBottom: "-1rem",
  color: colors.auraFilledHeading,
  textAlign: "center",
  display: "block", 
  margin: "2rem auto"

});

const StyledH2 = styled(Typography)({
  fontFamily: "Alumni Sans Pinstripe, sans-serif",
  fontSize: "3rem",
  fontWeight: 600,
  color: colors.auraFilledHeading,
});


const Profile = () => {
  const { userId } = useContext(UserContext);
  const { users } = useUsers();

  // Find the current user by userId
  const currentUser = users.find(user => String(user._id) === String(userId));

  return (
    <MainContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <StyledHeading>
        Name: {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "Not signed in"}
      </StyledHeading>
      <StyledHeading>
        Email: {currentUser ? currentUser.email : "Not signed in"}
      </StyledHeading>
      <StyledHeading>
        Phone: {currentUser ? currentUser.phone : "Not signed in"}
      </StyledHeading>
    </MainContent>
  );
};

export default Profile;
