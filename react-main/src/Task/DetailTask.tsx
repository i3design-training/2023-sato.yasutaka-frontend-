import { Box, Button, Container, Grid, SelectChangeEvent } from '@mui/material';
import { Header } from '../components/Header';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const DetailTask = () => {
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

  //タイトルセット
  const TitleSet = {
    display: 'flex',
    alignItems: 'center',
  };
  //項目、必須、フォームをセット
  const formFieldSet = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  //項目
  const List = {
    fontFamily: 'Noto Sans JP',
    fontWeight: '700',
    fontSize: '14px',
  };

  //必須
  const Required = {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Noto Sans JP',
    fontWeight: '500',
    fontSize: '12px',
    color: '#E96B5A',
    marginLeft: '8px',
  };

  //保存ボタン
  const SaveButton = {
    display: 'flex',
    width: '188px',
    height: '51px',
    backgroundColor: '#808080',
    fontWeight: '700',
    color: 'white',
    margin: '0 auto',
    marginTop: '32px',
    '&:hover': {
      backgroundColor: 'black',
    },
    '&:active': {
      backgroundColor: 'black',
    },
  };

  //ここから下は関数処理
  const navigate = useNavigate();
  //タスク削除
  const deletTask = () => {
    navigate('/tasks');
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Grid container>
          <Box sx={Title}>詳細</Box>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>タスク</Box>
                <Box sx={Required}>必須</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8}>
            <Box>演習</Box>
          </Grid>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>カテゴリ</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8}>
            <Box>ビジネス</Box>
          </Grid>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>期日</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8}>
            <Box>2023/07/15</Box>
          </Grid>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>タスク詳細</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8}>
            <Box>todo課題を作り終える!!!!!!!!!</Box>
          </Grid>

          <Button type="submit" sx={SaveButton} onClick={deletTask}>
            タスク完了
          </Button>
        </Grid>
      </Container>
    </>
  );
};
