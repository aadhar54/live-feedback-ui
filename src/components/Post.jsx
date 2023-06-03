import { Navigate, useNavigate } from 'react-router-dom';

function Post() {

    const navigate = useNavigate();

    const onClick = () => {
        //redirect to the About Page
        navigate('/about')
    }

    return (
        <div>
            <h1>Post</h1>
            <button onClick={onClick}>Click</button>
        </div>
    )
}

export default Post