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

const HostToursList = () => {
    const listData = []; //들어오는 데이터 넣으면 됨
        for (let i = 0; i < 50; i++) {  //i 는 등록된 게시글 갯수이므로 i < 23은 게시물 올린거 length로 변경예정
        listData.push({
            // href: 'https://ant.design',
            title: `[제주 구좌] 제주 해녀와 함께하는 특별한 '해녀 다이닝'`,
            description:
            '대한민국 제주특별자치도 제주시 구좌읍',
            content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            rate: 3,
            reviews: 300,
            discountRate: 5,
            image: 'data:image/jpeg;base64,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',
            amount: 50000,
        });
        }

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
                        {tours.discountRate!==null && <b style={{color: 'red'}}> {tours.discountRate + '%'} </b>}
                        <b style={{color: 'black'}}> {tours.amount+'원'} </b>부터
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
                    description={<div><CarOutlined />{tours.description}</div>} //DB에서 지역 가져오기
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