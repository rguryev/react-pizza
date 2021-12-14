import React, {useState} from 'react';
import PropTypes from "prop-types";
import PizzaBlock from "./PizzaBlock";

const Categories = React.memo(({ activeCategory, items, onClickItem}) => {

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickItem(null)}>Все</li>
        {items
        && items.map((name, index) => (
          <li className={activeCategory === index ? 'active' : ''} onClick={() => onClickItem(index)} key={`${name}_${index}`}>{name}</li>
        ))}
      </ul>
    </div>
  );
})

Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCLickCategory: PropTypes.func
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
}

export default Categories;
