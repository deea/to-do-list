import React from 'react';
import { connect } from 'react-redux';
import { todosActions} from '../reducers/todos';
import Item from './Item';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 10px auto;
  text-align: center;
  justify-content: center;
`;

const Liststyle = styled.ul`
  list-style-type: none;
`;

const Button = styled.button`
  border: 2px solid lightblue;
  background: none;
  height: 30px;
  width: auto;
  color: lightblue;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  margin: 10px;
`;

const TodosList = ( {todos, addItem, deleteItem, onChange, onChecked, loadItems} ) => {
  React.useEffect(() => {
    loadItems();
  }, []);

  return (
    <Container>
      <h1>To Do List</h1>
      <Button onClick={addItem}>
        Add new item
      </Button>
      <Liststyle>
        {todos.map((todo, i) => (
          <Item 
            todo={todo}
            onChange={(event) => onChange(event.target.value, i)}
            onChecked={() => onChecked(i)}
            deleteItem={() => deleteItem(i)}
            key={i}
          />
        ))}
      </Liststyle>
    </Container>
  );
};

const mapStateToProps = (state) => (
  {
    todos: state
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    addItem: () => dispatch(todosActions.addItem()),
    deleteItem: (i) => dispatch (todosActions.deleteItem(i)),
    onChange: (value, i) => dispatch(todosActions.onChange(value, i)),
    onChecked: (i) => dispatch(todosActions.onChecked(i)),
    loadItems: () => dispatch(todosActions.loadItems()),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
