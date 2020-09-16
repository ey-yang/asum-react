import React from 'react';
import styled, { css } from 'styled-components';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import palette from '../lib/styles/palette';
import Button from '../components/common/Button';

const FooterBlock = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      color: ${palette.gray[7]};
    }
    
    ul {
      list-style:none;
      padding-left: 0.25rem;
      margin-top: 1rem;
    }
    li {
      margin-top: 0.9rem;
    }
`;

const FooterBox = styled.div`
    width: 910px;
    
`;

const Footer = () => {
    return(
        <FooterBlock>
            <FooterBox>
                <Row>
                    <Col span={12}>
                      <h2>Footer Content</h2>
                      <p>
                        Here you can use rows and columns here to organize your footer content.
                      </p>
                    </Col>
                    <Col span={4}>
                      <h3>소개</h3>
                      <ul class="list-unstyled">
                        <li><Link to="#!">회사소개</Link></li>
                        <li><Link to="#!">서비스 소개</Link></li>
                        <li><Link to="#!">자주묻는 질문</Link></li>
                      </ul>
                    </Col>
                    <Col span={4}>
                      <h3>파트너십</h3>
                      <ul class="list-unstyled">
                        <li><a href="#!">호스트 신청</a></li>
                        <li><a href="#!">어썸 파트너십</a></li>
                        
                      </ul>
                    </Col>
                    <Col span={4}>
                      <h3>이용약관</h3>
                      <ul class="list-unstyled">
                        <li><a href="#!">약관</a></li>
                        <li><a href="#!">개인정보 취급방침</a></li>
                        <li><a href="#!">쿠키정책</a></li>
                        
                      </ul>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}></Col>
                    <Col span={12}></Col>
                </Row>
            </ FooterBox>
        </FooterBlock>
    )
}

export default Footer;