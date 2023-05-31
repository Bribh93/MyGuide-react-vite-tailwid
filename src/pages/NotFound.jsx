import { useRouteError, Link } from "react-router-dom"
import { FaHandPaper } from "react-icons/fa";

useRouteError

export const NotFound = () => {
    const error = useRouteError();    
    console.log(error);
  return (
    <div>
        <h1>404</h1>
        <p>Page not found <FaHandPaper/></p>
        <p>{error.statusText || error.message}</p>
        <Link to="/">Atras</Link>
    </div>
  )
}
