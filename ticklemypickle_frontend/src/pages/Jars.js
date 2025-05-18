import React from "react";
import { useState } from "react";
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
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import { Mood, TrendingUp, BarChart } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import BasicDatePicker from '../Components/calendar';

import useTransactions from "../context/TransactionContext";
import { use } from "react";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
=======
import jarsContext from '../context/JarsContext.js';

>>>>>>> 8aff61d6cbf85d9cb78d748d92d543337a4ce012

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
  padding: 0,
  height: "100%",
  width: "100%",
  fontFamily: "Raleway, sans-serif",
  overflow: "auto",
  boxSizing: "border-box"
});

const Container = styled(Box)({
  display: "flex",
  fontFamily: "Raleway, sans-serif",
  height: "100%",
  width: "100%",
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  overflow: "hidden"
});

const StyledHeading = styled(Typography)({
  fontFamily: "Alumni Sans Pinstripe, sans-serif",
  fontSize: "5rem",
  fontWeight: 600,
  marginBottom: "-1rem",
  color: colors.auraFilledHeading
});

const StyledH2 = styled(Typography)({
  fontFamily: "Alumni Sans Pinstripe, sans-serif",
  fontSize: "3rem",
  fontWeight: 600,
  color: colors.auraFilledHeading
});

const StyledTable = styled("table")({
  width: "100%",
  borderCollapse: "collapse",
  borderRadius: "12px",
  overflow: "hidden",
});

const StyledTh = styled("th")({
  backgroundColor: colors.tableHeader,
  padding: "12px",
  border: `1px solid ${colors.tableBorder}`,
  fontWeight: 600,
  textAlign: "left"
});

const StyledTd = styled("td")({
  padding: "12px",
  border: `1px solid ${colors.tableBorder}`
});

const TableRow = styled("tr")(({ index }) => ({
  backgroundColor: index % 2 === 0 ? colors.tableRowLight : colors.tableRowDark
}));

const HeaderBar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: colors.lighter,
  borderBottom: `2px solid ${colors.medium}`
});

const GroupInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem"
});

const GroupName = styled(Typography)({
  fontFamily: "Alumni Sans Pinstripe, sans-serif",
  fontSize: "3.5rem",
  fontWeight: 1000
});

const PlaceholderDetails = styled(Box)({
  textAlign: "right",
  fontFamily: "Raleway, sans-serif"
});

const StyledGroupInfo = styled(Typography)({
  fontFamily: "Raleway, sans-serif"
});

const CompactTab = styled(Tab)({
  minHeight: 32,
  paddingTop: 10,
  paddingBottom: 4
});

const StyledTabs = styled(Tabs)({
  padding: 0
});

const TickleButton = styled(Button)({
  fontFamily: "Raleway, sans-serif",
  color: colors.dark,
  borderColor: colors.dark,
  marginRight: "0.5rem"
});

const KickButton = styled(Button)({
  fontFamily: "Raleway, sans-serif",
  color: "red",
  borderColor: "red"
});

const TabContentBox = styled(Box)({
  minHeight: "calc(100vh - 150px)",
  width: "100%",
});

const cardData = [
  { title: "Total Members", value: 8, icon: <icons.Group /> },
  { title: "Total Debt", value: "$124.56", icon: <img src={process.env.PUBLIC_URL + '/debt.png'} alt="debt" style={{ width: 32, height: 32, verticalAlign: 'middle' }} /> },
  { title: "Most Active", value: "Jane Smith", icon: <icons.TrendingUp /> },
  { title: "Info", value: "Updated 1h ago", icon: <icons.Info /> }
];

const IconLabel = ({ icon, label }) => (
  <Box display="flex" alignItems="center" gap={1}>
    {icon}
    {label}
  </Box>
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      style={{ flexGrow: 1, display: value === index ? "block" : "none", padding: "1rem" }}
    >
      <TabContentBox>{children}</TabContentBox>
    </div>
  );
}

