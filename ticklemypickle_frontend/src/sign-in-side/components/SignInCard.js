import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { SitemarkIcon } from './CustomIcons';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  justifyContent: 'center',
  width: '90%',
  maxWidth: '400px',
  padding: theme.spacing(2), // reduced padding
  gap: theme.spacing(1), // reduced gap
  margin: '0 auto',
  borderRadius: 12,
  backdropFilter: 'blur(8px)',
  boxShadow: 'hsla(220, 30%, 5%, 0.1) 0px 5px 15px 0px',
  margin: '20px auto',
  backgroundColor: 'rgba(255, 255, 255, 0.7)', // slightly more transparent
  [theme.breakpoints.up('sm')]: {
    width: '380px',
    padding: theme.spacing(1.5), // reduced padding for sm+
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(30, 30, 30, 0.7)', // slightly more transparent in dark mode
    boxShadow: 'hsla(220, 30%, 5%, 0.3) 0px 5px 15px 0px',
  }),
}));

const CompactTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: 42,
  },
  marginBottom: theme.spacing(0.5),
}));

export default function SignInCard() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', top: '-90px' }}>
      <Card variant="outlined">
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mb: 1 }}>
          <SitemarkIcon sx={{ height: 32 }} />
        </Box>
        <Typography
          component="h1"
          variant="h5"
          sx={{ width: '100%', textAlign: 'center', mb: 1, fontSize: '1.5rem' }}
        >
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 1.5 }}
        >
          <FormControl>
            <FormLabel sx={{ fontSize: '0.875rem', mb: 0.5 }} htmlFor="email">Email</FormLabel>
            <CompactTextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              required
              fullWidth
              variant="outlined"
              size="small"
              color={emailError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ fontSize: '0.875rem', mb: 0.5 }} htmlFor="password">Password</FormLabel>
            <CompactTextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              required
              fullWidth
              variant="outlined"
              size="small"
              color={passwordError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox size="small" value="remember" color="primary" />}
            label={<Typography variant="body2">Remember me</Typography>}
            sx={{ mt: 0.5, mb: 0.5 }}
          />
          <Button 
            type="submit" 
            fullWidth 
            variant="contained" 
            onClick={validateInputs}
            sx={{ 
              borderRadius: '6px', 
              backgroundColor: "green",
              height: '40px',
              fontSize: '0.875rem',
              mt: 1
            }}
          >
            Sign in
          </Button>
          <Typography variant="body2" sx={{ textAlign: 'center', mt: 1 }}>
            Don't have an account?{' '}
            <Link
              href="#"
              variant="body2"
              sx={{ color: "green" }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}