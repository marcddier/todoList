import React, {Component} from 'react';
import Item from './item'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentInput : '',
      items: []
    };
    this.catchInput = this.catchInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  catchInput(e) {
    this.setState({
      currentInput : e.target.value
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = {
      text: this.state.currentInput,
      key: this.state.items.length,
    }

    this.setState(previousState => ({
      items: [...previousState.items, newItem],
      currentInput: '',
    }))
  }

  buildList() {
    return this.state.items.map(item => {
      return <Item text={item.text} key={item.key} itemKey={item.key} deleteItem={this.deleteItem}/>
    })
  }

  deleteItem(key) {
    const newList = this.state.items.filter(item => {
      return key !== item.key;
    })
    this.setState({
      items: newList
    })
  }

  render() {
    const list = this.buildList();
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input onChange={this.catchInput} value={this.state.currentInput}/>
          <button>add</button>
        </form>
        <div>
          {list}
        </div>
      </div>
    )
  }
}

export default TodoList;