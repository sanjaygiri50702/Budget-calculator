import React, { Component } from 'react';
import Form from './budgetform'
import Table from './table'
import axios from 'axios';
import {Redirect } from 'react-router-dom'
import baseUrl from '../config/api'
import {checkAuth, Logout} from '../services/auth'


class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user:[]
         }
    }
    addData(data,type){
        if(type=="income"){
            var prevdata = this.state.user.income;
            axios.post(`${baseUrl}/income`,{...data,userId:this.state.user._id})
            .then(response=>{
                if(response.status==200){
                    console.log(response.data)
                    prevdata.push(response.data);
                    this.setState({
                        income:prevdata
                    })
                }
            })
            .catch(error => console.log("error", error));

          
        }
        else{
            var prevdata = this.state.user.expense;
            axios.post(`${baseUrl}/expense`,{...data,userId:this.state.user._id})
            .then(response=>{
                if(response.status==200){
                    console.log(response.data)

                    prevdata.push(response.data);
                    this.setState({
                        expenditure:prevdata
                    })
                }
            })
            .catch(error => console.log("error", error))

        }
    }

    handleLogin(){
        this.setState((prevState)=>({
            islogin:!prevState
        }))
    }


    deleteData(id,type){
        var url = baseUrl+'/'+type;
        var user = this.state.user
        console.log('url',url)
        if(type=='income'){
        // console.log(id)
        axios.delete(url,{data:{incomeId:id}})
        .then(res=>{
                // console.log(res)
                var income = this.state.user.income.filter(value=>value._id!==id);
                user.income=income;
                if(res.status==200){
                    this.setState(({
                        user
                    }))
                }
        })
        .catch(err=>console.log(err))
    }
    else{
        console.log(id)
        axios.delete(url,{data:{expenseId:id}})
        .then((res)=>{
            var expense = user.expense.filter(value=>value._id!==id);
            user.expense = expense
            if(res.status==200){
                this.setState(({
                    user
                }))
            }
        })
        .catch((err)=>console.log(err))

    }
}


    componentDidMount(){
        console.log('cc')
        var id = checkAuth()
        console.log('idd',id)
        if(id){
          axios.get(`${baseUrl}/${id}/user`)
          .then(res=>{
            if(res.status==200){
              this.setState({
                user:res.data || []
              })
            }
            console.log(this.state.user)
          })
          .catch(err=>{
            return ;
        })
    }
        else{
            window.location = '/';
        }
    }



    
    render() { 
        console.log('render')
        var {income,expense} = this.state.user
        var incomeTotal = 0;
        var expenditureTotal = 0;
        var saving = 0;
        income=[]
        income.map(value=>{
            incomeTotal += parseInt(value.price)
        });
        expense=[]
        expense.map(value=>{
            expenditureTotal += parseInt(value.price)
        });
        saving = incomeTotal - expenditureTotal;

        if(!checkAuth()){
            return (<Redirect to="/"/>);
        }
        return ( 
            <div className="container">
            {console.log(JSON.stringify(this.state.user))}
                <Form onSubmit={(data,type)=>this.addData(data,type)} loginStatus={()=>this.handleLogin()}/>
                <div className="row">
                    <a href="/" onClick={()=>Logout()}>logout</a>
                     <div className="col-md-6">
                        <p className="text-center">Income</p>
                        <Table value={this.state.user.income} onDelete={(id)=>this.deleteData(id,'income')}/>
                    </div>
                    <div className="col-md-6">
                        <p className="text-center">Expenditure</p>
                        <Table value={this.state.user.expense} onDelete={(id)=>this.deleteData(id,'expense')}/>
                    </div>
                </div>
                <div>
                    <p>Total Income:{incomeTotal}</p>
                    <p>Total Expenditure:{expenditureTotal}</p>
                    <p>Saving:{saving}</p>
                </div>
            </div>
         );
    }
}
 
export default Budget;