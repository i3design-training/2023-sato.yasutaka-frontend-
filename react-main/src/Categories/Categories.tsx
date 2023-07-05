import { Box, Button, Container, Grid } from '@mui/material';
import { Header } from '../components/Header';

export const Categories = () => {
  //カテゴリー
  const CategoryList = {
    margin: '24px 12px',
  };

  //カテゴリ削除
  const DeletCategory = {
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={CategoryList}>・タスク名</Box>
            <Box>
              <Button sx={DeletCategory}>削除</Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};
