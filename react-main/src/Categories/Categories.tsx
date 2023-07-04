import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { Header } from '../components/Header';

export const Categories = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Grid container>
          <Box sx={{ margin: '8px 8px' }}>
            <Box>・カテゴリ一覧</Box>
            <Box>・カテゴリ一覧</Box>
            <Box>・カテゴリ一覧</Box>
            <Box>・カテゴリ一覧</Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};
