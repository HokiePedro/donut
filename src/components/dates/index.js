import React, { Fragment } from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DeleteIcon from '@material-ui/icons/Delete';
import Configs from '../../configs.json';
import TodoItem from '../todoItem';
import {
  DateButton,
  ButtonContainer,
  DateInputContainer,
  DialogInput,
  DateText,
  DialogButtonContainer,
  DialogButton,
  DialogContents,
  ClearButton,
  HeaderText,
} from './styledDates';

class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      inputTitle: '',
      inputHour: '',
      submitted: false,
      todoObject: {},
      selectedId: '',
    };
  }

  // Handles Input Dialog
  toggleDialog = (id) => {
    const { dialogOpen, submitted } = this.state;
    if (submitted) {
      this.setState({
        dialogOpen: !dialogOpen,
        selectedId: id,
        inputTitle: '',
        inputHour: '',
        submitted: false,
      });
    }
    this.setState({
      dialogOpen: !dialogOpen,
      selectedId: id,
    });
  }

  // Handles text input
  handleTextField = ( fieldName ) => event => {
    let value = event.target.value;
    this.setState({
      [fieldName]: value,
    });
  }

  // Handle Dialog Submit action
  confirmItem = () => {
    const {
      inputTitle,
      inputHour,
      todoObject,
      selectedId,
    } = this.state;

    // check if object is being edited
    let todoId = 0;
    if (selectedId !== '' &&  selectedId !== undefined) {
      todoId = selectedId;
    } else {
      todoId = Object.keys(todoObject).length;
    }

    // creates the unique object
    let todoItem = {};
    todoItem = {
      ...todoObject,
      [todoId]: {
        title: inputTitle,
        hour: inputHour,
        id: todoId,
      }
    };

    this.setState({
      submitted: true,
      todoObject: todoItem,
      selectedId: '',
  }, (e) => { this.toggleDialog('')}
  );
}

  // Clear input from Dates
  cancelInput = (event) => {
    event.stopPropagation();
    this.setState({
      inputTitle: '',
      inputHour: '',
    });
  }

  // Remove item
  removeItem = () => {
    const { todoObject, selectedId } = this.state;
    let newTodoObject = {...todoObject};
    delete newTodoObject[selectedId];
    this.setState({
      todoObject: newTodoObject,
      dialogOpen: false,
      submitted: true,
      itemId: '',
    });
  }

  renderTask = () => {
    const {
      todoObject,
      submitted,
     } = this.state;

     let dateContents = '';

     return Object.keys(todoObject).map((item) =>
       <div key={todoObject[item].id}>
         <TodoItem
           id={todoObject[item].id}
           title={todoObject[item].title}
           hour={todoObject[item].hour}
           onToggle={this.toggleDialog}
          />
       </div>
     );
  }

  render() {
    const { DateObj } = this.props;
    const {
      dialogOpen,
      inputTitle,
      inputHour,
      selectedId,
     } = this.state;

    const DateTitle = get(DateObj, 'name', '');

    return (
      <div>
        <ButtonContainer>
          <DateText>
            {DateTitle}
          </DateText>
          {this.renderTask()}
          <DateButton
            onClick={(e) => this.toggleDialog('')}
          >
            New Task
          </DateButton>
        </ButtonContainer>

        <Dialog
          open={dialogOpen}
          disableBackdropClick={false}
          onClose={(e) => this.toggleDialog('')}
        >
          <DialogContents>
            <DateInputContainer>
              <DialogInput
                margin='normal'
                variant='outlined'
                label='Title'
                value={inputTitle}
                onChange={this.handleTextField('inputTitle')}
              />
              <DialogInput
                margin='normal'
                variant='outlined'
                label='Hour'
                value={inputHour}
                onChange={this.handleTextField('inputHour')}
              />
            </DateInputContainer>
            <DialogButtonContainer>
              <DialogButton
                variant='text'
                color="primary"
                disabled={inputTitle === '' || inputHour === ''}
                onClick={this.confirmItem}>
                Confirm
              </DialogButton>
              <DialogButton
                variant='text'
                color="secondary"
                onClick={this.toggleDialog}>
                Cancel
              </DialogButton>
              { selectedId !== '' &&
                <DialogButton
                  variant='text'
                  color="secondary"
                  onClick={this.removeItem}>
                  Delete
                </DialogButton>}
            </DialogButtonContainer>
          </DialogContents>
        </Dialog>
      </div>
    );
  }
}

Dates.propTypes = {
  DateObj: PropTypes.object,
};

Dates.defaultProps = {
  DateObj: {},
};

export default Dates;
