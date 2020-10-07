import React, { useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { List, Button, Rate } from 'antd';
import { DeleteOutlined, EyeInvisibleOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AskRemoveModal from '../post/AskRemoveModal';

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

const HostToursList = ({ hostToursList, hostToursListError, loading, onEdit, onRemove }) => {
    const [modal, setModal] = useState(false);
    const [deleteNumber, setDeleteNumber] = useState();

    const onRemoveClick = (e) => {
        console.log(e.target.value)
        setDeleteNumber(e.target.value)
        setModal(true);
    };
    const onCancel = () => {
        setModal(false);
    };
    const onConfirm = () => {
        console.log(deleteNumber);
        setModal(false);
        onRemove(deleteNumber);
    };

    if (hostToursListError) {
        return <Content>
        <HostToursListBlock>
        <div style={{ textAlign: 'center', fontSize: '2rem'}}>
            전산 에러가 발생했습니다. 불편드려 죄송합니다.
        <br/>담당자에게 연락주시면 빠르게 해결해드리겠습니다.
        </div>
        </HostToursListBlock>
        </Content>;
    }
    return (
        <Content>
        <HostToursListBlock>

        {!loading && hostToursList && (
        <List
        itemLayout="vertical"
        size="large"
        pagination={{
        pageSize: 5, //한페이지에 몇개?
        }}
        dataSource={hostToursList} //데이터소스에 대입하면 밑에부턴 tours.???로 시작하게 된다
        footer={
        <div style={{ textAlign: 'center' }}>
            <Link to="/host/tours/create"><Button>새로운 상품 등록하기</Button></Link>
        </div>
        }
        renderItem={tours => (
        <List.Item
            key={tours.title}
            actions={[
            
            <Button ghost style={{color: 'rgba(0, 0, 0, 0.45)'}} value={tours.id} onClick={onEdit}>
            <EditOutlined style={{zIndex: -10}} />
            </Button>,
            <EyeInvisibleOutlined key="가리기" />,
            <Button ghost style={{color: 'rgba(0, 0, 0, 0.45)'}} value={tours.id} onClick={onRemoveClick}>
            <DeleteOutlined style={{zIndex: -10}} />
            </Button>,
            <Rate style={{fontSize: '0.9rem'}} allowHalf disabled defaultValue={tours.rate} />, //평점 0~5까지 별표 반씩 줄어들음
            <span>
                {tours.reviews !== undefined && '후기 '+tours.reviews+'개'}
            </span>, //데이터 베이스에 작성된 후기 갯수 가져오기
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
            title={<Link to={`/tour/${tours.id}`}><b>{tours.title}</b></Link>} //해당 게시글이 있는 URL로 보내주기
            // description={<div><CarOutlined />{tours.about}</div>} 
            />
            {/* {tours.content} */}
            {/* DB에서 해당 소개글 가져오기 간단하게!! */}
        </List.Item>
        )}
        />
        )}
            
        </HostToursListBlock>
        <AskRemoveModal
            visible={modal}
            onConfirm={onConfirm}
            onCancel={onCancel}
            />
        </Content>
    )
}

export default HostToursList;