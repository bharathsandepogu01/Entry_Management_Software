import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class home extends Component{
    render(){
        return(
           <div class="container">
               <div class="row justify-content-center border border-info bg-light rounded" style={{"position":"relative", "margin-top":"20vh"}}>
                    <div class="col-lg-5 bg-dark rounded mx-4 my-4 border border-primary">
                        <p class="text-center text-light" style={{"position":"relative", "margin-top":"18vh","font-family":"Agency FB"}}><h1>ENTRY MANAGEMENT WEB APPLICATION</h1></p>
                    </div>
                    <div class="col-lg-5 mx-4 my-4 ">
                        <div class="row  mx-4 my-4">
                            <div class="col-lg-12  mx-4 my-4">
                                <Link to="/addHost" class="btn btn-primary btn-lg btn-block">Add Event</Link>
                            </div>
                        </div>
                        <div class="row mx-4 my-4">
                            <div class="col-lg-12  mx-4 my-4">
                            <Link to="/checkinVisitor" class="btn btn-success btn-lg btn-block">Check In Visitor</Link>
                            </div>
                        </div>
                        <div class="row mx-4 my-4">
                            <div class="col-lg-12  mx-4 my-4">
                            <Link to="/checkoutVisitor" class="btn btn-danger btn-lg btn-block">Check Out Visitor</Link>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}

export default home