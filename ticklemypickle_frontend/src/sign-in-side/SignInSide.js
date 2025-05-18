import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SignInCard from './components/SignInCard';
import TypingEffect from "./components/TypingEffect";

export default function SignInSide(props) {
  return (
    <>
      <CssBaseline enableColorScheme />
      <style>{`body { overflow: hidden !important;}`}</style>
      <Stack
  direction={{ xs: 'column', md: 'row' }}
  sx={{
    height: '100vh',
    width: '100vw',
    alignItems: 'stretch',
    backgroundColor: '#D2D0A0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
        {/* Left side: Title and Slogan */}
        <Box
          sx={{
            flex: 1,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            px: 4,
            backgroundColor: 'transparent',
          }}
        >
          <Box
            sx={{
              mb: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <img
              src={process.env.PUBLIC_URL + '/title.png'}
              alt="TickleMahPickle Logo Title"
              style={{
                maxWidth: '100%',
                width: "80%",
                height: 'auto',
              }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 500,
              fontSize: '2rem',
              color: '#73946B',
              textAlign: 'center',
            }}
          >
            <TypingEffect></TypingEffect>
          </Typography>
        </Box>
        {/* Right side: Sign Up Card (centered vertically and horizontally) */}
        <Box
          sx={{
            flex: 0.7,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            px: 2,
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              height: '100vh',
            }}
          >
            <SignInCard />
          </Box>
        </Box>
      </Stack>
      <img
        src={process.env.PUBLIC_URL + '/logo.png'}
        alt="Logo"
        style={{
          position: 'fixed',
          top: 15,
          left: 15,
          width: 130,
          height: 'auto',
          zIndex: 2000,
          pointerEvents: 'none',
        }}
      />
      <img
        src={process.env.PUBLIC_URL + '/pickle.gif'}
        alt="Dancing Pickle"
        style={{
          position: 'fixed',
          right: 24,
          top: 24,
          width: 100,
          height: 'auto',
          zIndex: 2000,
          pointerEvents: 'none',
        }}
      />
      <img
        src={process.env.PUBLIC_URL + '/bottom.png'}
        alt="pickles"
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: "100%",
          height: 'auto',
          zIndex: 2000,
          pointerEvents: 'none',
        }}
      />
    </>
  );
}