import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, TextField } from '@mui/material';

export const Register = () => {
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

  //メールフォームレイアウト
  const MailFormLayout = {
    display: 'flex',
    justifyContent: 'center',
    width: '355px',
    height: '48px',
    padding: '12px 16px',
    borderRadius: '5px',
  };

  //登録ボタン
  const RegisterButton = {
    display: 'flex',
    width: '188px',
    height: '51px',
    backgroundColor: 'black',
    fontWeight: '700',
    color: 'white',
    margin: '0 auto',
    marginTop: '32px',
  };

  return (
    <>
      <Container maxWidth="sm">
        <Grid container>
          <Box sx={Title}>新規会員登録</Box>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>メールアドレス</Box>
                <Box sx={Required}>必須</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8}>
            <TextField sx={MailFormLayout} placeholder="xxx@i3design.co.jp" />
          </Grid>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>メールアドレス</Box>
                <Box sx={Required}>必須</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8}>
            <TextField sx={MailFormLayout} placeholder="パスワードを入力" />
          </Grid>
          <Button type="submit" sx={RegisterButton}>
            登録
          </Button>
        </Grid>
      </Container>
    </>
  );
};
