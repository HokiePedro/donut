import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import {stringify} from 'circular-json-es6';
import get from 'lodash.get';
import Configs from '../../configs.json';
import { DateItem } from './styledDates';

class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderButtons = () => {
  }

  render() {
    const { Date } = this.props;
    return (
      <DateItem>
        {Date}
      </DateItem>
    );
  }
}

Dates.propTypes = {
  Date: PropTypes.string,
};

Dates.defaultProps = {
  Date: '',
};

export default Dates;
