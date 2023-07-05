import { Link } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

export const Header = () => {
  //タイトルセット
  const Header = {
    display: 'flex',
    width: '100%',
    backgroundColor: '#808080',
  };
  //navi
  const NavLeft = {
    margin: '10px 10px',
    color: 'blue',
  };
  //navi
  const NavRight = {
    margin: '10px 10px',
    color: 'blue',
  };

  //Navigation
  const Nav = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <>
      <Box sx={Header}>
        <Grid xs={8}>
          <Box sx={{ display: 'flex' }}>
            <Box sx={NavLeft}>
              <Link to="/top" style={Nav}>
                Top
              </Link>
            </Box>
            <Box sx={NavLeft}>
              <Link to="/tasks" style={Nav}>
                タスク一覧
              </Link>
            </Box>
            <Box sx={NavLeft}>
              <Link to="/categories" style={Nav}>
                カテゴリ一覧
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box sx={NavRight}>
            <Link to="/users/profile" style={Nav}>
              プロフィール
            </Link>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
