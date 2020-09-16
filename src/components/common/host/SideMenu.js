import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const SideMenuBlock = styled.div`
    flex: 0 1 20%;
    min-height: 93.7vh;
    text-align: center;
    padding: 0;
    background-color: ${palette.cyan[2]};

    .side__menu {
        color: #fff;
        font-size: 1.5rem;
        padding: 5% 0 5% 0;
        margin-top: 5%;
        &:hover {
            background-color: ${palette.cyan[4]};
        }
    }
`;

const SideMenu = () => {
    let user = 'host';
    return (
        <SideMenuBlock>
            {user !== 'host' ? (
                    <div className="side__menu">
                    <Link to="/hostregister">호스트 등록</Link>
                    </div>
                ) : (
                    <div>
                    <div className="side__menu">
                    <Link to="/hostproduct">상품 관리</Link>
                    </div>
                    <div className="side__menu">
                        <Link to="/hostsales">판매 관리</Link>
                    </div>
                    <div className="side__menu">
                        <Link to="/hostinquiry">문의 관리</Link>
                    </div>
                    <div className="side__menu">
                        <Link to="/hostinfo">계정 관리</Link>
                    </div>
                    </div>
                    )}
        </SideMenuBlock>
    )
}

export default SideMenu;
