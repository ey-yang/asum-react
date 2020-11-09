import React from 'react';
import styled from 'styled-components';
import { PlusOutlined, MinusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Box, Calendar, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
// import Quill from 'quill';
// import 'quill/dist/quill.snow.css';
import Responsive from '../common/Responsive';
import { Upload, Modal, Form, Row, Col, Input, Button, Radio, Select, Space } from 'antd';
import 'antd/dist/antd.css';
import palette from '../../lib/styles/palette';

const AllBlock = styled.div`
    .optionInput {
    width: 30rem;
    height: 2rem;
  }
`;

const Title = styled.div`
    margin: 0.2rem 0 1rem 3rem;
    font-size: 1.5rem;
    font-weight: 900;
    color: ${palette.gray[7]};
`;
const Content = styled.div`
    flex: 0 1 50%;
    margin: 1rem 0 3% 2.5rem;
    border: 1px solid ${palette.gray[3]};
`;

const HostToursCreateBlock = styled(Form)`
    font-size: 1rem;
    padding: 7%;
    width: 800px;
`;

const RowWrapper = styled(Row)`
    margin-top: 3%;
`;

const EditorBlock = styled(Responsive)`
    padding: 0;
    width: 100%;
`;

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  border: 1px solid #d9d9d9;
  .ql-editor {
    padding: 1%;
    min-height: 700px;
    font-size: 1rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;


// about, onChangeField, 
const HostToursCreateForm = ({ form, previewVisible, previewImage, fileList,
    handleCancel, handlePreview, handleChange,  onChange, onSubmit, onSelect, dates, children, tagsChange,
    quillElement }) => {



    /* const uploadButton = (
      <div>
        <PlusOutlined />
        <div >사진 업로드</div><div style={{ fontSize: '0.7rem' }}>(최대 12장)</div>
      </div>
    ); */


    // function onChangeType(e) {

    //     console.log(`checked = ${e.target.value}`);
    // }
    
    const onFinish = values => {
        console.log('Received values of form:', values);
      };
    
    return (
    <AllBlock>
        <Title>
            투어 상품 만들기
        </Title>
        <Content>
            <HostToursCreateBlock onFinish={onSubmit}>

                <Row>
                <Col md={3}><label>상품명</label></Col>
                <Col md={20} >
                    <Input
                    type="text"
                    required
                    name="title"
                    onChange={onChange}
                    value={form.title}
                    />
                </Col>
                </Row>

                <RowWrapper>
                <Col md={3} style={{paddingTop:'10%'}}><label>가격</label></Col>
                <Col md={3}  style={{paddingTop:'10%'}}>
                    <Input
                        type="text"
                        required
                        style={{margin: 0}}
                        name="price"
                        onChange={onChange}
                        value= {form.price}
                    />
                </Col>
                <Col md={1} style={{paddingTop:'10%'}}><label style={{ verticalAlign: 'middle' }}>원</label></Col>
                <Col md={3} offset={5} style={{paddingTop:'10%'}}><label>휴무일 선택</label></Col>
                <Col md={3} offset={2}>
                    <Grommet theme={grommet}>
                    <Box align="center">
                        <Calendar
                        dates={dates}
                        bounds={['2020-09-21', '2022-12-13']}
                        animate={false}
                        size="small"
                        locale="ko"
                        onSelect={onSelect}
                        // name="colo"
                        />
                    </Box>
                    </Grommet>
                </Col>
                </RowWrapper>

                <RowWrapper>
                    <Col md={3}><label>옵션</label></Col>
                    
                    <Col md={20} >
                        {/* <Input 
                        required 
                        style={{ resize: 'none' }} 
                        placeholder="ex) 오후 7시 제주 해녀 밥상 (대인1)" 
                        name= "option"
                        onChange={onChange}
                        value={form.option}
                        /> */}
                        
                        <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                        <Form.List name="users">
                            {(fields, { add, remove }) => (
                            <>
                                {fields.map(field => (
                                <Space key={field.key} style={{ display: 'flex', marginBottom: 0}} align="baseline">
                                    {/* <Form.Item
                                    {...field}
                                    name={[field.name, 'first']}
                                    fieldKey={[field.fieldKey, 'first']}
                                    rules={[{ required: true, message: 'Missing first name' }]}
                                    > */}
                                    {/* <Input placeholder="First Name" /> */}
                                    {/* </Form.Item> */}
                                    <Form.Item
                                    {...field}
                                    name={[field.name, 'last']}
                                    fieldKey={[field.fieldKey, 'last']}
                                    rules={[{ required: true, message: 'Missing last name' }]}
                                    >
                                    <Input className="optionInput"/>
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                                ))}
                                <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add field
                                </Button>
                                </Form.Item>
                            </>
                            )}
                        </Form.List>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                        </Form>
                        
                    </Col>
                </RowWrapper>

                <RowWrapper>
                    <Col md={3}><label>태그</label></Col>
                    <Col md={20} >
                    <div>
                    <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="태그를 선택해주세요."
                    onChange={tagsChange}
                    name="tags"
                    >
                        {children}
                    </Select>
                    </div>
                    </Col>    
                </RowWrapper>


                <RowWrapper>
                <Col md={3}><label>소개</label></Col>
                            {/* 소개 컴포넌트 */}
                <Col md={20} >
                <EditorBlock>
                    <QuillWrapper>
                        <div ref={quillElement}
                         />
                    </QuillWrapper>
                </EditorBlock>
                </Col>
                </RowWrapper>

                <RowWrapper>
                    <Col md={3}><label>할인가능</label></Col>
                    <Col >
                        <Radio.Group name="refund_type" onChange={onChange} value={form.refund_type}>
                            <Radio value={'가능'}>가능</Radio>
                            <Radio value={'불가능'}>불가능</Radio>
                        </Radio.Group>
                    </Col>
                </RowWrapper>


                <Row style={{marginTop: '3%',justifyContent: 'center'}}>
                <Col><Button htmlType="submit">상품 등록</Button></Col>
                </Row>
            </HostToursCreateBlock> 
        </Content>
    </AllBlock>
    )
}

export default HostToursCreateForm;