import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const AvatarDiv = styled.div`
  .avatarBtn {
    &:hover {
    background: white;
  }
  }
`;

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props} 
  />
));


const HeaderAvatar = ({ onLogout }) => {

/* export default function CustomizedMenus({ onLogout }) { */
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    /* console.log(setAnchorEl()); */
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AvatarDiv>
      <Button disableFocusRipple disableRipple aria-controls="simple-menu" aria-haspopup="true" className="avatarBtn" onClick={handleClick}>
        <Avatar size="large" icon={<UserOutlined />} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={'/account'} style={{ color: "#323232" }}>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleOutlinedIcon fontSize="middle" />
          </ListItemIcon>
          <ListItemText primary="내 정보" />
        </MenuItem>
        </Link>
        <MenuItem>
          <ListItemIcon>
            <AssignmentOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="예약 내역" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FavoriteBorderOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="관심 여행" />
        </MenuItem>
        <MenuItem onClick={ onLogout }>
          로그아웃
        </MenuItem>
      </StyledMenu>
    </AvatarDiv>
  );
}

export default HeaderAvatar;