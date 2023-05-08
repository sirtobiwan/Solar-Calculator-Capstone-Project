import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  //pseudoklasse um speziell den placeholder anzusprechen
  ::placeholder {
    color: #cccccc;
`;

export default function ElectricityCosts() {
  const [electricityCosts, setElectricityCosts] = useState('');

  const handleInputChange = (event) => {
    setElectricityCosts(event.target.value);
  };

  return (
    <div>
      <StyledInput
        type="text"
        id="electricityCosts"
        placeholder="0,35 Euro / kWh (average costs)"
        value={electricityCosts}
        onChange={handleInputChange}
      />
    </div>
  );
}
