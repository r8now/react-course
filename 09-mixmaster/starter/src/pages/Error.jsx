import Wrapper from "../assets/wrappers/ErrorPage"
import { Link, useRouteError } from "react-router-dom";

import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <h1>Error</h1>
  )
}

export default Error