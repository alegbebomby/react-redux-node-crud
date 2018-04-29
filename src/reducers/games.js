import { SET_GAMES, GAME_FETCHED, GAME_UPDATED, GAME_DELETED } from "../actions";
import{ADD_GAME } from '../actions';


export default function games(state =[],action=[]){
    switch(action.type){
        case SET_GAMES:
            return action.games;
        case ADD_GAME:
            return [...state, action.game];
        case GAME_FETCHED:
        return state.map(item =>{
            if(item._id === action.game._id) return action.game;
            return item;
        });
        case GAME_UPDATED:
            const index = state.findIndex(item=> item._id ===action.game._id);
            if(index > -1){
                return state.map(item =>{
                    if(item._id === action.game._id) return action.game;
                    return item;
                })
            }else{
                return [...state, action.game];
            }
            
        case GAME_DELETED:
            return state.filter(item => item._id !== action.gameId)
            
        default:
            return state;
    }
}