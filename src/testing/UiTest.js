import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import palette from '../../../lib/styles/palette';
import { UserOutlined } from '@ant-design/icons';
import Button from '@material-ui/core/Button';
import { Image, Row, Col, DatePicker, Select, Avatar } from 'antd';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';


const AccountBlock = styled(Responsive)`
    margin-top: 4rem;
    padding: 0rem 8.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    .namebox {
        margin: 1.5rem 0rem 1.5rem 0rem;
        font-size: 0.96rem;
        font-weight: 500;
    }
    .description {
        margin: 1.5rem 0rem 1.5rem 0rem;
        font-size: 0.99rem;
        font-weight: 500;
        /* border-left: 1px groove ${palette.gray[3]}; */
    }
    .uploadBtn {
        margin: 0.1rem 0rem 0.8rem 0rem;
        font-size: 0.8rem;
        text-decoration: underline ${palette.gray[6]};
        &:hover {
            color: ${palette.gray[5]};
            background: none;
        }
    }
    
`;

const PicBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${palette.gray[4]};
    padding: 2rem;
    width: 270px;
    background: white;
    border-radius: 8px;
    /* margin: 4.46rem 0rem 0rem 1rem; */
   /*  justify-content: center; */
    align-items: center;
    .uploadBtn {
        margin: 0.1rem 0rem 0.8rem 0rem;
        font-size: 0.8rem;
        text-decoration: underline ${palette.gray[6]};
        &:hover {
            color: ${palette.gray[5]};
            background: none;
        }
    }
`;



const UiTest = ({ profileImage, onChangeImage, user, onEdit, error, children }) => {


    const imageInput = useRef();//이미지 업로드를 위한 설정
    const onClickImageUpload = useCallback((e) => { //이미지 업로드 버튼
        e.preventDefault();
        imageInput.current.click();
    }, [imageInput.current]);

    return (
    <PicBox>
                        
      <Avatar size={120} src={user.image} icon={<UserOutlined />} />
                        

                        <input type="file" hidden ref={imageInput} name="profileImage" onChange={onChangeImage} />

                        <Button disableFocusRipple disableRipple aria-controls="simple-menu" aria-haspopup="true"  className="uploadBtn" onClick={onClickImageUpload}>
                            사진 업로드
                        </Button>
    </PicBox>                    

              
    )

};

export default UiTest;