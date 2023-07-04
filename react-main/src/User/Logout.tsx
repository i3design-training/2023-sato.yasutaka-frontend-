import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, TextField } from '@mui/material';

export const Logout = () =>  {
  //タイトル
  const Title = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '54px',
    textAlign: 'center',
    marginTop: '48px',
    marginBottom: '24px',
    fontWeight: '700',
    fontSize: '32px',
  };

  return (
    <>
      <Container maxWidth="sm">
        <Grid container>
          <Box sx={Title}>ログアウトしました</Box>
        </Grid>
      </Container>
    </>
  );
}
