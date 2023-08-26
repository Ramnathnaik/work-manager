"use client";

import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { currentUser } from "@/app/services/authServices";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function load() {
      try {
        const tempUser = await currentUser();
        tempUser?.name ? setUser({ ...tempUser }) : setUser(undefined);
      } catch (error) {
        console.log(error);
        toast.error("Error in loading current user");
        setUser(undefined);
      }
    }
    load();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
