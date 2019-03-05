import * as React from 'react';
import { Checkbox, Button } from 'antd';

export class TodoItem extends React.PureComponent {
  onChange = () => {
    const { todoItem, onChange } = this.props;
    onChange(todoItem.id, !todoItem.done);
  };

  onDelete = () => {
    const { todoItem, onDelete } = this.props;
    onDelete(todoItem.id);
  };

  render() {
    const { todoItem } = this.props;
    return (
      <React.Fragment>
        <Checkbox checked={todoItem.done} onChange={this.onChange}>
          {todoItem.text}
        </Checkbox>
        <Button htmlType="button" type="dashed" shape="circle" icon="delete" onClick={this.onDelete} />
      </React.Fragment>
    );
  }
}
