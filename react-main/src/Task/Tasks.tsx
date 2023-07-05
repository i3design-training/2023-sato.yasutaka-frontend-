import { Box, Button, Container, Grid } from '@mui/material';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';

export const Tasks = () => {
  //タスク
  const TaskList = {
    margin: '24px 12px',
  };
  //タスク詳細へ
  const DetailTask = {
    backgroundColor: '#808080',
    marginLeft: '12px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black',
    },
    '&:active': {
      backgroundColor: 'black',
    },
  };
  //タスク編集へ
  const EditTask = {
    backgroundColor: '#808080',
    color: 'white',
    marginLeft: '12px',
    '&:hover': {
      backgroundColor: 'black',
    },
    '&:active': {
      backgroundColor: 'black',
    },
  };

  //作成ボタン
  const CreateTask = {
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
  const toDetail = () => {
    navigate('/tasks/detail');
  };
  //編集クリック
  const toEdit = () => {
    navigate('/tasks/edit');
  };
  //タスク
  const toCreate = () => {
    navigate('/tasks/create');
  };

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Grid container>
          <Grid xs={8}>
            {Array.from({ length: 3 }, (_, index) => (
              <Grid xs={8} key={index}>
                <Box sx={{ margin: '24px 12px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={TaskList}>・タスク名</Box>
                    <Box>
                      <Button sx={DetailTask} onClick={toDetail}>
                        詳細
                      </Button>
                    </Box>
                    <Box>
                      <Button sx={EditTask} onClick={toEdit}>
                        編集
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid xs={4}>
            <Button type="submit" sx={CreateTask} onClick={toCreate}>
              タスク新規作成
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
