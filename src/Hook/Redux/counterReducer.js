const initialData = {
    count: 0,
    data: 100
}

const counterReducer=(state=initialData, action)=>{
// const counterReducer = (state = { initialData }, action) => {
    switch (action.type) {
        case "INCREASE COUNT":
            return { ...state, count: ++state.count }

        case "INCREASE DATA":
            return { ...state, data: state.data + 100 }

        case "DECREASE DATA":
            return { ...state, data: state.data - 100 }

        case "RESET DATA":
            return { ...state, data:0 }

        case "DECREASE COUNT":
            return { ...state, count : --state.count}    
        
            case "RESET":
            return { ...state, count : 0}    

        default:
            return state
    }

}

export default counterReducer



