export default (state = {
    isShow: false,
    content : [],
    uid : ''
}, action) => {
    switch (action.type) {
        case 'GODETAIL':
            return {
                ...state,
                content : action.content,
                uid : action.uid
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