const cardStyle = {
  borderRadius: "32px",
  boxShadow: "0 8px 32px 0 rgba(39, 54, 42, 0.18)",
  background: "rgba(158, 188, 138, 0.78)",
  border: "none",
  minHeight: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: '1rem',
  transition: "box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out, background 0.5s ease-in-out",
  "&:hover": {
    boxShadow: "0 12px 20px rgba(36, 52, 40, 0.35)",
    transform: "translateY(-4px)",
    background: "rgba(158, 188, 138, 1)",
  }
};


const debtHistory = [
  { date: "2025-01-01", John: 50, Jane: 30 },
  { date: "2025-02-01", John: 60, Jane: 20 },
  { date: "2025-03-01", John: 45, Jane: 25 },
  { date: "2025-04-01", John: 55, Jane: 15 },
  { date: "2025-05-01", John: 70, Jane: 10 }
];

const stats = [
  { title: "Total Money Owed", value: "$124.56" },
  { title: "Total Money Owed To You", value: "$75.43" },
  { title: "Number of tickles", value: "69" },
  { title: "Number of pickles", value: "[insert member count]" }, // New card
];


function Jars() {
  const {id} = useParams();
  console.log(id); //jars ID
  const [tabValue, setTabValue] = useState(0);

  const [openTickle, setOpenTickle] = useState(false);
  const [tickleTarget, setTickleTarget] = useState(null);
  const [openKick, setOpenKick] = useState(false);
  const [kickTarget, setKickTarget] = useState(null);
  const [openRequest, setOpenRequest] = useState(false);
  const [requestTarget, setRequestTarget] = useState(null);
  const [requestAmount, setRequestAmount] = useState('');
  const [requestDate, setRequestDate] = useState(null);
<<<<<<< HEAD
=======
  const [openSimplify, setOpenSimplify] = useState(false);
  const [openRequestMoney, setOpenRequestMoney] = useState(false);
  const [requestMoneyAmount, setRequestMoneyAmount] = useState('');
  const [requestMoneyDate, setRequestMoneyDate] = useState(null);
>>>>>>> 8aff61d6cbf85d9cb78d748d92d543337a4ce012

  const { transactions, addTransaction, refresh } = useTransactions();
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenTickle = (member) => {
    setTickleTarget(member);
    setOpenTickle(true);
  };
  const handleCloseTickle = () => {
    setOpenTickle(false);
    setTickleTarget(null);
  };
  const handleOpenKick = (member) => {
    setKickTarget(member);
    setOpenKick(true);
  };
  const handleCloseKick = () => {
    setOpenKick(false);
    setKickTarget(null);
  };
  const handleOpenRequest = (member) => {
    setRequestTarget(member);
    setOpenRequest(true);
  };
  const handleCloseRequest = () => {
    setOpenRequest(false);
    setRequestTarget(null);
    setRequestAmount('');
    setRequestDate(null);
  };

  const createTransaction = () => {
    console.log("Creating transaction...");
    console.log("Date," + requestDate);
    addTransaction({
      from: localStorage.getItem('userId'),
      to: "toID",
      date: requestDate,
      amt: requestAmount,
      type: "Request",
      jar: id,
      paid: false
    })
    console.log("Calling addTransactionsToJar with:", id, createdTransaction._id);

<<<<<<< HEAD
    console.log(id);

  }

  return (
    <Container>
      <MainContent>
        <div sx={{borderRadius: 1000, overflow: "hidden"}}>
=======
    addTransactionsToJar(id, createdTransaction._id); //adds transaction to appropriate jar
  }


  const { jars, createJar, addTransactionsToJar} = jarsContext();  



  return (
    <Container>
      <MainContent>
        <div style={{
          borderRadius: 20,
          overflow: "hidden",
          marginTop: '1rem', // Align with sidebar top margin
          marginLeft: '1rem', // Align with sidebar left margin
          marginRight: '1rem', // Align with table and sidebar right margin
        }}>
>>>>>>> 8aff61d6cbf85d9cb78d748d92d543337a4ce012
        <HeaderBar>
          <GroupInfo>
            <Avatar sx={{ width: 56, height: 56 }} />
            <GroupName>Group Name</GroupName>
          </GroupInfo>
          <PlaceholderDetails>
            <StyledGroupInfo>Placeholder Info A</StyledGroupInfo>
            <StyledGroupInfo>Placeholder Info B</StyledGroupInfo>
          </PlaceholderDetails>
        </HeaderBar>

        <Paper sx={{ backgroundColor: colors.medium, py: 0 }}>
          <StyledTabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: colors.dark,
                height: 4,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(39, 54, 42, 0.18)',
              }
            }}
          >
            <CompactTab icon={<icons.AccountCircle />} iconPosition="start" label="Members" />
            <CompactTab icon={<icons.Receipt />} iconPosition="start" label="Transactions" />
            <CompactTab icon={<icons.MoreHoriz />} iconPosition="start" label="Other" />
          </StyledTabs>
        </Paper>
