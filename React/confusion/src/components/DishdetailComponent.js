import React from "react";
import { Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';



    function RenderDish({dish}){
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
    function RenderComments({comments}){

        if (comments!=null) {
            const rendercomments = comments.map((comment) => {
            return (
              <p key={comment.id} className="text-start">
                  {comment.comment}
                  <br/><br/>
                  -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                  <br/><br/>
              </p>
            );});
            return(
            <div className="container">
                <h4 className="text-start">Comments</h4>

                {rendercomments}
            </div>
        );
                   }
        else{
            console.log('renderComments comments is null')
            return(
                <div></div>
            );
        }

    }
    const Dishdetail = (props) => {
        console.log(props.dish)
        return(
        <div className="row">

            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish}/>
            </div>

            <div className="col-12 col-md-5 m-1">
                <RenderComments comments= {props.dish.comments}/>

            </div>
        </div>
        );
    }

export default Dishdetail;
