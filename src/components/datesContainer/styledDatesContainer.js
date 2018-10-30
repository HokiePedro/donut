import React from 'react';
import styled from 'styled-components';

export const DaysWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-around;
  flex-wrap: wrap;
  background-color: #eff1f3;
`;

export const DaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-around;
  flex-wrap: wrap;
  width: 1000px;
  padding-bottom: 20px;
  background-color: #eff1f3;
  height: 70vh;
  padding-top: 50px;
  align-content: flex-start;
`;

export const HeaderText = styled.div`
  width: 100%;
  margin-left: 35px;
  font-family: helvetica;
  font-weight: 200;
  font-size: 20px;
  height: 40px;
`;
