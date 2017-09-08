import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  return (
    <form>
      <label>Search video:</label>
      <input
        className="form-control"
        value={props.searchBar}
        onChange={(e) => props.changeSearch(e)}
        type="text"
        placeholder="Search..."
      />
      <br/>
      <input
        type="submit"
        onClick={(e) => props.getVideoList(e)}
        className="btn btn-success"
        value="Submit"
      />
    </form>
  );
};

SearchBar.propTypes ={
  searchBar: PropTypes.string.isRequired,
  changeSearch: PropTypes.func.isRequired,
  getVideoList: PropTypes.func.isRequired,
};


export default SearchBar;