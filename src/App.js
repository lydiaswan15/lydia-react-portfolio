import React from 'react';
import './App.css';

class BudgetPlanForm extends React.Component{

  availableBudget = 0;

  constructor(props){
    
    super(props);
    this.state = {
      totalBudget: 0, 
      spending: 0, 
      transportation: 0, 
      saving: 0,
      food: 0,
      rent: 0, 
      other: 0
    }
  }
  handelInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handelSumbit(event){
        console.log(event.target.elements.food);
  }
  render(){
    // var totalBudget = totalBudget;
    return(
      <form onSubmit={this.handelSumbit}>
        <label>Total Budget: </label>
        <input 
        name='totalBudget' 
        value={this.state.totalBudget}
        onChange={this.handelInputChange}
        ></input>
        <br></br>

        <label>Spending: </label>
        <input name='spending'
                value={this.state.spending}
                onChange={this.handelInputChange}></input> 
        <br></br>

        <label>Saving: </label>
        <input name='saving'
                value={this.state.saving}
                onChange={this.handelInputChange}></input> 
        <br></br>

        <label>Transportation: </label>
        <input name='transportation'value={this.state.transportation}
                onChange={this.handelInputChange}></input> 
        <br></br>

        <label>Food: </label>
        <input name='food'value={this.state.food}
                onChange={this.handelInputChange}></input> 
        <br></br>

        <label>Rent: </label>
        <input name='rent' value={this.state.food}
                onChange={this.handelInputChange}></input> 
        <br></br>

        <label>Other: </label>
        <input name='other'value={this.state.other}
                onChange={this.handelInputChange}></input> 
                <br></br>

      <button type='submit'>Check Budget</button>
      </form>
    )
  }
}

class PlanBudget extends React.Component{

  render(){
    var current = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = '';
    switch(current.getMonth()){
      case 0: month = months[0]; break;
      case 1: month = months[1]; break;
      case 2: month = months[2]; break;
      case 3: month = months[3]; break;
      case 4: month = months[4];break;
      case 5: month = months[5];break;
      case 6: month = months[6];break;
      case 7: month = months[7];break;
      case 8: month = months[8];break;
      case 9: month = months[9];break;
      case 10: month = months[10];break;
      case 11: month = months[11];break;
    };
    var date = `${month} ${current.getFullYear()}`;

    return(
      <div>
        <h1>Plan Budget</h1>
        <h2>{date}</h2>
        <BudgetPlanForm></BudgetPlanForm>
      </div>

    );
  }
  
}

function App() {
  return (
    <div className="App">
    <PlanBudget></PlanBudget>


      {/* Create a budgeting app. 
      
      -Output current date
      -Let the user enter the total amount for this month in categories
        - Spending
        - Savings
        - Gas
        - Rent
        - Food
        - Transportation
        
        Have another tab wher you can track the total amount of money that you spent. 
        Enter in the amount of money that you are spending and then pick from a drop down which option works best

        */}
         </div>
  );
}

export default App;
