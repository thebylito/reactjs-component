import React from 'react';
import ReactDOM from 'react-dom';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

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
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

/* 
  Para chamar no html:

    <div id="react-root" data-feed='asd' data-user='{"nome": "jose","sobrenome": "ricardo"}' ></div>
*/

const root = document.getElementById('react-root');
ReactDOM.render(<LikeButton {...root.dataset} />, root);
