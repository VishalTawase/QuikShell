import React from 'react';

const DisplayOptions = ({ onGroupingChange, onSortingChange }) => {
  return (
    <div className="display-options">
      {/* Display Label */}
      <label><strong>Display</strong></label>
      
      {/* Grouping Dropdown */}
      <div>
        <label>Grouping</label>
        <select
          onChange={(e) => {
            const value = e.target.value;
            onGroupingChange(value);
          }}
        >
          <option value="status">By Status</option>
          <option value="user">By User</option>
          <option value="priority">By Priority</option>
        </select>
      </div>
      
      {/* Sorting Dropdown */}
      <div style={{ marginTop: '10px' }}>
        <label>Ordering</label>
        <select
          onChange={(e) => {
            const value = e.target.value;
            onSortingChange(value);
          }}
        >
          <option value="priority-desc">Sort by Priority (Descending)</option>
          <option value="title-asc">Sort by Title (Ascending)</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayOptions;
