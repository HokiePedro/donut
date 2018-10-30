import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

export const TodoItemContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5px;
  width: 140px;
`;
export const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 1px #eff1f3;
  max-height: 28px;
  &:first-child {
    margin-top: 10px;
  }
`;

export const TitleContainer = styled.div`
  max-height: 14px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  text-align: justify;
`;
export const HourContainer = styled.div`
  font-weight: 100;
  max-height: 14px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  text-align: justify;
`;

export const StyledCheckbox = styled(Checkbox)`
  padding: 0 !important;
`;
