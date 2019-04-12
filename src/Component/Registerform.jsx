import React, { Component } from 'react';
import axios from 'axios';
class Registerform extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register',this.state)
        .then((res)=>{
            if(res.status ==200) {
                // this.props.history.push("/budgetcalculator/"+res.data._id);
                localStorage.setItem('_id',res.data._id) 
                window.location = '/budgetcalculator'
                console.log('success registration'); 
            }
        })
        .catch(err=>{
            console.log('err',err)
        })
        console.log(e.target)
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={(event) => this.handleSubmit(event)} method="post" >
                    <div className="form-group"><label>email</label>
                        <input type="email" name="email" placeholder="email" className="form-control" onChange={(event) => this.handleEmail(event)} />
                    </div>
                    <div className="form-group"><label>password</label>
                        <input type="password" name="password" placeholder="password" className="form-control" onChange={(event) => this.handlePassword(event)} />
                    </div>
                    <div>
                        <input type="submit" value="register" className="btn btn-secondary"/>
                    </div>
                </form>
            </div>
        );
    }
}

    export default Registerform;