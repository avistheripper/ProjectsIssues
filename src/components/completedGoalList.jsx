import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completedGoals } from '../firebase';

class CompletedGoalList extends Component{
  componentDidMount(){
    completedGoals.on('value', snap => {
    let completedGoals = [];
snap.forEach(completedGoal => {

  const { email, title } = completedGoal.val();
completedGoals.push({email, title});
      })

  this.props.setCompleted(completedGoals);
    })
  }
  clearAll(){
    completedGoals.set([]);
  }
  render(){
    console.log('this.props.completedGoals', this.props.completedGoals);
    return(
      <div>
      {
        this.props.completedGoals.map((completedGoal, index) => {
          const { email, title } = completedGoal;
          return(
            <div key={index} className='completed-goal'>
            <h5>{title}</h5>
            <p>Was completed by <span style={{marginRight:'5px'}} className="badge badge-info"> {email}</span></p>
            </div>
          )
        })
      }
        <button className='btn btn-danger rubbish w-100' onClick={() => this.clearAll()}> Clear All </button>
      </div>
    )
  }
}
function mapStateToProps(state){
  const { completedGoals } = state;
  return{
    completedGoals
  }
}

export default connect(mapStateToProps,{ setCompleted }) (CompletedGoalList);
