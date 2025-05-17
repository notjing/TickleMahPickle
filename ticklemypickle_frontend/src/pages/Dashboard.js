import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider
} from "@mui/material";
import { styled } from "@mui/system";
import { TrendingUp, Group, AttachMoney, AccessTime, History } from "@mui/icons-material";


const colors = {
  dark: "#537D5D",
  lighter: "#73946B",
  notSoLight: "#485e42",
  medium: "#9EBC8A",
  background: "#D2D0A0",
  tableHeader: "#73946B",
  tableRowLight: "#E8E8C8",
  tableRowDark: "#DCDCAA",
  tableBorder: "#999",
  auraFilledHeading: "#193b02"
};

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
  width: "100%",
  boxSizing: "border-box",
  "&:hover": {
    boxShadow: "0 12px 20px rgba(36, 52, 40, 0.35)",
    transform: "translateY(-4px)",
    background: "rgba(158, 188, 138, 1)",
  },
};

const StyledHeading = styled(Typography)({
  fontFamily: "Alumni Sans Pinstripe, sans-serif",
  fontSize: "5rem",
  fontWeight: 600,
  marginBottom: "-1rem",
  color: "#193b02"
});

const StyledH2 = styled(Typography)({
  fontFamily: "Alumni Sans Pinstripe, sans-serif",
  fontSize: "3rem",
  fontWeight: 600,
  color: "#193b02"
});
const StyledTable = styled("table")({
  width: "100%",
  borderCollapse: "collapse",
  borderRadius: "12px",
  overflow: "hidden",
  fontFamily: "Raleway"
});

const StyledTh = styled("th")({
  backgroundColor: colors.tableHeader,
  padding: "12px",
  border: `1px solid ${colors.tableBorder}`,
  fontWeight: 600,
  textAlign: "left",
  fontFamily: "Raleway"
});

const StyledTd = styled("td")({
  padding: "12px",
  border: `1px solid ${colors.tableBorder}`,
  fontFamily: "Raleway"
});

const TableRow = styled("tr")(({ index }) => ({
  backgroundColor: index % 2 === 0 ? colors.tableRowLight : colors.tableRowDark,
  fontFamily: "Raleway"
}));

const StyledTypography = styled("Typography")({
  fontFamily: "Raleway"
});
const StyledDescription = styled("Typography")({
    fontFamily: "Raleway",
    color: colors.notSoLight
});

export default function Dashboard() {
  return (
    <Box sx={{ padding: 2 }}>
      <StyledHeading>Welcome back! 🥒</StyledHeading>
      <Divider sx={{ borderColor: colors.dark, mb: 2 }} />
          <br></br>

      {/* Top Row - 3 Cards */}
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
  <Box sx={{ flex: 1 }}>
    <Card sx={{ ...cardStyle, width: "100%", height: "100%" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <div style={{
                background: 'rgba(83,125,93,0.13)',
                borderRadius: '50%',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1.2rem',
                fontSize: '2.2rem',
                color: '#537D5D',
                boxShadow: '0 2px 8px 0 rgba(83,125,93,0.08)',
                margin: "auto",
              }}>
                <span role="img" aria-label="money with wings">💸</span>
              </div>
        <StyledH2>$69696969</StyledH2>
        <StyledDescription>Total Money Owed</StyledDescription>
      </CardContent>
    </Card>
  </Box>
  <Box sx={{ flex: 1 }}>
    <Card sx={{ ...cardStyle, width: "100%", height: "100%" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <div style={{
                background: 'rgba(83,125,93,0.13)',
                borderRadius: '50%',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1.2rem',
                fontSize: '2.2rem',
                color: '#537D5D',
                margin: "auto",
                boxShadow: '0 2px 8px 0 rgba(83,125,93,0.08)'
              }}>
                <span role="img" aria-label="money bag">💰</span>
              </div>
        <StyledH2>$69420</StyledH2>
        <StyledDescription>Total Money Owed To You</StyledDescription>
      </CardContent>
    </Card>
  </Box>
  <Box sx={{ flex: 1 }}>
    <Card sx={{ ...cardStyle, width: "100%", height: "100%" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <div style={{
                background: 'rgba(83,125,93,0.13)',
                borderRadius: '50%',
                width: 56,
                height: 56,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1.2rem',
                fontSize: '2.2rem',
                margin: "auto",
                color: '#537D5D',
                boxShadow: '0 2px 8px 0 rgba(83,125,93,0.08)'
              }}>
                <span role="img" aria-label="balance scale">⚖️</span>
              </div>

        <StyledH2>$42069</StyledH2>
        <StyledDescription>Net Balance</StyledDescription>
      </CardContent>
    </Card>
  </Box>
</Box>

    {/* Bottom Row - 2 Cards with Tables */}
      
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
    <Box sx={{ flex: 1 }}>
    <Card sx={{ ...cardStyle, padding: 2, width: "100%", height: "100%" }}>
      <CardContent>
        <Box display="inline-flex" alignItems="center" gap={1}>
            <AccessTime sx={{ fontSize: "2.5rem" }} />
            <StyledH2>Due Soon</StyledH2>
        </Box>
          <StyledTable>
            <thead>
              <tr>
                <StyledTh>Amount</StyledTh>
                <StyledTh>Jar</StyledTh>
                <StyledTh>Name</StyledTh>
                <StyledTh>Date</StyledTh>
              </tr>
            </thead>
            <tbody>
              {[{ type: "ib", jar: "jerries jar", name: "jerrie", date: "april 1, 2024"},
                { type: "ib", jar: "jerries jar", name: "jerrie", date: "april 1, 2024"}].map((row, i) => (
                <TableRow key={i} index={i}>
                  <StyledTd>{row.type}</StyledTd>
                  <StyledTd>{row.jar}</StyledTd>
                  <StyledTd>{row.name}</StyledTd>
                  <StyledTd>{row.date}</StyledTd>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </CardContent>
    </Card>
  </Box>
  <Box sx={{ flex: 1 }}>
    <Card sx={{ ...cardStyle, padding: 2, width: "100%", height: "100%" }}>
      <CardContent>
        <Box display="inline-flex" alignItems="center" gap={1}>
            <History sx={{ fontSize: "2.5rem" }} />
            <StyledH2>Transaction History</StyledH2>
        </Box>
          <StyledTable>
            <thead>
              <tr>
                <StyledTh>Amount</StyledTh>
                <StyledTh>Jar</StyledTh>
                <StyledTh>Name</StyledTh>
                <StyledTh>Date</StyledTh>
              </tr>
            </thead>
            <tbody>
              {[{ type: "ib", jar: "jerries jar", name: "jerrie", date: "april 1, 2024"},
                { type: "ib", jar: "jerries jar", name: "jerrie", date: "april 1, 2024"}].map((row, i) => (
                <TableRow key={i} index={i}>
                  <StyledTd>{row.type}</StyledTd>
                  <StyledTd>{row.jar}</StyledTd>
                  <StyledTd>{row.name}</StyledTd>
                  <StyledTd>{row.date}</StyledTd>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </CardContent>
    </Card>
  </Box>
</Box>

    </Box>
  );
}
