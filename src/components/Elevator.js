import React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
function Elevator(props) {
  const { children } = props;
  const Trigger = useScrollTrigger();
  return React.cloneElement(children, {
    elevation: Trigger ? 4 : 0,
  });
}

export default Elevator;
