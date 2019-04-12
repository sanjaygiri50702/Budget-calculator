import React, { Component } from "react";
class Incomeform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: "",
      type:"income"
    };
  }
  handleExpenses(event){
      this.setState({
            title:event.target.value
      })
  }
  handlePrice(event){
    this.setState({
        price:event.target.value
    })
  }
  handleSubmit(event){
      event.preventDefault();
      var data ={
          title:this.state.title,
          price:this.state.price
      }
      if(!isNaN(this.state.price)){
        this.props.onSubmit(data,this.state.type)
      }
      else{
        alert("price is not a number");
      }
     
      this.setState(state=>({
        title: "",
        price: ""
      }))
      
  }
  handleType(){
      this.setState(state=>({
          type: state.type=="income" ? "expenses":"income"

  }))
}

  render() {
    return (
      <div className="mt-5">
        <form action="" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control" type="text" name="income" value={this.state.title} onChange={this.handleExpenses.bind(this)}/>
          </div>
          <div>
            <label>Price</label>
            <input className="form-control" type="text" name="price" value={this.state.price} onChange={this.handlePrice.bind(this)}/>
          </div>
          <div>
            <input className="btn btn-secondary" type="button" value={this.state.type} onClick={this.handleType.bind(this)}/>
          </div>
          <button className="btn btn-light" type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Incomeform;
