import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { Header } from '../components/Header';
import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';

export const CreateTask = () => {
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
  //メールフォームレイアウト
  const DetailFormLayout = {
    display: 'flex',
    justifyContent: 'center',
    width: '355px',
    height: '48px',
    marginTop: '48px',
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

  //カテゴリプルダウン
  const [categories, setCategories] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value as string);
  };

  //タスク作成
  const saveTask = () => {
    navigate('/tasks');
  };
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Grid container>
          <Box sx={Title}>タスク作成</Box>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>タスク</Box>
                <Box sx={Required}>必須</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8}>
            <TextField sx={FormLayout} placeholder="英語の勉強" />
          </Grid>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>カテゴリ</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '24px',
              }}
            >
              <FormControl sx={{ width: '355px' }}>
                <InputLabel id="demo-simple-select-label">選択</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={categories}
                  label="categories"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>仕事</MenuItem>
                  <MenuItem value={20}>プライベート</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>期日</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '24px',
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  sx={{ width: '355px' }}
                  components={['DatePicker']}
                >
                  <DatePicker />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>タスク詳細</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8}>
            <TextField
              multiline
              rows={3}
              sx={DetailFormLayout}
              placeholder="英単語を100ページ見る"
            />
          </Grid>

          <Button type="submit" sx={SaveButton} onClick={saveTask}>
            保存
          </Button>
        </Grid>
      </Container>
    </>
  );
};
