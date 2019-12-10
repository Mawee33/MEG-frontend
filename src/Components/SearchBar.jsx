import React from "react";
import apiHandler from "./../api/APIHandler";

export default function SearchBar(props) {
  const handleChange = async e => {
    const string = e.target.value;
    if (string) {
      const apiRes = await apiHandler.get(`/search?q=${string}`);
      props.searchClbk(apiRes.data);
    } else props.searchClbk(undefined);
  };

  return (
    <div className="search-bar">
      <input
        className={`input ${!props.status ? "is-active" : ""}`}
        name="search-query"
        type="text"
        placeholder="search vetements ou lingerie"
        onChange={handleChange}
      />
    </div>
  );
}
