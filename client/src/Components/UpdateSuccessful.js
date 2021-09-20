import React, {useEffect, useContext} from "react";
import { Context } from "../context/Context";

const UpdateSuccessful = ({findMe}) => {
    const {user} = useContext(Context)

    useEffect(() => {
        findMe();
      });

  return (
    <div>
      <h2>Welcome {user.username}.</h2> 
          <h3>Select a tab to continue.</h3>
    </div>
  );
};

export default UpdateSuccessful;
