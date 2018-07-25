import React from 'react';
import ReactDOM from 'react-dom';
import DragSortableList from 'react-drag-sortable';

const list = [
  {
    content: (
      <img
        style={{ width: 350, height: 350 }}
        src="https://placeimg.com/350/351/any"
      />
    ),
  },
  {
    content: (
      <img
        style={{ width: 350, height: 350 }}
        src="https://placeimg.com/350/352/any"
      />
    ),
  },
  {
    content: (
      <img
        style={{ width: 350, height: 350 }}
        src="https://placeimg.com/350/353/any"
      />
    ),
  },
  {
    content: (
      <img
        style={{ width: 350, height: 350 }}
        src="https://placeimg.com/350/354/any"
      />
    ),
  },
  {
    content: (
      <img
        style={{ width: 350, height: 350 }}
        src="https://placeimg.com/350/355/any"
      />
    ),
  },
  {
    content: (
      <img
        style={{ width: 350, height: 350 }}
        src="https://placeimg.com/350/350/any"
      />
    ),
  },
  {
    content: (
      <img
        style={{ width: 350, height: 350 }}
        src="https://placeimg.com/350/356/any"
      />
    ),
  },
];

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  render() {
    return (
      <DragSortableList
        items={list}
        dropBackTransitionDuration={0.3}
        onSort={(e) => false}
        type="grid"
      />
    );
  }
}

/* 
  Para chamar no html:

    <div id="react-root" data-feed='asd' data-user='{"nome": "jose","sobrenome": "ricardo"}' ></div>
*/

const root = document.getElementById('react-root');
ReactDOM.render(<LikeButton {...root.dataset} />, root);
