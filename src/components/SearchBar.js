import React from 'react';

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

export default SearchBar;