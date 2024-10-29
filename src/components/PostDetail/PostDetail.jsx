import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
    const post = useLoaderData()
    const params = useParams()
    console.log(params);
    const {id} = params;
    const  navigate  = useNavigate()
    const handleGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div className="border-2 rounded-xl p-6 ">
            <h1>post id : {post.id}</h1>
            <h1>post detail : {post.title}</h1>

            <button onClick={handleGoBack}>Go Back</button>


        </div>
    );
};

export default PostDetail;