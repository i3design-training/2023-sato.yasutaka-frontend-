import { Box, Button, Container, Grid, Link } from '@mui/material';
import { Header } from '../components/Header';

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
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Grid container>
          <Box sx={{ margin: '24px 12px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={TaskList}>・タスク名</Box>
              <Box>
                <Button sx={DetailTask}>詳細</Button>
              </Box>
              <Box>
                <Button sx={EditTask}>編集</Button>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={TaskList}>・タスク名</Box>
              <Box>
                <Button sx={DetailTask}>詳細</Button>
              </Box>
              <Box>
                <Button sx={EditTask}>編集</Button>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={TaskList}>・タスク名</Box>
              <Box>
                <Button sx={DetailTask}>詳細</Button>
              </Box>
              <Box>
                <Button sx={EditTask}>編集</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};
