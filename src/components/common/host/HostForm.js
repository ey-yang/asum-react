import React from 'react';
import styled from 'styled-components';
import Responsive from '../Responsive';
import SideMenu from './SideMenu';

const HostViewerBlock = styled(Responsive)`
    display: flex;
    flex-direction: row;
`;

const Content = styled.div`
    flex: 0 1 80%;
    margin: 3% 0 3% 3%;
    border: 1px solid black;
    height: 100%
`;


const HostForm = ({ children }) => {
    return (
        <>
            <HostViewerBlock>
                <SideMenu/>
                <Content>
                {children}
                </Content>
            </HostViewerBlock>
        </>
    )
}

export default HostForm;