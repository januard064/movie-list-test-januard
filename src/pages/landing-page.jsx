import React from "react";

import { PhotoGalery, Tooltip } from "../component";

const LandingPage = (props) => {



  return (
    <div>
      <Tooltip text={"Facere blanditiis ducimus facere."}>
        <PhotoGalery />
      </Tooltip>
    </div>
  );
};

export default LandingPage;
