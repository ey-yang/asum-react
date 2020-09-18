import React from 'react';
import TpTest from '../testing/TpTest';
import CounterContainer from '../containers/common/CounterContainer';
import Counter from '../components/common/Counter';


const TpTestPage = () => {
    return (
        <div>테스트
            <TpTest />
            <CounterContainer />
        </div>
        
        
    );
};

export default TpTestPage;