import { createStore } from "redux"

const initialState ={
    players: [
        {
            id: 1,
            name: "Hector Rodriguez",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 2,
            name: "Beto Quiroga",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 3,
            name: "Alejo Garcia",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 4,
            name: "Juan Disain",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 5,
            name: "Alvaro Felipe",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 6,
            name: "Alexys Lozada",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 7,
            name: "Harold Pajuelo",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 8,
            name: "Manu Rodriguez",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 9,
            name: "AlejoRodríguez",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 10,
            name: "Andrés Muquinche",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 11,
            name: "Ricardo Otero",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 12,
            name: "Deivis Rivera",
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 13,
            name: "Percy Tuncar",
            photo:'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        }
    ],
    starters:[],
    substitutes:[]
}

const reducerTrainer = (state= initialState, action)=>{

    if(action.type === "ADD_STARTER"){
        return{
            ...state,
            starters: state.starters.concat(action.player),
            players:  state.players.filter(p => p.id !== action.player.id)
        }
    }
    if(action.type === "ADD_SUBSTITUTE"){
        return{
            ...state,
            substitutes: state.substitutes.concat(action.player),
            players:  state.players.filter(p => p.id !== action.player.id)
        }
    }
    if(action.type === "REMOVE_STARTER"){
        return{
            ...state,
            starters: state.starters.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)
        }
    }
    if(action.type === "REMOVE_SUBSTITUTE"){
        return{
            ...state,
            substitutes: state.substitutes.filter(p => p.id !== action.player.id),
            players: state.players.concat(action.player)
        }
    }
    return state 
}

export default createStore(reducerTrainer)
  