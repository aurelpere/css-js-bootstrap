import React from "react";
import { Card, CardImg,CardImgOverlay,BreadcrumbItem,Breadcrumb,CardText,CardBody,CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';


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
        if (props.dish != null) {
            return (
                <div className="container">

                    <div className="row">

                    <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish}/>

                        <RenderComments comments={props.comments}/>

                    </div>
                </div>
            );
        }
    }

export default Dishdetail;
