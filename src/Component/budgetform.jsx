import React, { Component } from "react";
class Incomeform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tittle: "",
      price: "",
      type:"income"
    };
  }
  handleExpenses(event){
      this.setState({
            tittle:event.target.value
      })
  }
  handlePrice(event){
    this.setState({
        price:event.target.value
    })
  }
  handleSubmit(event){
      event.preventDefault();
      // console.log("eve",event)
      var data ={
          id: Date.now(),
          tittle:this.state.tittle,
          price:this.state.price,
          type:this.state.type
      }
      if(!isNaN(this.state.price)){
        this.props.onSubmit(data)
      }
      else{
        alert("price is not a number");
      }

      this.setState(state=>({
        // id:state.id + 1,
        tittle: "",
        price: ""
      }))
  // console.log('hss',data);
      
  }
  handleType(){
      this.setState(state=>({
          type: state.type=="income" ? "expenses":"income"

  }))
  // console.log('hss',this.state.type)
}

  render() {
    // console.log('id',this.state.id)
    return (
      <div className="mt-5">
        <form action="" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control" type="text" name="income" value={this.state.tittle} onChange={this.handleExpenses.bind(this)}/>
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
