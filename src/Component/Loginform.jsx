import React, { Component } from 'react';
import axios from 'axios';
import { Redirect} from 'react-router'
import {checkAuth} from '../services/auth';
import baseUrl from '../config/api'
class Loginform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }

  
    handlePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`${baseUrl}/login`,{
            email:this.state.email,
            password:this.state.password
        })
        .then(res=>{
            if(res.status==200){
                localStorage.setItem('_id',res.data._id)    
                this.props.history.push("/budgetcalculator/"+res.data._id);
                console.log(res);
            }
        })
        .catch(err=>console.log('errror',err))
        console.log(e.target)
    }
    render() {
        if(checkAuth()){
            return ( <Redirect to={'/budgetcalculator/'+checkAuth()}/>)
            
        }
        return (
            <div>
                <h1>Login Form</h1>
                <form action="" onSubmit={(event)=>this.handleSubmit(event)} method="post">
                    <div className="form-group"><label>email</label>
                        <input type="email" name="email" placeholder="email" className="form-control" onChange={(event)=>this.handleEmail(event)} />
                    </div>
                    <div className="form-group"><label>password</label>
                        <input type="password" name="password" className="form-control" placeholder="password" onChange={(event)=>this.handlePassword(event)} />
                    </div>
                    <div>
                        <input type="submit" value="login" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Loginform;