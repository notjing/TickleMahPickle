import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SignInCard from './components/SignUpCard';

export default function SignInSide(props) {
  return (
    <>
      <CssBaseline enableColorScheme />
      <style>{`body { overflow: hidden !important; z-index: 100 !important;}`}</style>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{ zIndex: "100", height: '100vh', width: '100vw', alignItems: 'stretch', backgroundColor: '#D2D0A0' }}
      >
        {/* Left side: Title and Slogan */}
        <Box
          sx={{
            flex: 1,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'flex-start', // Move content up
            alignItems: 'center',
            minHeight: '100vh',
            px: 4,
            backgroundColor: 'transparent',
            pt: 10, // Add top padding for more space above
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Alumni Sans Pinstripe, Raleway, sans-serif',
              fontWeight: 900,
              fontSize: { xs: '2.5rem', md: '5rem', lg: '6rem' },
              color: '#537D5D',
              mb: 2,
              textAlign: 'center',
              letterSpacing: 1.5,
              pt: { xs: 8, md: 12, lg: 16 }, // Move title down by increasing top padding
              lineHeight: 1.05,
            }}
          >
            TickleMahPickle
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 500,
              fontSize: '1.5rem',
              color: '#73946B',
              textAlign: 'center',
              maxWidth: 340,
            }}
          >
            When you in a pickle, tickle loan
          </Typography>
        </Box>
        {/* Right side: Sign Up Card (centered vertically and horizontally) */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            px: 2,
          }}
        >
          <SignInCard />
        </Box>
      </Stack>
      <img
        src={process.env.PUBLIC_URL + '/pickle.gif'}
        alt="Dancing Pickle"
        style={{
          position: 'fixed',
          left: 24,
          bottom: 24,
          width: 180,
          height: 'auto',
          zIndex: 2000,
          pointerEvents: 'none',
        }}
      />
    </>
  );
}