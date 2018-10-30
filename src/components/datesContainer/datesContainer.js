import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import {stringify} from 'circular-json-es6';
import get from 'lodash.get';
import Configs from '../../configs.json';
import {DaysWrapper, DaysContainer} from './styledDatesContainer';
import Dates from '../dates/dates';

class DatesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderButtons = () => {
    const days = Configs['dates'];
    return (Object.keys(days).map((day, index) =>
      <Dates
        key={day}
        Date={days[day].name}
      />
    ));
  }

  render() {
    return (
      <DaysWrapper>
        <DaysContainer>
          {this.renderButtons()}
        </DaysContainer>
      </DaysWrapper>
    );
  }
}

export default DatesContainer;
