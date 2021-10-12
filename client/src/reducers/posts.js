import Post from "../components/Posts/Post/Post";

export default (posts = [],action) => {
    
    switch(action.type)
    {
        case 'UPDATE':
            return Post.map((post)=> post._id === action.payload._id ? action.payload: post);
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...posts, action.payload];
            
        default:
            return posts;
    
    }   
}