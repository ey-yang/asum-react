import React from 'react';
import CounterContainer from '../containers/common/CounterContainer';
import styled from 'styled-components';



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
  <select></select>
    
  </Block>
);
}

export default UiTest;