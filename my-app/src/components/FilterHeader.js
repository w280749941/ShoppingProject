import React from 'react';
import FilterLink from '../containers/FilterLink';

const FilterHeader = () => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_YEEZY">
        Yeezy
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_JORDAN">
        Jordan
      </FilterLink>
    </p>
  );
}

export default FilterHeader
