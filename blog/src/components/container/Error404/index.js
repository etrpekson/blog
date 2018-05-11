import React from "react";

import PageTitle from "../../reusable/PageTitle";
import SubContent from "../SubContent";

function Error404(props) {
  return (
    <SubContent>
      <PageTitle title="Error 404: Sorry, this page does not exist." />
    </SubContent>
  );
}

export default Error404;
