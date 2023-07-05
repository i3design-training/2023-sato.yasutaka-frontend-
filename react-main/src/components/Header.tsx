import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export const Header = () => {
  //タイトルセット
  const Header = {
    display: 'flex',
    width: '100%',
    backgroundColor: '#808080',
  };
  //タイトルセット
  const List = {
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
        <Box sx={List}>
          <Link to="/top" style={Nav}>
            Top
          </Link>
        </Box>
        <Box sx={List}>
          <Link to="/tasks" style={Nav}>
            タスク一覧
          </Link>
        </Box>
        <Box sx={List}>
          <Link to="/categories" style={Nav}>
            カテゴリ一覧
          </Link>
        </Box>
      </Box>
    </>
  );
};
