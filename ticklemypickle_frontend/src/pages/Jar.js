import React from "react";
import { Box, Tabs, Tab, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";

const colors = {
  dark: "#537D5D",
  lighter: "#73946B",
  medium: "#9EBC8A",
  background: "#D2D0A0"
};

const Sidebar = styled(Box)({
  width: "200px",
  backgroundColor: colors.dark,
  color: "white",
  padding: "1rem",
  minHeight: "100vh"
});

const MainContent = styled(Box)({
  flexGrow: 1,
  backgroundColor: colors.background,
  padding: "2rem",
  minHeight: "100vh"
});

const Container = styled(Box)({
  display: "flex"
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function Jar() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <Sidebar>
        <Typography variant="h6">Sidebar</Typography>
      </Sidebar>
      <MainContent>
        <Paper sx={{ backgroundColor: colors.medium, mb: 2 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab label="Members" />
            <Tab label="Transactions" />
            <Tab label="Other" />
          </Tabs>
        </Paper>
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6">Members</Typography>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6">Transactions</Typography>
          <ul>
            <li>John paid $50 for dinner</li>
            <li>Jane paid $30 for groceries</li>
          </ul>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6">Other Content</Typography>
        </TabPanel>
      </MainContent>
    </Container>
  );
}

export default Jar;
