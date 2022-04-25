import {Navbar,NavbarBrand} from 'reactstrap';
import React, { Component } from 'react';
import { useState } from "react";
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes'
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent'
import {Routes,Route,Navigate} from 'react-router-dom';
import Header from './HeaderComponent'
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
class Main extends Component {
  constructor (props){
    super (props);
    this.state = {dishes: DISHES, comments: COMMENTS, promotions: PROMOTIONS, leaders: LEADERS};
  }


  render(){
    const shouldRedirect=true;

    const HomePage=()=>{
    return (
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
              promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
              leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
        />
    );
  }
  return (<div className="App">
    <Header />
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route exact path='/contactus' element={<Contact/>}/>
        <Route path='/' element={
            shouldRedirect ? (<Navigate replace to="/home" />) : (<HomePage />)
          }/>
        <Route exact path='/menu' element={<Menu dishes={this.state.dishes}/> }/>
      </Routes>

    <Footer/>

  </div>);
}
}
export default Main;
