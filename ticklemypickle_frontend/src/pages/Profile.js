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
      <Paper elevation={3} sx={{
        padding: '2.5rem 3.5rem',
        borderRadius: '32px',
        background: 'rgba(255,255,255,0.95)',
        boxShadow: '0 8px 32px 0 rgba(39, 54, 42, 0.18)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 420,
        width: '100%',
        margin: '3rem auto',
      }}>
        <Avatar
          src={require('./pfp.jpeg')}
          alt="Profile Picture"
          sx={{ width: 120, height: 120, marginBottom: 2, boxShadow: '0 2px 12px 0 rgba(83, 125, 93, 0.18)' }}
        />
        <StyledHeading sx={{ fontSize: '2.2rem', margin: '1.2rem 0 0.5rem 0', fontWeight: 700, color: colors.auraFilledHeading, textAlign: 'center' }}>
          {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "[Full Name]"}
        </StyledHeading>
        <Typography sx={{ color: '#537D5D', fontSize: '1.15rem', marginBottom: 1, fontWeight: 500, textAlign: 'center' }}>
          {currentUser ? currentUser.email : "[Email]"}
        </Typography>
        <Typography sx={{ color: '#537D5D', fontSize: '1.1rem', marginBottom: 2, textAlign: 'center' }}>
          {currentUser ? currentUser.phone : "[Phone Number]"}
        </Typography>
        <Divider sx={{ width: '100%', my: 2, background: colors.medium }} />
        <Button
          variant="contained"
          sx={{
            background: colors.dark,
            color: '#fff',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 16,
            textTransform: 'none',
            boxShadow: '0 2px 8px 0 rgba(83, 125, 93, 0.10)',
            width: '100%',
            py: 1.2,
            mt: 1
          }}
        >
          Manage your TickleMahPickle Account
        </Button>
      </Paper>
    </MainContent>
  );
};

export default Profile;
