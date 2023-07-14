import { Box, Button, Container, Grid, TextField } from '@mui/material';
import { Header } from '../components/Header';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const CreateCategory = () => {
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
  const FormLayout = {
    display: 'flex',
    justifyContent: 'center',
    width: '355px',
    height: '48px',
    padding: '12px 16px',
    borderRadius: '5px',
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
  const [name, setName] = useState('');

  const saveCategory = async () => {
    console.log(name); // デバッグ
    try {
      await axios.post(
        'http://127.0.0.1:8000/api/categories/create',
        {
          name,
        },
      );
      navigate('/categories');
    } catch (error) {
      console.error(error);
      alert('カテゴリー登録ができませんでした。');
    }
  };
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Grid container>
          <Box sx={Title}>カテゴリを作成する</Box>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>カテゴリ</Box>
                <Box sx={Required}>必須</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8}>
            <TextField
              sx={FormLayout}
              placeholder="プライベート、仕事など"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Button type="submit" sx={SaveButton} onClick={saveCategory}>
            保存
          </Button>
        </Grid>
      </Container>
    </>
  );
};
