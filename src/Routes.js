import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import List from './List'
import Cart from './Cart'

export const  Routes = () =>{
  return(
    <div>
      <Switch>
        <Route exact path='/'>
          <List/>
        </Route>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
      </Switch>
    </div>
  )
}
