import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const SideMenuBlock = styled.div`
    flex: 0 1 10%;
    min-height: 93.7vh;
    text-align: center;
    padding: 0;
    background-color: ${palette.cyan[2]};

    .side__menu {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 5% 0 5% 0;
        margin-top: 5%;
        &:hover {
            background-color: ${palette.cyan[4]};
        }
    }
    .side__menu a{
        color: #fff;
    }

`;


const SideMenu = () => {
    let user = 'info';
    return (
        <SideMenuBlock>
            {user !== 'info' ? (
                    <div className="side__menu">
                        <Link to="/host/apply">호스트 등록</Link>
                    </div>
                ) : (
                    <div>
                    <div className="side__menu">
                        <Link to="/host/tours">상품 관리</Link>
                    </div>
                    <div className="side__menu">
                        <Link to="/host/sales">판매 관리</Link>
                    </div>
                    <div className="side__menu">
                        <Link to="/host/inquiry">문의 관리</Link>
                    </div>
                    <div className="side__menu">
                        <Link to="/host/account">계정 관리</Link>
                    </div>
                    </div>
                    )}
        </SideMenuBlock>
    )
}

export default SideMenu;
