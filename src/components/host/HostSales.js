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
    //map으로 돌려서 빼주기



          //데이터 이런식으로 주기
          //각각의 엘리먼트에는 키가 필요하다 키가 없을시에 콘솔에 키 어쩌구 에러뜸~
  //   {movies.map(element =>  (
  //     <Movie
  //      key = {element.id}
  //      id={element.id}
  //      year={element.year}
  //      title={element.title}
  //      summary={element.summary}
  //      poster={element.medium_cover_image}
  //      genres={element.genres} // 추가
  //   />
  // ))}


  // 서버로부터 받아 오는 데이터 대입해 주기
  // const data = [{
  //     id: hostSalesList.id,
  //     // salesDate: '2020-09-18',
  //     title: hostSalesList.title,
  //     qty: hostSalesList.qty,
  //     tour_date: '2020-09-18',
  //     // addOne: '점심',
  //     option: '뿔소라/1',
  //     // addThree: '이소라/1',
  //     username: '김우종',
  //     // phoneNumber: '010-1234-5678',
  //     total_price: '결제완료'
  // }]

  //컬럼 이름 정하는 곳
const columns = [
    {
      title: 'No.',
      dataIndex: 'id',
      key: 'id',
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 2,
      },
    },
    // {
    //   title: '판매일',
    //   dataIndex: 'salesDate',
    //   sorter: {
    //     compare: (a, b) => a.salesDate - b.salesDate,
    //     multiple: 3,
    //   },
    // },
    {
      title: '판매상품',
      dataIndex: 'title',
      key: 'title',
      sorter: {
        compare: (a, b) => a.salesProduct - b.salesProduct,
        multiple: 2,
      },
    },
    {
      title: '수량',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
        title: '여행일',
        dataIndex: 'tour_date',
        key: 'tour_date',
        sorter: {
            compare: (a, b) => a.travelDay - b.travelDay,
            multiple: 1,
          },
    },
    {
        title: '옵션',
        dataIndex: 'option',
        key: 'option',
        sorter: {
            compare: (a, b) => a.addOne - b.addOne,
            multiple: 1,
          },
    },
    // {
    //     title: '추가2',
    //     dataIndex: 'addTwo',
    //     sorter: {
    //         compare: (a, b) => a.addTwo - b.addTwo,
    //         multiple: 1,
    //       },
    // },
    // {
    //     title: '추가3',
    //     dataIndex: 'addThree',
    //     sorter: {
    //         compare: (a, b) => a.addThree - b.addThree,
    //         multiple: 1,
    //     },
    // },
    {
        title: '고객명',
        dataIndex: 'username',
        key: 'username',
    },
    // {
    //     title: '연락처',
    //     dataIndex: 'phoneNumber',
    // },
    {
        title: '합계',
        dataIndex: 'total_price',
        key: 'total_price',
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



if (hostSalesListError) {
  return <Content>
    <HostSalesBlock>
    <div style={{ textAlign: 'center', fontSize: '2rem'}}>
        전산 에러가 발생했습니다. 불편드려 죄송합니다.
    <br/>담당자에게 연락주시면 빠르게 해결해드리겠습니다.
    </div>
    </HostSalesBlock>
    </Content>
}

    return (
        <>
                <Content>
                <HostSalesBlock>                  
                  
                <div style={{ marginBottom: '1%' }}>
                <b>판매일: </b>
                <Space direction="vertical" size={12}>
                {/* 판매일 함수 구현해야함 */}
                  <DatePicker.RangePicker style={{ width: '100%' }} 
                  // onChange={onChanges}
                  />
                </Space>


                <b> 판매상품: </b>
                {/* 검색함수 구현해야함 */}
                <Input.Search
                  placeholder="검색"
                  style={{ width: '10%' }}
                  // onSearch={onSeachProduct}
                />


                <b> 여행일: </b>
                <Space direction="vertical" size={12}>
                  {/* 여행일 함수 구현해야함 */}
                  <DatePicker.RangePicker style={{ width: '100%' }}
                  // onChange={onChanges}
                  />
                </Space>

                <b> 옵션: </b>
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
                </div>
                {!loading && hostSalesList && (
                <Table columns={columns} dataSource={hostSalesList} rowKey={row=>row.id} onChange={onColumnsChange} />
                )}
                {/* 검색함수 value값 연습해봄 */}
                {/* {product && <Table columns={columns} dataSource={data} onChange={onChange} />} */}

                </HostSalesBlock>
                </Content>
        </>
    )
}

export default HostSales;