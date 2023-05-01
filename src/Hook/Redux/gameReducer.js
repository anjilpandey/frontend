const initialData = {
    game: "Football",
    player: "Messi"
}

const gameReducer = (state = initialData, action) => {

    switch (action.type) {
        case "UPDATE GAME":
            return { ...state, game: action.payload }

        case "UPDATE PLAYER":
            return { ...state, player: action.payload }

        case "RESET GAME":
            return {...state, game: initialData.game}  
            
        case "RESET PLAYER":
            return {...state, player: initialData.player}    
        
        default:
            return state
    }

}

export default gameReducer