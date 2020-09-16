import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

/* material-ui 테마 색상 설정 */
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3bc9db',
      },
    },
  });

const RegisterBlock = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

/* 흰색 박스 */
const RegisterBox = styled.div`
.logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: 900;
    font-size: 1.7rem;
    color: ${palette.cyan[4]};
    letter-spacing: 0.5px;
}
box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
border: 1px solid ${palette.gray[3]};
padding: 2rem;
width: 360px;
background: white;
border-radius: 2px;
margin-top: 4rem;
margin-bottom: 5rem;
`;

const RegisterFormBlock = styled.div`
    h3 {
        color: ${palette.gray[8]};
        font-size: 1.22rem;
        font-weight: 700;
    }
    font-size: 0.97rem;
    .genderBtn {
        font-size: 0.9rem;
        border: 1px solid ${palette.gray[5]};
        padding: 0.65rem 0rem;
        margin: 0.4rem 0rem 1.3rem 0rem;
        outline: none;
        width: 49.559%;
        margin-left: 0.05rem;
    }
    .styledInput {
        border: none;
        width: 100%;
        margin-top: 1rem;
    }
`;

const ButtonWidthMarginTop = styled(Button)`
    margin: 3rem 0rem 1rem 0rem;
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 2rem;
    margin-bottom: -1rem;
`;


 const RegisterForm = ({ form, onChange, onSubmit, error }) => {


    return (
        <RegisterBlock>
            <RegisterBox>
                <div className="logo-area">
                    ASUM
                </div>
                <RegisterFormBlock>
                    <h3>회원가입</h3>
                    <ThemeProvider theme={theme}>
                    <form onSubmit={onSubmit} noValidate autoComplete="off">
                        
                        <TextField 
                            label="Email *"
                            variant="outlined"
                            className="styledInput"
                            color='primary'
                            size='medium'
                            name="email"
                            value={form.email}
                            onChange={onChange}
                        />
                        <TextField 
                            label="비밀번호 *"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            className="styledInput"
                            color='primary'
                            size='medium'
                            name="password"
                            value={form.password}
                            onChange={onChange}
                        />
                        <TextField
                            label="비밀번호 확인 *"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            className="styledInput"
                            color='primary'
                            size='medium'
                            name="passwordConfirm"
                            value={form.passwordConfirm}
                            onChange={onChange}
                        />
                        <TextField 
                            label="닉네임 *"
                            variant="outlined"
                            className="styledInput"
                            color='primary'
                            size='medium'
                            name="username"
                            value={form.username}
                            onChange={onChange}
                        />
                        <FormControl variant="outlined" className="styledInput">
                            <InputLabel id="demo-simple-select-outlined-label">
                                나이대 *
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                
                                value={form.age}
                                onChange={onChange}
                                label="나이대"
                                name="age"
                            >
                                <MenuItem value='20'>~ 20대</MenuItem>
                                <MenuItem value='30'>30대</MenuItem>
                                <MenuItem value='40'>40대</MenuItem>
                                <MenuItem value='50'>50대 ~</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" className="styledInput">
                            <InputLabel id="demo-simple-select-outlined-label">
                                성별 *
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                
                                value={form.gender}
                                onChange={onChange}
                                label="성별"
                                name="gender"
                            >
                                <MenuItem value='female'>여 성</MenuItem>
                                <MenuItem value='male'>남 성</MenuItem>
                            </Select>
                        </FormControl>
                        
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <ButtonWidthMarginTop fullWidth cyan>
                            회원가입
                        </ButtonWidthMarginTop>
                    </form>
                    </ThemeProvider>
                    
                    
                </RegisterFormBlock>
            </RegisterBox>
        </RegisterBlock>
    );
 };

 export default RegisterForm;