import Wrapper from "../assets/wrappers/ErrorPage"
import { Link, useRouteError } from "react-router-dom";

import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error)
  if(error.status === 404){
    return (
      <Wrapper>
        <div>
          <img src={img} alt="404" />
          <h1>404</h1>
          <h3>Sorry, the page you tried cannot be found</h3>
          <Link to="/" className=""><h3>back home</h3></Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <h1>Error</h1>
  )
}

export default Error