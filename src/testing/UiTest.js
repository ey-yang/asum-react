import { Select, Divider, Input } from 'antd';
import React from 'react';
import CounterContainer from '../containers/common/CounterContainer';
import styled from 'styled-components';

const { Option } = Select;

const Block = styled.div`
    
    width: 1000;
    .ff {
        display: flex;
    flex-direction: row;
    background: black;
    height: 500;
    }
    
`;

const UiTest = () => {


    function handleChange(value) {
        console.log(`selected ${value}`);
      }

      const onNameChange = event => {
          this.setState({
            name: event.target.value,
          });
        };

return(

  <Block>
  <Select
        style={{ width: 500 }}
        placeholder="custom dropdown render"
        
      >
            <Option value="jack" className="ff">
                
                <div>제주 해녀 다이닝(연극&식사) / 1인dsfdfsdfsdfasdfasfasfasdf</div><CounterContainer />
                
            </Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
        <Option value="jack">
          Jack
          <CounterContainer />
        </Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    
  </Block>
);
}

export default UiTest;