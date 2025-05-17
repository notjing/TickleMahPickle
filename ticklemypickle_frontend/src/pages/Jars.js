import React from "react";
import { Box, Tabs, Tab, Typography, Paper, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { Group, AccountCircle, Receipt, MoreHoriz } from "@mui/icons-material";

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
  marginBottom: "1rem",
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
  gap: "1rem",
});

const GroupName = styled(Typography)({
  fontFamily: "Alumni Sans Pinstripe, sans-serif",
  fontSize: "3.5rem",
  fontWeight: 1000
});

const PlaceholderDetails = styled(Box)({
  textAlign: "right",
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
            <Typography>Placeholder Info A</Typography>
            <Typography>Placeholder Info B</Typography>
          </PlaceholderDetails>
        </HeaderBar>
        <Paper sx={{ backgroundColor: colors.medium }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab icon={<AccountCircle />} iconPosition="start" label="Members" />
            <Tab icon={<Receipt />} iconPosition="start" label="Transactions" />
            <Tab icon={<MoreHoriz />} iconPosition="start" label="Other" />
          </Tabs>
        </Paper>
        <TabPanel value={tabValue} index={0}>
          <StyledHeading>Members</StyledHeading>
          <StyledTable>
            <thead>
              <tr>
                <StyledTh>Name</StyledTh>
                <StyledTh>Email</StyledTh>
              </tr>
            </thead>
            <tbody>
              {[{ name: "John Doe", email: "john@example.com" }, { name: "Jane Smith", email: "jane@example.com" }].map((member, i) => (
                <TableRow key={i} index={i}>
                  <StyledTd>{member.name}</StyledTd>
                  <StyledTd>{member.email}</StyledTd>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <StyledHeading>Transactions</StyledHeading>
          <ul>
            <li>John paid $50 for dinner</li>
            <li>Jane paid $30 for groceries</li>
          </ul>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <StyledHeading>Other Content</StyledHeading>
        </TabPanel>
      </MainContent>
    </Container>
  );
}

export default Jars;