</div>
        <TabPanel value={tabValue} index={0}> {/* Members Tab */}
          <StyledHeading>Members</StyledHeading>
          <Divider sx={{ borderColor: colors.dark, mb: 2 }} />
          <br></br>
          <StyledTable>
            <thead>
              <tr>
                <StyledTh><IconLabel icon={<icons.Person />} label="Name" /></StyledTh>
                <StyledTh><IconLabel icon={<icons.Description />} label="Email" /></StyledTh>
                <StyledTh><IconLabel icon={<icons.MonetizationOn />} label="Owed to Me" /></StyledTh>
                <StyledTh><IconLabel icon={<icons.MonetizationOn />} label="I Owe" /></StyledTh>
                <StyledTh><IconLabel icon={<icons.SyncAlt />} label="Actions" /></StyledTh>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "John Doe", email: "john@example.com", owedToMe: "$15.00", iOwe: "$0.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" },
              ].map((member, i) => (
                <TableRow key={i} index={i}>
                  <StyledTd>{member.name}</StyledTd>
                  <StyledTd>{member.email}</StyledTd>
                  <StyledTd>{member.owedToMe}</StyledTd>
                  <StyledTd>{member.iOwe}</StyledTd>
                  <StyledTd>
                    <TickleButton variant="outlined" size="small" onClick={() => handleOpenTickle(member)}>😉 Tickle</TickleButton>
                    <KickButton variant="outlined" size="small" onClick={() => handleOpenKick(member)}>Kick</KickButton>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        fontFamily: 'Raleway, sans-serif',
                        color: colors.dark,
                        borderColor: colors.dark,
                        marginLeft: '0.5rem',
                        textTransform: 'none',
                        fontWeight: 600
                      }}
                      onClick={() => handleOpenRequest(member)}
                    >
                      Pay Money
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        fontFamily: 'Raleway, sans-serif',
                        color: colors.dark,
                        borderColor: colors.dark,
                        marginLeft: '0.5rem',
                        textTransform: 'none',
                        fontWeight: 600
                      }}
                      onClick={() => {
                        setRequestTarget(member);
                        setOpenRequestMoney(true);
                      }}
                    >
                      Request Money
                    </Button>
                  </StyledTd>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </TabPanel>

        <TabPanel value={tabValue} index={1}> {/* Transactions Tab */}
          <StyledHeading>Transactions</StyledHeading>
          <Divider sx={{ borderColor: colors.dark, mb: 2 }} />
          <br></br>
          <StyledTable>
            <thead>
              <tr>
                <StyledTh><IconLabel icon={<icons.CalendarToday />} label="Date" /></StyledTh>
                <StyledTh><IconLabel icon={<icons.SyncAlt />} label="Type" /></StyledTh>
                <StyledTh><IconLabel icon={<icons.Description />} label="Description" /></StyledTh>
                <StyledTh><IconLabel icon={<img src={process.env.PUBLIC_URL + '/debt.png'} alt="Amount" style={{ width: 28, height: 28, marginRight: 6, verticalAlign: 'middle' }} />} label="Amount" /></StyledTh>
                <StyledTh><IconLabel icon={<icons.Person />} label="Borrower" /></StyledTh>
                <StyledTh><IconLabel icon={<icons.Group />} label="Borrowed From" /></StyledTh>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  date: "2025-05-01", type: "Debt Created", description: "Dinner", amount: "$50",
                  borrower: "John", from: "Jane"
                },
                {
                  date: "2025-05-02", type: "Debt Paid", description: "Groceries", amount: "$30",
                  borrower: "Jane", from: "John"
                }
              ].map((tx, i) => (
                <TableRow key={i} index={i}>
                  <StyledTd>{tx.date}</StyledTd>
                  <StyledTd style={{ color: tx.type === "Debt Created" ? "red" : "green", display: 'flex', alignItems: 'center', gap: 8 }}>
                    {tx.type === "Debt Created" ? (
                      <img src={process.env.PUBLIC_URL + '/debt.png'} alt="debt" style={{ width: 22, height: 22, verticalAlign: 'middle' }} />
                    ) : (
                      <img src={process.env.PUBLIC_URL + '/moneyGain.png'} alt="money gain" style={{ width: 22, height: 22, verticalAlign: 'middle' }} />
                    )}
                    {tx.type}
                  </StyledTd>
                  <StyledTd>{tx.description}</StyledTd>
                  <StyledTd>{tx.amount}</StyledTd>
                  <StyledTd>{tx.borrower}</StyledTd>
                  <StyledTd>{tx.from}</StyledTd>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          {/* Row 2: Stats Cards */}
          <Grid container spacing={2} sx={{ mb: 2, flexWrap: 'nowrap' }}>
            {stats.map(({ title, value }, idx) => (
              <Grid item xs={12} md={3} key={title} sx={{ display: 'flex' }}>
                <Card sx={cardStyle}>
                  <CardContent sx={{ width: "100%", padding: 0.4, textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        color: "#537D5D",
                        fontWeight: 700,
                        fontFamily: 'Raleway, sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                      }}
                    >
                      <TrendingUp /> {title}
                    </Typography>
                    <StyledH2>
                      {value}
                    </StyledH2>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Row 3: Debts Over Time chart (full width, boxed) */}
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 3,
          }}>
            <Card sx={{
              width: '95%',
              background: 'rgba(158, 188, 138, 0.78)',
              borderRadius: '36px',
              boxShadow: '0 8px 32px 0 rgba(39, 54, 42, 0.18)',
              p: 4,
              position: 'relative',
              minHeight: 420,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <icons.BarChart sx={{ fontSize: 48, color: '#537D5D', mr: 1 }} />
                <Typography
                  sx={{
                    fontFamily: 'Alumni Sans Pinstripe, sans-serif',
                    fontSize: '3.2rem',
                    fontWeight: 700,
                    color: '#193b02',
                    letterSpacing: 1,
                  }}
                >
                  Debts Over Time
                </Typography>
              </Box>
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={debtHistory} margin={{ top: 24, right: 32, left: 8, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="6 6" stroke="#b7c9a3" />
                  <XAxis dataKey="date" tick={{ fontFamily: 'Raleway, sans-serif', fontSize: 16, fill: '#537D5D' }} axisLine={{ stroke: '#537D5D' }} tickLine={false} />
                  <YAxis tick={{ fontFamily: 'Raleway, sans-serif', fontSize: 16, fill: '#537D5D' }} axisLine={{ stroke: '#537D5D' }} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: '#f6ffe6', borderRadius: 12, border: '1px solid #b7c9a3', fontFamily: 'Raleway, sans-serif', color: '#537D5D' }}
                    labelStyle={{ fontWeight: 700, color: '#537D5D' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontFamily: 'Raleway, sans-serif', fontSize: 18, color: '#537D5D', paddingTop: 8 }} />
                  <Line type="monotone" dataKey="John" stroke="#6a7bff" strokeWidth={3} dot={{ r: 6, fill: '#fff', stroke: '#6a7bff', strokeWidth: 3 }} activeDot={{ r: 9, fill: '#6a7bff', stroke: '#fff', strokeWidth: 3 }} />
                  <Line type="monotone" dataKey="Jane" stroke="#4ec9b0" strokeWidth={3} dot={{ r: 6, fill: '#fff', stroke: '#4ec9b0', strokeWidth: 3 }} activeDot={{ r: 9, fill: '#4ec9b0', stroke: '#fff', strokeWidth: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Box>
        </TabPanel>

        {/* Tickle Dialog */}
        <Dialog open={openTickle} onClose={handleCloseTickle}>
          <DialogTitle>Send a Tickle</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              {tickleTarget ? `Send a tickle to ${tickleTarget.name}?` : ''}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseTickle} sx={{ color: colors.dark }}>Cancel</Button>
            <Button onClick={handleCloseTickle} variant="contained" sx={{ backgroundColor: colors.dark, '&:hover': { backgroundColor: '#40634a' } }}>Send Tickle</Button>
          </DialogActions>
        </Dialog>

        {/* Kick Dialog */}
        <Dialog open={openKick} onClose={handleCloseKick}>
          <DialogTitle>Kick Member</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              {kickTarget ? `Are you sure you want to kick ${kickTarget.name}?` : ''}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseKick} sx={{ color: colors.dark }}>Cancel</Button>
            <Button onClick={handleCloseKick} color="error" variant="contained">Kick</Button>
          </DialogActions>
        </Dialog>

        {/* Pay Money Dialog */}
        <Dialog open={openRequest} onClose={handleCloseRequest}>
          <DialogTitle>Pay Money</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              {requestTarget ? `Pay money to ${requestTarget.name}?` : ''}
            </Typography>
            <TextField
              label="Amount ($)"
              type="number"
              value={requestAmount}
              onChange={e => setRequestAmount(e.target.value)}
              fullWidth
              margin="normal"
              placeholder="Enter amount"
              InputProps={{
                inputProps: { min: 0, step: 1 }, // Only allow whole dollars
                startAdornment: <span style={{ color: colors.dark, fontWeight: 700, marginRight: 4 }}>$</span>,
                sx: {
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: colors.dark,
                  },
                  '& label.Mui-focused': {
                    color: colors.dark,
                  },
                  '& .MuiInputBase-input:focus': {
                    color: colors.dark,
                  },
                  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: colors.dark,
                  },
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  background: '#f7fbe7',
                  borderRadius: '8px',
                }
              }}
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: colors.dark,
                },
                '& label.Mui-focused': {
                  color: colors.dark,
                },
                '& .MuiInputBase-input:focus': {
                  color: colors.dark,
                },
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: colors.dark,
                },
                fontSize: '1.3rem',
                fontWeight: 700,
                background: '#f7fbe7',
                borderRadius: '8px',
              }}
              inputProps={{
                min: 0,
                step: 1,
                style: {
                  textAlign: 'left',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: colors.dark,
                  letterSpacing: '0.03em',
                  padding: '12px 8px',
                }
              }}
            />
            <Box
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: colors.dark,
                },
                '& label.Mui-focused': {
                  color: colors.dark,
                },
                '& .MuiPickersDay-root.Mui-selected': {
                  backgroundColor: colors.dark,
                },
                '& .MuiPickersDay-root.Mui-selected:hover': {
                  backgroundColor: '#40634a',
                },
                '& .MuiPickersDay-root:focus': {
                  backgroundColor: colors.dark,
                },
                '& .MuiPickersDay-root.Mui-selected.Mui-focusVisible': {
                  backgroundColor: colors.dark,
                },
                '& .MuiPickersDay-root:hover': {
                  backgroundColor: '#e8e8c8',
                },
              }}
            >
              <BasicDatePicker value={requestDate} onChange={setRequestDate} />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseRequest} sx={{ color: colors.dark }}>Cancel</Button>
