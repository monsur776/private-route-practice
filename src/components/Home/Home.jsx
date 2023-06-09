import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
   const user = useContext(AuthContext);
   console.log(user);
   return (
      <div>
         <h2>This is home</h2>
         {user && <p>{user.name}</p>}
      </div>
   );
};

export default Home;
