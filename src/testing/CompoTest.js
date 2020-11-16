import React from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import CounterContainer from '../containers/common/CounterContainer';
import 'moment/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { withStyles } from '@material-ui/core/styles';

const CompoTestBlock = styled.div`
`;

const SearchBar = styled.div`
    .datepicker {
        height: 49px;
        width: 100%
        /* margin-bottom: 1rem; */
    }
`;

const OptionSelectBox = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;

    .menuItem {
        margin-top: 3px;
        font-size: 0.85rem;
    }
`;

const InputSelect = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      width: '13.5rem;',
      height: '1.5rem;',
      /* marginTop: '1rem;', */
      borderRadius: 3,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '11px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 3,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);


const CompoTest = () => {

    function onChange(date, dateString) {
        console.log(date, dateString);
    } 

    function handleChange(value) {
        console.log(`selected ${value}`);
      }

    return (
    <CompoTestBlock>
<SearchBar>
                                <DatePicker
                                    autoFocus={false}
                                    className="datePickBar"
                                    onChange={onChange} 
                                    placeholder="날짜 선택"
                                    locale={locale}
                                    className="datepicker"
                                />
                            </SearchBar>
                            <OptionSelectBox>
                                <Select
                                    /* value={} */
                                    onChange={handleChange}
                                    input={<InputSelect />}
                                >
                                    <MenuItem 
                                        value={10} 
                                    >
                                        <div className="menuItem">
                                        [10세~대인] 제주유기농말차 롤케이크
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={20}>
                                        <div className="menuItem">
                                        [10세~대인] 제주당근파운드케이크
                                        </div>
                                    </MenuItem>
                                </Select>
                            </OptionSelectBox>
                            <div className="counterBox">
                                인원 <CounterContainer />
                            </div>
                            </CompoTestBlock>
    )
}

export default CompoTest;