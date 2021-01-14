import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import List from './List'
import Cart from './Cart'
import Product from './Product'

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
        <Route exact path='/Products'>
          <List/>
        </Route>
        <Route exact path='/Products/:id'>
          <Product/>
        </Route>
      </Switch>
    </div>
  )
}
