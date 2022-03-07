import {combineReducers, createStore} from 'redux';


const rootReducer = combineReducers({

    glassReducer : (state ={name:'name defaut', url:'./glassesImage/v4.png'},action) => {
        switch(action.type){
            case 'XEM_KINH':{
                state = action.glass;
                return {...state}
            }
            default: return state    
        }
        
    }

});
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());