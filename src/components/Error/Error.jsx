import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    // console.log(error);
    return (
        <div>
            <h1>{error.error.message}</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>page not found</h3>
                    <h2>Go Back to Home</h2>
                    <Link to='/'>Home</Link>

                    <p>{}</p>
                </div>
            }
        </div>
    );
};

export default Error;