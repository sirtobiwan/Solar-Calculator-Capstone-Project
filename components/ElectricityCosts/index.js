import styled from "styled-components";

const StyledInput = styled.input`
  
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 15rem;
  //pseudoklasse für placeholder
  ::placeholder {
    color: #cccccc;
  }`;

export default function ElectricityCosts({onChangeInput, value}) {
  
  return (
    <div>
      <StyledInput
        type="text"
        id="electricityCosts"
        placeholder="0.35 Euro (average costs)"
        value={value}
        onChange={onChangeInput}

      />
    </div>
  );
}
