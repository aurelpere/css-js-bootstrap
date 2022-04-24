import React, {Component} from "react";
import { Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        console.log('Dishdetail component constructor is invoked')
    }
    renderDish(dish){
        if (dish!=null) {
            return(
            <Card>
                <CardImg width='100' src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

            );
        }
        else{
            console.log('renderDish dish is null')
            return(
                <div></div>
            );
        }
    }
    renderComments(dish){

        if (dish!=null) {
            const comments = dish.comments.map((comment) => {
            return (
              <p key={comment.id} className="text-start">
                  {comment.comment}
                  <br/><br/>
                  -- {comment.author}, {comment.date}
                  <br/><br/>
              </p>
            );});
            return(
            <div className="container">
                <p className="text-start">
                <h4>Comments</h4>
            </p>
                {comments}
            </div>
        );
                   }
        else{
            console.log('renderComments dish is null')
            return(
                <div></div>
            );
        }

    }
    render() {
        return(
        <div className="row ">

            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.dish)}

            </div>
        </div>
        );
    }
}
export default Dishdetail;
