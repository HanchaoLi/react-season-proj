import jsonPalceholder from '../apis/jsonPlaceholder';


export const fetchPosts = () => async dispatch => {
    const response = await jsonPalceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


