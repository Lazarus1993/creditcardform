import {combineReducers} from 'redux'
import ccReducer from './creditcardReducer'
import {reducer as formReducer} from 'redux-form'
import occReducer from './oldcreditcardReducer'

export default combineReducers({
    newcc: ccReducer,
    form: formReducer,
    oldcc: occReducer
})