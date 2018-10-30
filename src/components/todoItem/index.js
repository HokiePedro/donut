import React, { Fragment } from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import { DateButton } from '../dates/styledDates';
import {
  TodoItemContents,
  TodoItemContainer,
  HourContainer,
  StyledCheckbox,
  TitleContainer,
} from './styledTodoItem';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    };
  }

  // Handles Confirmation Selection
  toggleConfirmation = (event) => {
    const { completed } = this.state;
    event.stopPropagation();
    this.setState({
      completed: !completed,
    });
  }

  render() {
    const { title, hour, onToggle, key, id } = this.props;
    const { completed } = this.state;
    return (
      <Fragment>
        <DateButton
          key={key}
          onClick={(v) => onToggle(id)}
        >
          <TodoItemContainer>
            <TodoItemContents>
              <TitleContainer>{ title }</TitleContainer>
              <HourContainer>{ hour }</HourContainer>
            </TodoItemContents>
            <StyledCheckbox checked={ completed } color="default" onClick={this.toggleConfirmation} />
          </TodoItemContainer>
        </DateButton>
      </Fragment>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string,
  hour: PropTypes.string,
  id: PropTypes.number,
  key: PropTypes.string,
  onToggle: PropTypes.func,
};

TodoItem.defaultProps = {
  title: '',
  hour: '',
  id: '',
  key: '',
  onToggle: () => {},
};

export default TodoItem;
