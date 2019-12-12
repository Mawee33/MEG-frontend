import React from "./node_modules/react";
import NavMain from "./NavMain";
import NavAdmin from "./NavAdmin";
import NavUser from "./NavUser";
import SearchBar from "./SearchBar";

export default function HeaderMain({ navMobileClbk, searchClbk }) {
  return (
    <header id="header_main">
      <NavMain navMobileClbk={navMobileClbk}/>
      <NavAdmin navMobileClbk={navMobileClbk}/>
      <SearchBar searchClbk={searchClbk} />
      {/* <NavUser navMobileClbk={navMobileClbk} /> */}
    </header>
  );
}
