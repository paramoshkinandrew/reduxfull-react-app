import * as React from 'react';
import { connect } from 'react-redux';
import { setTodoItemDone, deleteTodoItem } from './todoItemsActions';
import { TodoItem } from './TodoItem';

class TodoItemsComponent extends React.PureComponent {
  render() {
    const { todoItems, setTodoItemDone, deleteTodoItem } = this.props;
    return (
      <div>
        {todoItems.map((todoItem) => (
          <div key={todoItem.id}>
            <TodoItem onChange={setTodoItemDone} onDelete={deleteTodoItem} todoItem={todoItem} />
          </div>
        ))}
      </div>
    );
  }
}

export const TodoItems = connect(({ todoItems }) => ({
  todoItems
}), {
  setTodoItemDone,
  deleteTodoItem,
})(TodoItemsComponent);
