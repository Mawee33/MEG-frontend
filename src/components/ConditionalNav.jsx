import React from "react";

import { useAuth } from "./../auth/useAuth";
import NavAdmin from "./NavAdmin";
import NavMain from "./NavMain";
import NavUser from "./NavUser";

export default function ConditionalNav() {
  // const userContext = useContext(UserContext);
  //   const { setCurrentUser } = userContext;

  const { currentUser, isLoading } = useAuth();

  if (isLoading) return null;
  return (
    <>
      {!currentUser && <NavMain />}
      {currentUser && currentUser.role === "user" && <NavUser />}
      {currentUser && currentUser.role === "admin" && <NavAdmin />}
    </>
  );
}
