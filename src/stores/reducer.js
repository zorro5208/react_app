export default (state = {
    isShow: false,
    content : [],
    uid : '',
    token : false,
    username : ''
}, action) => {
    switch (action.type) {
        case 'GODETAIL':
            return {
                ...state,
                content : action.content,
                uid : action.uid
            }
        case 'login':
            return {
                ...state,
                to : action.content,
                token : action.token,
                username : action.username
            } 
        case 'SEARCH':
            return {
                ...state,
                isShow: action.isShow
            }
            default:
                return state
            }
        }