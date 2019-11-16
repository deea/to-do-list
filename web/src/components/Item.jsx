import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  border: none;
  font-size: 24px;
  border-bottom: 2px dashed lightblue;
  text-decoration: ${props => props.done === true && 'line-through'};
  font-style: ${props => props.done === true && 'italic'};
`;

const Checkbox = styled.input`
  height: 24px;
  width: 24px;
  margin-right: 10px;
`;

const DeleteButton = styled.button`
  font-size: 16px;
  border-radius: 50%;
  background: transparent;
  color: grey; 
  border: 2px solid lightblue;
  visibility: hidden;
`;

const ListItem = styled.li`
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  :hover {
    ${DeleteButton} {
      visibility: visible;
    }
  }
`;

const Item = ({ todo, onChange, onChecked, deleteItem }) => (
  <ListItem>
    <Checkbox
      type="checkbox"
      checked={todo.done}
      onChange={onChecked}
    />
    <Input
      type="text"
      value={todo.title} 
      done={todo.done}
      readOnly={todo.done}
      onChange={onChange}
    />
    <DeleteButton 
      onClick={deleteItem}>
        X
    </DeleteButton>
  </ListItem>
);

Item.propTypes = {
  todo: PropTypes.shape({
    done: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
};

export default Item;
