import React, { Component } from 'react';
import Form from './budgetform'
import Table from './table'
class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            income:[],
            expenditure:[],

         }
    }
    addData(data){
        if(data.type=="income"){
            var prevdata = this.state.income;
            prevdata.push(data);
            this.setState({
                income:prevdata
            })
            localStorage.setItem('income',JSON.stringify(this.state.income)); 
        }
        else{
            var prevdata = this.state.expenditure;
            prevdata.push(data);
            this.setState({
                expenditure:prevdata
            })
            localStorage.setItem('expenditure',JSON.stringify(this.state.expenditure));

        }
    }
    componentDidMount(){
        var incomeData = JSON.parse(localStorage.getItem('income')) || [];
        var expenditureData = JSON.parse(localStorage.getItem('expenditure')) || [];

        // console.log('hell',incomeData);
        incomeData.map(value=>this.addData(value));
        expenditureData.map(value=>this.addData(value));

    }

    render() { 
        var incomeTotal = 0;
        var expenditureTotal = 0;
        var saving = 0;
        this.state.income.map(value=>{
            incomeTotal += parseInt(value.price)
        });
        this.state.expenditure.map(value=>{
            expenditureTotal += parseInt(value.price)
        });
        saving = incomeTotal - expenditureTotal;

        return ( 
            <div className="container">
                <Form onSubmit={data=>this.addData(data)}/>
                <div className="row">
                     <div className="col-md-6">
                        <p className="text-center">Income</p>
                        <Table value={this.state.income}/>
                    </div>
                    <div className="col-md-6">
                        <p className="text-center">Expenditure</p>
                        <Table value={this.state.expenditure}/>
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