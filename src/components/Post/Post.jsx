/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {title, body, userId, id} = post;
    const navigate = useNavigate()
    const handleShowdetail=()=>{
        navigate(`post/${id}`)

    }
    return (
        <div className="border-2 border-orange-600 p-4 rounded-xl flex flex-col">
            <h1>Post  id : {userId}</h1>
            <h2 className="mb-2 text-sm flex-grow">{title}</h2>
            {/* <p className="text-sm">{body}</p> */}
            <Link to={`post/${id}`} className="text-sm">See Post Detail</Link>
            <button onClick={handleShowdetail}>Click to see detail</button>
        </div>
    );
};

export default Post;