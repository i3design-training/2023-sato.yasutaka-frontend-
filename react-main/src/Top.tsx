import { Box, Container, Grid } from '@mui/material';
import { Header } from './components/Header';

export const Top = () => {
  //タスク
  const TaskList = {
    margin: '24px 12px',
  };
  return (
    <>
      <Header />

      <Container maxWidth="md">
        <Grid container>
          <Box sx={{ margin: '24px 12px' }}>
            <Box sx={TaskList}>・タスク一覧</Box>
            <Box sx={TaskList}>・タスク一覧</Box>
            <Box sx={TaskList}>・タスク一覧</Box>
            <Box sx={TaskList}>・タスク一覧</Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};
