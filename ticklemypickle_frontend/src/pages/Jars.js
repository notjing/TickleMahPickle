import React from "react";
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
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";


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
  backgroundColor: colors.background,
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
  overflow: "hidden"
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
  backgroundImage: "url('https://i.ibb.co/d0W13q5W/bg.png')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "calc(100vh - 150px)",
  width: "100%",
  padding: 10
});

const cardData = [
  { title: "Total Members", value: 8, icon: <icons.Group /> },
  { title: "Total Debt", value: "$124.56", icon: <icons.AttachMoney /> },
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
      style={{ flexGrow: 1, display: value === index ? "block" : "none" }}
    >
      <TabContentBox>{children}</TabContentBox>
    </div>
  );
}

const cardStyle = {
  borderRadius: "32px",
  boxShadow: "0 8px 32px 0 rgba(83,125,93,0.18)",
  background: "rgba(158, 188, 138, 0.78)",
  border: "none",
  minHeight: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 3
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
  { title: "Net Balance", value: "$49.13" }
];


function Jars() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <MainContent>
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
            indicatorColor="secondary"
            textColor="inherit"
          >
            <CompactTab icon={<icons.AccountCircle />} iconPosition="start" label="Members" />
            <CompactTab icon={<icons.Receipt />} iconPosition="start" label="Transactions" />
            <CompactTab icon={<icons.MoreHoriz />} iconPosition="start" label="Other" />
          </StyledTabs>
        </Paper>

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
                { name: "Jane Smith", email: "jane@example.com", owedToMe: "$0.00", iOwe: "$10.00" }
              ].map((member, i) => (
                <TableRow key={i} index={i}>
                  <StyledTd>{member.name}</StyledTd>
                  <StyledTd>{member.email}</StyledTd>
                  <StyledTd>{member.owedToMe}</StyledTd>
                  <StyledTd>{member.iOwe}</StyledTd>
                  <StyledTd>
                    <TickleButton variant="outlined" size="small">😉 Tickle</TickleButton>
                    <KickButton variant="outlined" size="small">Kick</KickButton>
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
                <StyledTh><IconLabel icon={<icons.MonetizationOn />} label="Amount" /></StyledTh>
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
                  <StyledTd style={{ color: tx.type === "Debt Created" ? "red" : "green" }}>
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

        <TabPanel value={tabValue} index={2}> {/* Other Content Tab */}
      {/* Row 1: Mood Tracker */}
<Grid container spacing={2}>
  <Grid item xs={12}>
    <Card sx={{ ...cardStyle, minHeight: 150 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#193b02",
            textAlign: "center",
            marginBottom: 1
          }}
        >
          How are we feeling?
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          This is a placeholder for a mood tracker, sentiment analysis, or general group vibes summary.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>

{/* Row 2: Stats Cards */}
<Grid container spacing={2} sx={{ marginTop: 0.5 }}>
  {stats.map(({ title, value }) => (
    <Grid item xs={12} md={3} key={title}>
      <Card sx={cardStyle}>
        <CardContent sx={{ width: "100%", padding: 0, textAlign: "center" }}>
          <Typography
            sx={{ fontSize: "1.1rem", color: "#537D5D", fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "2.2rem",
              fontWeight: 800,
              color: "#193b02",
              marginTop: "0.5rem"
            }}
          >
            {value}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

{/* Row 3: Debts Over Time Chart */}
<Box sx={{ width: '100%' }}>
<Grid container spacing={2} sx={{ marginTop: 0.5 }}>
  <Grid item xs={12}>
    <Card sx={{ ...cardStyle, minHeight: 320, width: "100%" }}>
      <CardHeader
        title="Debts Over Time"
        sx={{
          color: "#193b02",
          fontWeight: 700,
          fontSize: "1.3rem",
          textAlign: "center",
          paddingBottom: 0,
          marginBottom: 2
        }}
      />
      <CardContent sx={{ width: "100%", paddingTop: 0 }}>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={debtHistory}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="John" stroke="#8884d8" />
            <Line type="monotone" dataKey="Jane" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </Grid>
</Grid>
</Box>
        </TabPanel>
      </MainContent>
    </Container>
  );
}

export default Jars;
