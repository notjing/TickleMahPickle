import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SignUpCard from './SignUpCard';
import { useState, useContext } from 'react';
import useUsers from '../../context/DatabaseUsers';
import { UserContext } from '../../context/DatabaseUsers';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  justifyContent: 'center',
  width: '90%',
  maxWidth: '400px',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: '0 auto',
  borderRadius: 12,
  backdropFilter: 'blur(8px)',
  boxShadow: 'hsla(220, 30%, 5%, 0.1) 0px 5px 15px 0px',
  margin: '20px auto',
  backgroundColor: 'rgba(255, 255, 255, 0.41)',
  fontFamily: 'Raleway, sans-serif',
  [theme.breakpoints.up('sm')]: {
    width: '380px',
    padding: theme.spacing(4),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(30, 30, 30, 0.7)',
    boxShadow: 'hsla(220, 30%, 5%, 15px 0px',
  }),
}));

const CompactTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: 42,
  },
  marginBottom: theme.spacing(1),
  fontFamily: 'Raleway, sans-serif',
}));

const CustomFormLabel = styled(FormLabel)(({ theme }) => ({
  fontFamily: 'Raleway, sans-serif'
}));

export default function SignInCard() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [signUpOpen, setSignUpOpen] = useState(false);
  const { users, checkUserByCredentials } = useUsers();
  const { setUserId } = useContext(UserContext);

  const handleSubmit = (event) => {
    if (emailError || passwordError) return;

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userEmail = data.get('email');
    const userPswd = data.get('password');

    checkUserByCredentials(userEmail, userPswd);

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === userEmail && users[i].password === userPswd) {
        setUserId(users[i]._id);
        break;
      }
    }
  };

  return signUpOpen ? (
    <SignUpCard returnToSignIn={() => setSignUpOpen(false)} />
  ) : (
    <Box sx={{ zIndex: "100", minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 0, m: 0 }}>
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h5"
          sx={{
            width: '100%',
            textAlign: 'center',
            mb: 1,
            fontSize: '2.5rem',
            fontWeight: 1000,
            fontFamily: '"Alumni Sans Pinstripe", sans-serif'
          }}
        >
          Sign In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
        >
          <FormControl>
            <CustomFormLabel sx={{ fontSize: '0.875rem', mb: 0.5 }} htmlFor="email">Email</CustomFormLabel>
            <CompactTextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
              fullWidth
              variant="outlined"
              size="small"
              color={emailError ? 'error' : 'primary'}
            />
          </FormControl>
          <FormControl>
            <CustomFormLabel sx={{ fontSize: '0.875rem', mb: 0.5 }} htmlFor="password">Password</CustomFormLabel>
            <CompactTextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              borderRadius: '6px',
              backgroundColor: 'green',
              height: '40px',
              fontSize: '0.875rem',
              mt: 2,
              fontFamily: 'Raleway, sans-serif'
            }}
          >
            Sign in
          </Button>
          <Typography variant="body2" sx={{ textAlign: 'center', mt: 2, fontFamily: 'Raleway, sans-serif' }}>
            Don't have an account?{' '}
            <Link
              href="#"
              variant="body2"
              sx={{ color: 'green', fontFamily: 'Raleway, sans-serif' }}
              onClick={() => setSignUpOpen(true)}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
