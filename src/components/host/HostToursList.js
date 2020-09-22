import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { List, Button, Rate } from 'antd';
import { CarOutlined, DeleteOutlined, EyeInvisibleOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Content = styled.div`
    flex: 0 1 50%;
    margin: 3% 0 3% 3%;
    border: 1px solid black;
    height: 100%;
`;

const HostToursListBlock = styled.div`
    font-size: 1rem;
    padding: 4%
`;

const HostToursList = ({ listData }) => {

    return (
        <Content>
        <HostToursListBlock>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                pageSize: 5, //한페이지에 몇개?
                }}
                dataSource={listData} //데이터소스에 대입하면 밑에부턴 tours.???로 시작하게 된다
                footer={
                <div style={{ textAlign: 'center' }}>
                    <Link to="/host/tours/create"><Button>새로운 상품 등록하기</Button></Link>
                </div>
                }
                renderItem={tours => (
                <List.Item
                    key={tours.title}
                    actions={[  //onClick 넣어주고 이동시키기
                    
                    <Link style={{color: 'rgba(0, 0, 0, 0.45)'}} to="/"><EditOutlined key="수정" /></Link>, //해당 상품 수정페이지로 이동시키기
                    <EyeInvisibleOutlined key="가리기" />, //가리기??
                    <DeleteOutlined key="삭제" />, //해당 상품 삭제하는 함수 등록하고 진짜 삭제할건지 물어보는 창 띄우기
                    <Rate style={{fontSize: '0.9rem'}} allowHalf disabled defaultValue={tours.rate} />, //평점 0~5까지 별표 반씩 줄어들음
                    <span>{'후기 '+tours.reviews+'개'}</span>, //데이터 베이스에 작성된 후기 갯수 가져오기
                    <span style={{fontSize: '0.9rem'}}>
                        {tours.discountRate!==undefined && <b style={{color: 'red'}}> {tours.discountRate + '%'} </b>}
                        <b style={{color: 'black'}}> {tours.price+'원'} </b>부터
                    </span> //DB에 있는 할인율과 금액가져오기
                    ]}
                    extra={
                    <img
                        width={272}
                        height={180}
                        alt={tours.image}
                        src={tours.image}
                    />
                    }
                >
                    <List.Item.Meta
                    title={<a href={tours.href}><b>{tours.title}</b></a>} //해당 게시글이 있는 URL로 보내주기
                    description={<div><CarOutlined />{tours.about}</div>} //DB에서 지역 가져오기
                    />
                    {tours.content}
                    {/* DB에서 해당 소개글 가져오기 간단하게!! */}
                </List.Item>
                )}
            />
        </HostToursListBlock>
        </Content>
    )
}

export default HostToursList;