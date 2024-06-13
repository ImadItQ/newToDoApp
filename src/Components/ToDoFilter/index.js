import React from 'react';

const TodoFilter = ({ filter, setFilter }) => (
  <div>
    <button onClick={() => setFilter('all')}>All</button>
    <button onClick={() => setFilter('active')}>Active</button>
    <button onClick={() => setFilter('completed')}>Completed</button>
  </div>
);

export default TodoFilter;