<<<<<<< HEAD
            <Button onClick={() => {handleCloseRequest(); createTransaction();}} variant="contained" sx={{ backgroundColor: colors.dark, '&:hover': { backgroundColor: '#40634a' } }}>Request</Button>
=======
            <Button onClick={() => {handleCloseRequest(); createTransaction();}} variant="contained" sx={{ backgroundColor: colors.dark, '&:hover': { backgroundColor: '#40634a' } }}>Pay</Button>
          </DialogActions>
        </Dialog>

        {/* Request Money Dialog */}
        <Dialog open={openRequestMoney} onClose={() => setOpenRequestMoney(false)}>
          <DialogTitle>Request Money</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              {requestTarget ? `Request money from ${requestTarget.name}?` : ''}
            </Typography>
            <TextField
              label="Amount ($)"
              type="number"
              value={requestMoneyAmount}
              onChange={e => setRequestMoneyAmount(e.target.value)}
              fullWidth
              margin="normal"
              placeholder="Enter amount"
              InputProps={{
                inputProps: { min: 0, step: 1 },
                startAdornment: <span style={{ color: colors.dark, fontWeight: 700, marginRight: 4 }}>$</span>,
                sx: {
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: colors.dark,
                  },
                  '& label.Mui-focused': {
                    color: colors.dark,
                  },
                  '& .MuiInputBase-input:focus': {
                    color: colors.dark,
                  },
                  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: colors.dark,
                  },
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  background: '#f7fbe7',
                  borderRadius: '8px',
                }
              }}
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: colors.dark,
                },
                '& label.Mui-focused': {
                  color: colors.dark,
                },
                '& .MuiInputBase-input:focus': {
                  color: colors.dark,
                },
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: colors.dark,
                },
                fontSize: '1.3rem',
                fontWeight: 700,
                background: '#f7fbe7',
                borderRadius: '8px',
              }}
              inputProps={{
                min: 0,
                step: 1,
                style: {
                  textAlign: 'left',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: colors.dark,
                  letterSpacing: '0.03em',
                  padding: '12px 8px',
                }
              }}
            />
            <Box
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: colors.dark,
                },
                '& label.Mui-focused': {
                  color: colors.dark,
                },
                '& .MuiPickersDay-root.Mui-selected': {
                  backgroundColor: colors.dark,
                },
                '& .MuiPickersDay-root.Mui-selected:hover': {
                  backgroundColor: '#40634a',
                },
                '& .MuiPickersDay-root:focus': {
                  backgroundColor: colors.dark,
                },
                '& .MuiPickersDay-root.Mui-selected.Mui-focusVisible': {
                  backgroundColor: colors.dark,
                },
                '& .MuiPickersDay-root:hover': {
                  backgroundColor: '#e8e8c8',
                },
              }}
            >
              <BasicDatePicker value={requestMoneyDate} onChange={setRequestMoneyDate} />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenRequestMoney(false)} sx={{ color: colors.dark }}>Cancel</Button>
            <Button onClick={() => {
              setOpenRequestMoney(false);
              // Implement request money logic here
            }} variant="contained" sx={{ backgroundColor: colors.dark, '&:hover': { backgroundColor: '#40634a' } }}>Request</Button>
>>>>>>> 8aff61d6cbf85d9cb78d748d92d543337a4ce012
          </DialogActions>
        </Dialog>

      </MainContent>
    </Container>
  );
}

export default Jars;
