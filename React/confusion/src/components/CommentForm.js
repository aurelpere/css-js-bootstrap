import React,{Component} from 'react';
import {
    Row,
    Button,
    Label,
    Col,
    ModalHeader,
    ModalBody,
    Modal,
} from "reactstrap";
import {Control, Errors, LocalForm} from "react-redux-form";
const required=(val)=>val && val.length;
const maxLength=(len)=>(val)=>!(val)||(val.length<=len)
const minLength = (len) => (val) => val && (val.length >= len);
class Comment extends Component {
    constructor(props){
        super(props);
        this.state=
            {
                isModalOpen:false
            };
        this.toggleModal=this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal(values);
        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment);
    }
    render(){
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                <span className="fa fa-comment fa-lg"></span>Post a comment
            </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                      <ModalHeader toggle={this.toggleModal}>Commenting</ModalHeader>
                      <ModalBody>
                          <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>

                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
          <Control.select model=".rating" id="rating" name="rating" columns={10}>
            <option></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                            <Label htmlFor="author" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text model=".author" id="author" name="author"
                                       placeholder="your name"
                                              className="form-control"
                                              validators={{required,minLength:minLength(3),maxLength:maxLength(15)
                                              }}/>
                                  <Errors className="text-danger" model=".author"
                                  show="touched"
                                 messages={{minLength:"Must be greater than 2 chars",
                                  maxLength:"Must be 15 chars max"}}>

                                  </Errors>
                            </Col>
                        </Row>
                              <Row className="form-group">
                            <Label htmlFor="comment" md={2}>Comment</Label>
                              <Col md={10}>
                                <Control.textarea model=".comment" id="comment" rows="6" name="comment"
                                              placeholder="your comment"/>
                            </Col>
                                  </Row>
                            <Button type="submit" value="submit" className="bg-primary">Submit</Button>
                          </LocalForm>
                      </ModalBody>
                  </Modal>
            </React.Fragment>
        );
    }
}
export default Comment;