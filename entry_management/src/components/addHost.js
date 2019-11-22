import React, {Component} from 'react'
import {add} from './entryFunctions'
import Modal from 'react-responsive-modal'
import { Link } from "react-router-dom";

class addHost extends Component{
    constructor(){
        super();
        this.state= {hostName: '' ,hostEmail: '', hostPhone: '', hostAddress:'', errorFlag: false, msg: "", success: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){

        const newHost = {
            hostEmail: this.state.hostEmail,
            hostName: this.state.hostName,
            hostPhone: this.state.hostPhone,
            hostAddress: this.state.hostAddress
        }

        add(newHost)
        .then(res =>{
            if (res.status){
                console.log(res.data)
                this.setState({ success: true, msg: String(res.data) })
            }          
            else{
                this.setState({ errorFlag: true, msg: String(res.error[0]) })
                console.log(res.error)
            }
        })
        .catch(err =>{
            console.log('error:-' + err)
            this.setState({ errorFlag: true, msg: String(err) })
        })
        console.log(newHost);
        event.preventDefault();
    }

    render(){
        return(

            <div class="container">
               <div class="row justify-content-center mt-4 mb-4">
                    <div class="col-lg-5 bg-light rounded mx-4 my-4  border border-dark">
                    <form class="mx-4 my-4" onSubmit={this.handleSubmit}>
                        
                        <Modal open={this.state.errorFlag} onClose={() => this.setState({ errorFlag: false })} closeOnOverlayClick={true}>
                            <div className="container" style={{ "width": "35vw", "padding": "5%" }}>
                                <div className="card text-center">
                                <div className="card-header text-danger">
                                    Error!!!
                                </div>
                                <div className="card-body">
                                    {this.state.msg}
                                </div>
                                </div>
                            </div>
                        </Modal>

                        <Modal open={this.state.success} closeOnOverlayClick={false}>
                            <div className="container" style={{ "width": "35vw", "padding": "5%" }}>
                                <div className="card text-center">
                                <div className="card-header text-success">
                                    Success!!!
                                </div>
                                <div className="card-body">
                                    <p>{this.state.msg}</p>
                                    <p><Link to="/" class="btn btn-primary btn-sm">Go to Home</Link></p>
                                </div>
                                </div>
                            </div>
                        </Modal>

                        <p class="text-center text-dark mx-4 my-4"><h4>ADD HOST</h4></p>

                        <div class="form-group text-left">
                            <label for="Hname">Host Name</label>
                            <input type="text" class="form-control" id="Hname" placeholder="Enter name" name="hostName" value={this.state.hostName} onChange={this.handleChange}/>
                        </div>
                        
                        <div class="form-group text-left">
                            <label for="Hemail">Email address</label>
                            <input type="text" class="form-control" id="Hemail" placeholder="Enter email" name="hostEmail" value={this.state.hostEmail} onChange={this.handleChange}/>
                        </div>
                        
                        <div class="form-group text-left">
                            <label for="Hnumber">Phone Number</label>
                            <input type="number" class="form-control" id="Hnumber" placeholder="Enter phone" name="hostPhone" value={this.state.hostPhone} onChange={this.handleChange}/>
                        </div>
                        
                        <div class="form-group text-left">
                            <label for="Haddress">Address</label>
                            <input type="text" class="form-control" id="Haddress" placeholder="Enter address" name="hostAddress" value={this.state.hostAddress} onChange={this.handleChange}/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary text-center">Add Host</button>
                        
                        </form>
                    </div>
               </div>
           </div>
        )
    }
}

export default addHost