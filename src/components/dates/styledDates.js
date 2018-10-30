import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// set up commonly used div
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-around;
  flex-wrap: wrap;
  align-items: center;
  font-family: helvetica;
  background:none;
  border:none;
  font-size:1em;
  outline: 0;
  color: #7f47ff;
  font-weight: 600;
`;

export const ButtonContainer = styled(FlexRow)`
  justify-content: center;
  align-items: space-around;
  flex-wrap: wrap;
  height: 160px;
  width: 180px;
  align-items: center;
  font-family: helvetica;
  margin: 5px;
  background-color: white;
  border-radius: 4px;
  position: relative;
`;

export const DateInputContainer = styled(FlexCol)`
  width: 35vw;
  align-items: center;
`;

export const DialogInput = styled(TextField)`
  width: 50%;
  margin-left: 25%;
  align-items: center
`;

export const DateText = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  color: grey;
  margin-bottom: 2px;
`;

export const ClearButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const DialogButtonContainer = styled(FlexRow)`
  margin-bottom: 25px;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 50%;
`;

export const DialogContents = styled(FlexCol)`
  align-items: center
`;

export const DialogButton = styled(Button)`
  margin: 5px;
`;
