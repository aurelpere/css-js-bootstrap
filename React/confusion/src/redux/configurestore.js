import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createForms} from "react-redux-form";
import {Comments} from "./comments";
import {Feedbacks} from "./feedbacks";
import {Promotions} from "./promotions";
import {Leaders} from "./leaders";
import {Dishes} from "./dishes";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {InitialFeedback} from "./forms";

export const ConfigureStore=()=>{
    const store=createStore(
      combineReducers({
         dishes:Dishes,
         comments:Comments,
         promotions:Promotions,
         feedbacks:Feedbacks,
          leaders:Leaders,
          ...createForms({
              feedback:InitialFeedback
          })

      }),
        applyMiddleware(thunk,logger)
    );
    return store;
}