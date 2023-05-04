import React, { Component } from "react";
import { Card, CardImg, CardText, CardImgOverlay, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,Button,Modal, ModalBody, ModalHeader,Form, FormGroup, Input, Label,Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl} from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
 
    // function RenderDish({dish}) {
        function RenderDish({dish, favorite, postFavorite}) {
        // if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                   <FadeTransform in 
                        transformProps = {{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card className="menu_items_fav">
                            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <Button outline color="primary" onClick={() => favorite ? console.log('Already favorite') : postFavorite(dish._id)}>
                                    {favorite ?
                                        <span className="fa fa-heart"></span>
                                        : 
                                        <span className="fa fa-heart-o"></span>
                                    }
                                </Button>
                            </CardImgOverlay>
                            <CardBody>
                                <CardTitle> {dish.name}</CardTitle>
                                <CardText> {dish.description} </CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>   
            );
        // }
        // else {
        //     return (
        //         <div></div>
        //     );
        // }
    }

    function RenderComments({comments, postComment, dishId}){
        if (comments != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'> 
                        <Stagger in>
                        {comments.map((comment) => {
                            return(
                                // <Fade in>
                                //     <li key={comment.id}>
                                <Fade in key={comment._id}>
                                    <li>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author.firstname} {comment.author.lastname} , 
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'})
                                        .format(new Date(Date.parse(comment.updatedAt)))}
                                    {/*  <p>-- {comment.author}, */}
                                    {/* &nbsp; */}
                                    {/* {new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: '2-digit'
                                    }).format(new Date(Date.parse(comment.date)))} */} 
                                    </p>
                                    </li>
                                </Fade>
                            );
                        })}
                        </Stagger>
                    </ul>
                    <CommentForm dishId={dishId} postComment={postComment}/>
                </div>
            )
        }
        else{   
            return (<div></div>)
        }
        
    }

    class CommentForm extends Component{

        constructor(props){
            super(props);

            this.state ={
                // isCommentFormModalOpen: false
                isNavOpen: false,
                isModalOpen: false
                }
                this.toggleModal = this.toggleModal.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
        }

        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
          }
    
        //   handleLogin(event) {
        //     this.toggleModal();
        //     alert("Username: " + this.username.value + " Password: " + this.password.value
        //         + " Remember: " + this.remember.checked);
        //     event.preventDefault();
    
        // }
        handleSubmit(values){
            this.toggleModal();
            // this.props.postComment(this.props.dishId, values.rating, values.author, values.comment)
            this.props.postComment(this.props.dishId, values.rating, values.comment);
            // console.log("Current State is: " + JSON.stringify(values));
            // alert("Current State is: " + JSON.stringify(values));
            // event.preventDefault();
        }
        
        render(){
            return(
                // <React.Fragment>
                // <Button outline onClick={this.toggleModal}>
                //     <span className="fa fa-pencil fa-lg"></span> Submit Comment
                // </Button>
                // <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                //     <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                //     <ModalBody>
                //     {/* <Form onSubmit={this.handleLogin}> */}
                //     <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                //             <Row className="form-group">
                //                 <Label htmlFor="rating" md={12}>Rating</Label>
                //                 <Col md={12}>
                //                     <Control.select model=".rating" name="rating"
                //                         className="form-control">
                //                         <option>1</option>
                //                         <option>2</option>
                //                         <option>3</option>
                //                         <option>4</option>
                //                         <option>5</option>
                //                     </Control.select>
                //                 </Col>
                //             </Row>
                //             {/* <Row className="form-group">
                //                 <Label htmlFor="author"  md={12}>Your Name</Label>
                //                 <Col  md={12}>
                //                     <Control.text model=".author" id="author" name="author"
                //                         placeholder="Your Name"
                //                         className="form-control"
                //                         validators={{
                //                             required, minLength: minLength(3), maxLength: maxLength(15)
                //                         }}
                //                          />
                //                     <Errors
                //                         className="text-danger"
                //                         model=".author"
                //                         show="touched"
                //                         messages={{
                //                             required: 'Required',
                //                             minLength: 'Must be greater than 2 characters',
                //                             maxLength: 'Must be 15 characters or less'
                //                         }}
                //                      />
                //                 </Col>
                //             </Row> */}
                //             <Row className="form-group">
                //                 <Label htmlFor="comment" md={12}>Comment</Label>
                //                 <Col md={12}>
                //                     <Control.textarea model=".comment" id="comment" name="comment"
                //                         rows="6"
                //                         className="form-control" />
                //                 </Col>
                //             </Row>
                //             <Row className="form-group">
                //                 <Col  md={12}>
                //                     <Button type="submit" color="primary">Submit</Button>
                //                 </Col>
                //             </Row>
                //         </LocalForm>
                //     </ModalBody>
                // </Modal>
                // </React.Fragment>
                <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" id="rating" className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" id="comment"
                                        rows="6" className="form-control" />
                            </Col>
                        </Row>
                        <Button type="submit" className="bg-primary">
                            Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
               </Modal>
            </div>
            )
        }
    }

    const DishDetail = (props) => {
        // const dish = props.dish
        // console.log(dish);

        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        
        else if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className='row'>
                        {/* <RenderDish dish = {props.dish} /> */}
                        <RenderDish dish={props.dish} favorite={props.favorite} postFavorite={props.postFavorite} />
                        <RenderComments comments = {props.comments} 
                            postComment = {props.postComment}
                            dishId={props.dish._id}
                            // dishId = {props.dish.id}
                         />
                    </div>
                </div>
            )
        }
        else {
            return (<div></div>);
        }
    }


export default DishDetail;