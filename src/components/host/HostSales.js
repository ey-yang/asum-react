import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, DatePicker, Space, Input } from 'antd';
import 'antd/dist/antd.css';

// const HostViewerBlock = styled(Responsive)`
//     display: flex;
//     flex-direction: row;
// `;

const Content = styled.div`
    flex: 0 1 80%;
    margin: 3% 0 3% 3%;
    border: 1px solid black;
    height: 100%;
`;

const HostSalesBlock = styled.div`
  padding: 4%;
`;

const HostSales = ({ hostSalesList, hostSalesListError, loading }) => {
    if (hostSalesListError) {
      return <div>에러가 발생했습니다.</div>;
    }

    //map으로 돌려서 빼주기

  //서버로부터 받아 오는 데이터 대입해 주기
  const data = [{
      key: 2,
      salesDate: '2020-09-18',
      salesProduct: '제주 해녀 밥상',
      salesNumber: 70,
      travelDay: '2020-09-18',
      addOne: '점심',
      addTwo: '뿔소라/1',
      addThree: '이소라/1',
      guestName: '김우종',
      phoneNumber: '010-1234-5678',
      Progress: '결제완료'
  }]

  //컬럼 이름 정하는 곳
const columns = [
    {
      title: 'No.',
      dataIndex: 'key',
    },
    {
      title: '판매일',
      dataIndex: 'salesDate',
      sorter: {
        compare: (a, b) => a.salesDate - b.salesDate,
        multiple: 3,
      },
    },
    {
      title: '판매상품',
      dataIndex: '',
      sorter: {
        compare: (a, b) => a.salesProduct - b.salesProduct,
        multiple: 2,
      },
    },
    {
      title: '수량',
      dataIndex: 'qty',
    },
    {
        title: '여행일',
        dataIndex: 'tour_date',
        sorter: {
            compare: (a, b) => a.travelDay - b.travelDay,
            multiple: 1,
          },
    },
    {
        title: '추가1',
        dataIndex: 'option',
        sorter: {
            compare: (a, b) => a.addOne - b.addOne,
            multiple: 1,
          },
    },
    {
        title: '추가2',
        dataIndex: 'addTwo',
        sorter: {
            compare: (a, b) => a.addTwo - b.addTwo,
            multiple: 1,
          },
    },
    {
        title: '추가3',
        dataIndex: 'addThree',
        sorter: {
            compare: (a, b) => a.addThree - b.addThree,
            multiple: 1,
        },
    },
    {
        title: '고객명',
        dataIndex: 'user_name',
    },
    {
        title: '연락처',
        dataIndex: 'phoneNumber',
    },
    {
        title: '진행상황',
        dataIndex: 'Progress',
        sorter: {
            compare: (a, b) => a.Progress - b.Progress,
            multiple: 1,
        },
    },
  ];



//   const onChanges = useCallback((e) => {
//     console.log(e)
//   })
//   const [product, setProduct] = useState('');
//   const onSeachProduct = useCallback((value) => {
//     setProduct(value);
//   }, [])

  function onColumnsChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter,extra);
  } //왜 위아래 펑션이 같은 이름임? 이름 따로해야함


//   const onChanges = useCallback((e) => {
//     console.log(e)
//   })
//   const [product, setProduct] = useState('');
//   const onSeachProduct = useCallback((value) => {
//     setProduct(value);
//   }, [])



      
    return (
        <>
                <Content>
                <HostSalesBlock>
                {!loading && hostSalesList && (
                <Table columns={columns} dataSource={data} onChange={onColumnsChange} />
                )}
                {/* 검색함수 value값 연습해봄 */}
                {/* {product && <Table columns={columns} dataSource={data} onChange={onChange} />} */}
                  
                  
                {/* <div style={{ marginBottom: '1%' }}>
                <b>판매일: </b>
                <Space direction="vertical" size={12}>
                판매일 함수 구현해야함
                  <DatePicker.RangePicker style={{ width: '100%' }} onChange={onChanges} />
                </Space>


                <b> 판매상품: </b>
                검색함수 구현해야함
                <Input.Search
                  placeholder="검색"
                  onSearch={onSeachProduct}
                  style={{ width: '10%' }}
                />


                <b> 여행일: </b>
                <Space direction="vertical" size={12}>
                  여행일 함수 구현해야함
                  <DatePicker.RangePicker style={{ width: '100%' }} onChange={onChanges} />
                </Space>


                <b> 추가1: </b>
                <Input.Search
                  placeholder="검색"
                  onSearch={value => console.log(value)}
                  style={{ width: '7%' }}
                />


                <b> 고객명: </b>
                <Input.Search
                  placeholder="검색"
                  onSearch={value => console.log(value)}
                  style={{ width: '7%' }}
                />

                <b> 연락처: </b>
                <Input.Search
                  placeholder="검색"
                  onSearch={value => console.log(value)}
                  style={{ width: '17%' }}
                />
                </div> */}
                </HostSalesBlock>
                </Content>
        </>
    )
}

export default HostSales;