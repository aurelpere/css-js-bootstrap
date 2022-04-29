import {Navbar,NavbarBrand} from 'reactstrap';
import React, { Component } from 'react';
import { useState } from "react";
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent'
import About from './AboutComponent'
import {Routes,Route,Navigate} from 'react-router-dom';
import Header from './HeaderComponent'
import {connect} from 'react-redux';
import {postComment, fetchComments, fetchDishes, fetchPromos} from "../redux/ActionCreators";
import {actions} from 'react-redux-form';

import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
const mapStateToProps=state=>{
     return {
         dishes:state.dishes,
         leaders:state.leaders,
         comments:state.comments,
         promotions:state.promotions,
     }
    }
const mapDispatchToProps=(dispatch)=>({
    postComment:(dishId,rating,author,comment)=>dispatch(postComment(dishId,rating,author,comment)),
    fetchDishes:()=>{dispatch(fetchDishes())},
    resetFeedbackForm: ()=>{dispatch(actions.reset('feedback'))},
    fetchComments:()=>{dispatch(fetchComments())},
    fetchPromos:()=>{dispatch(fetchPromos())},
})


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
class Main extends Component {
  constructor (props){
    super (props);
  }


    componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
    }

    render(){
    const shouldRedirect=true;

    const HomePage=()=>{
    return (
        <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promotion)=>promotion.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
        />
    );
  }
  const DishWithId=({match})=>{
      const { dishId } = useParams();
      console.log(this.props.comments);
      return (
          <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
                      isLoading={this.props.dishes.isLoading}
                      ErrMess={this.props.dishes.errMess}
                      comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
                      commentsErrMess={this.props.comments.errMess}
                        postComment={this.props.postComment}/>

      );

    }

  return (<div className="App">
    <Header />
      <Routes>
        <Route exact path='/menu' element={<Menu dishes={this.props.dishes}/> }/>
        <Route path="/menu/:dishId" element={<DishWithId/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route exact path='/contactus' element={<Contact resetFeedbackForm={this.props.resetFeedbackForm }/>}/>
        <Route exact path='/aboutus' element={<About leaders={this.props.leaders}/>}/>

        <Route path='/' element={
            shouldRedirect ? (<Navigate replace to="/home" />) : (<HomePage />)
          }/>
      </Routes>

    <Footer/>

  </div>);
}
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
