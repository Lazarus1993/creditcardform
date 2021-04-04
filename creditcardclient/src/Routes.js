import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CreditCardForm from './component/creditcardform'

let Routes = () =>{
    return(
    <Router>
        <Route exact path="/creditcardform" component={CreditCardForm}/>
    </Router>)
}

export default Routes;