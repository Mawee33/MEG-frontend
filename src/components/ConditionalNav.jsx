import React from "react";

import { useAuth } from "./../auth/useAuth";
import NavAdmin from "./NavAdmin";
import NavMain from "./NavMain";
import NavUser from "./NavUser";
import SearchBar from "./SearchBar";

export default function ConditionalNav(props) {
  // const userContext = useContext(UserContext);
  //   const { setCurrentUser } = userContext;

  const { currentUser, isLoading } = useAuth();

  if (isLoading) return null;
  return (
    <>
    <SearchBar searchClbk={props.searchClbk}/>
      {!currentUser && <NavMain />}
      {currentUser && currentUser.role === "user" && <NavUser />}
      {currentUser && currentUser.role === "admin" && <NavAdmin />}
    </>
  );
}
