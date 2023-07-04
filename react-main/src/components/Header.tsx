import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, TextField } from '@mui/material';

export const Header = () => {
  //タイトルセット
  const Header = {
    display: 'flex',
    width:"100%",
    backgroundColor: '#D2691E',
  };
  //タイトルセット
  const List = {
    margin: '10px 10px',
    color:"blue"
  };

  return (
    <>
      <Box sx={Header}>
        <Link to="/top">
          <Box sx={List}>Top</Box>
        </Link>
        <Link to="/tasks">
          <Box sx={List}>タスク一覧</Box>
        </Link>
        <Link to="/categories">
          <Box sx={List}>カテゴリ一覧</Box>
        </Link>
      </Box>
    </>
  );
};
