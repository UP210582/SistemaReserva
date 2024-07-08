import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

const menuItems = [
  {
    id: 1,
    name: 'mesa',
    position: null,
  },
  {
    id: 2,
    name: 'datos',
    position: null,
  },
];

class Nav extends React.Component {

  renderMenuItems = (selectedItem) => {
    this.setState({
      actualPage: selectedItem
    });
  }

  render() {
    return (
      <navbar>
        <li>
          {menuItems.map(item => (
            <ul key={item.name}
              onClick={() => this.renderMenuItems(item.id)}>
              {item.name}
            </ul>
          ))}
        </li>
      </navbar>
    );
  }
}

export default Nav;