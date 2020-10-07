import React from 'react';
import styled from 'styled-components';
import { Image, Row, Col, DatePicker } from 'antd';
import { ConfigProvider } from 'antd';
import { Affix } from 'antd';
import palette from '../../../lib/styles/palette';
import Responsive from '../../common/Responsive';
import Button from '../../common/Button';
import CounterContainer from '../../../containers/common/CounterContainer';
import { Helmet } from 'react-helmet-async';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Favorite from '../../common/Favorite';




const TourViewerBlock = styled(Responsive)`
    margin-top: 4rem;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    
`;

const tourMainBlock = styled.div`
    width: 685px;
    
`;

const TourHead = styled.div`
    margin-bottom: 1.5rem;
    h1 {
        font-size: 2rem;
        line-height: 1.5;
        margin: 0;
        font-weight: 700;
    }
`;

const SideMenuBlock = styled.div`
    height: 700px;
`;

const BookingBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${palette.gray[3]};
    padding: 2rem;
    width: 320px;
    
    background: white;
    border-radius: 2px;
    margin: 4.46rem 0rem 0rem 1rem;
    
    .counterBox {
        justify-content: space-between;
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        font-weight: 600;
    }
   
`;

const TourPrice = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: flex-start;
    .tour-price {
        padding-bottom: 2rem;
        font-weight: 700;
        font-size: 1.5rem;
        color: ${palette.gray[7]};
        letter-spacing: 0.5px;
    }
    .favorite {
        margin-right: -1.3rem;
        font-size: 1.3rem;
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

const SearchBar = styled.div`
    .datepicker {
        height: 49px;
        width: 100%
        /* margin-bottom: 1rem; */
    }
`;

const TourContent = styled.div`
  color: ${palette.gray[8]};
  width: 685px;
  margin-top: 1.5rem;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const ButtonWidthMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const { Option } = Select;

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
  

const TourViewer = ({ tour, error, loading, actionButtons, ownPost }) => {

  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <TourViewerBlock>존재하지 않는 포스트입니다.</TourViewerBlock>;
    }
    return <TourViewerBlock>오류 발생!</TourViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !tour) {
    return null;
  }

    /* antd 데이트피커 이벤트 핸들러 */
    function onChange(date, dateString) {
        console.log(date, dateString);
    } 

    function handleChange(value) {
        console.log(`selected ${value}`);
      }

    

    const { title, about, images, price, user, publishedDate, tags } = tour;


    return (
        <ConfigProvider locale={locale}>
        <TourViewerBlock>
            
            <Row>
                <Col span={16} className="sideBar">
                    <tourMainBlock>
                        <TourHead>
                            <h1>{title}</h1>
                        </TourHead>
                        
                        <Image
                            width={680}
                            height={450}
                            src={images}
                        />
                        
                        <TourContent dangerouslySetInnerHTML={{ __html: about }} />
                    </tourMainBlock>
                </Col>
                <Col span={8}>
                    <SideMenuBlock>
                    <Affix offsetTop={70} >
                        <BookingBox>
                            <TourPrice>
                                <div className="tour-price">{price} 원</div>
                                <div className="favorite"><Favorite /></div>
                            </TourPrice>
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
                            <ButtonWidthMarginTop fullWidth cyan >예약하기</ButtonWidthMarginTop>
                            
                        </BookingBox>
                    </Affix>
                    </SideMenuBlock>
                </Col>
            </Row>
            <Row>
                <Col span={24}>col</Col>
            </Row>
            
        </TourViewerBlock>
        </ConfigProvider>
   )
  };
  
  export default TourViewer;