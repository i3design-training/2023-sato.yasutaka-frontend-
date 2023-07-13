import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export const Complete = () => {
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

  //登録ボタン
  const Login = {
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
  //カテゴリ作成クリック
  const toLogin = () => {
    navigate('/users/login');
  };

  // メールリンクのトークンを取得してバックエンドに送信する処理
  const handleTokenVerification = async () => {
    // URLからトークンを取得
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    console.log(token,"tokenある？");
    if (token) {
      try {
        // トークンをバックエンドに送信
        await axios.post(`http://127.0.0.1:8000/api/users/complete/verify?token=${token}`);
        // トークンが一致した場合の処理（例: ユーザーに成功メッセージを表示）
        alert('登録に成功しました');
      } catch (error) {
        // トークンが一致しなかった場合の処理（例: エラーメッセージを表示）
        alert('登録に失敗しました');
      }
    }
  };

  useEffect(() => {
    handleTokenVerification();
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Grid container>
          <Box sx={Title}>登録完了</Box>
          <Button type="submit" sx={Login} onClick={toLogin}>
            ログイン
          </Button>
        </Grid>
      </Container>
    </>
  );
};
