import React from 'react';
import styled from 'styled-components';
import { Image, Row, Col, DatePicker, Select } from 'antd';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import CounterContainer from '../../containers/common/CounterContainer';
import { Affix } from 'antd';
import Tags from '../common/Tags';
import { Helmet } from 'react-helmet-async';

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



const BookingBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${palette.gray[3]};
    padding: 2rem;
    width: 320px;
    background: white;
    border-radius: 2px;
    margin: 4.46rem 0rem 0rem 1rem;
    
    .tour-price {
        padding-bottom: 2rem;
        font-weight: 700;
        font-size: 1.5rem;
        color: ${palette.gray[7]};
        letter-spacing: 0.5px;
    }
`;

const SearchBar = styled.div`
    .datePickBar {
        width: 100%;
        font-size: 0.9rem;
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

const { Option } = Select;

const TourViewer = ({ post, error, loading, actionButtons, ownPost }) => {

  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <TourViewerBlock>존재하지 않는 포스트입니다.</TourViewerBlock>;
    }
    return <TourViewerBlock>오류 발생!</TourViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {
    return null;
  }

    /* antd 데이트피커 이벤트 핸들러 */
    function onChange(date, dateString) {
        console.log(date, dateString);
    } 

    function handleChange(value) {
        console.log(`selected ${value}`);
      }

    const { title, about, images, price, user, publishedDate, tags } = post;
    return (
        
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
                    <Affix offsetTop={90} onChange={affixed => console.log(affixed)}>
                        <BookingBox>
                            <div className="tour-price">
                                {price} 원
                            </div>
                            <SearchBar>
                                <DatePicker 
                                    className="datePickBar"
                                    onChange={onChange} 
                                    placeholder="날짜 선택"
                                    size= "large"
                                    locale="ko"
                                />
                            </SearchBar>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="jack">[10세~대인] 제주유기농말차 롤케이크</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                            <CounterContainer />
                            <Button>예약하기</Button>
                            <Button>관심여행등록</Button>
                        </BookingBox>
                    </Affix>
                </Col>
            </Row>
            <Row>
                <Col span={24}>col</Col>
            </Row>
            
        </TourViewerBlock>
        
   )
  };
  
  export default TourViewer;