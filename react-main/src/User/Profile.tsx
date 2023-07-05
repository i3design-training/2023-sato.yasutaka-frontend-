import { Box, Button, Container, Grid, Link, TextField } from '@mui/material';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
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

  //詳細クリック
  const saveProfile = () => {
    navigate('/top');
  };

  return (
    <>
      <Header />

      <Container maxWidth="sm">
        <Grid container>
          <Box sx={Title}>プロフィール編集</Box>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>名前</Box>
                <Box sx={Required}>必須</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8} item>
            <TextField sx={FormLayout} placeholder="左藤泰隆" />
          </Grid>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>メールアドレス</Box>
                <Box sx={Required}>必須</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8} item>
            <TextField sx={FormLayout} placeholder="abc@i3design.co.jp" />
          </Grid>
          <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>パスワード</Box>
                <Box sx={Required}>必須</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8} item>
            <TextField sx={FormLayout} placeholder="半角英数字8~20文字以内" />
          </Grid>
          {/* <Grid xs={4} item sx={TitleSet}>
            <Box sx={formFieldSet}>
              <Box sx={TitleSet}>
                <Box sx={List}>プロフィール画像</Box>
                <Box sx={Required}>必須</Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={8} item>
            <Box sx={{ height: '192px' }}>
              <Box
                component="img"
                // src={profilePicture}
                alt="Success"
                sx={{ margin: '0 auto', marginLeft: '15px' }}
              />
              <Box
                sx={{ marginTop: '24px', marginLeft: '15px', color: '#1976d2' }}
              >
                <Box>
                  <Box sx={{ marginLeft: '18px' }}>
                    <input
                      id="file-upload"
                      name="profile_picture"
                      type="file"
                      accept="image/*"
                      // onChange={onChangeFile}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid> */}

          <Button type="submit" sx={SaveButton} onClick={saveProfile}>
            保存
          </Button>
        </Grid>
      </Container>
    </>
  );
};
