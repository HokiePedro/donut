import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import Configs from '../../configs.json';
import { DaysWrapper, DaysContainer, HeaderText } from './styledDatesContainer';
import Dates from '../dates';

const DatesContainer = () => {

  const renderButtons = () => {
    const days = Configs['dates'];
    return (Object.keys(days).map((day, index) =>
      <Dates
        key={day}
        DateObj={days[day]}
      />
    ));
  }

  return (
    <DaysWrapper>
      <DaysContainer>
        <HeaderText> Dates </HeaderText>
        {renderButtons()}
      </DaysContainer>
    </DaysWrapper>
    );
}

export default DatesContainer;
