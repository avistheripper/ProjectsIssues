import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedGoals, goalRef } from '../firebase';

class GoalItem extends Component{
completeGoal(){
  const { email } = this.props.user;
  const { title, serverKey } = this.props.goal;
  goalRef.child(serverKey).remove();
  completedGoals.push({email, title});

}
render(){
  const { email, title } = this.props.goal;
  return(
    <div className="card goal-card">
      <div className="card-header">
        <h4>{title}</h4>
      </div>
      <div className="card-block">
        <p className="card-title">Submitted by <span className="badge badge-info goal-author"> {email}</span></p>
        <p className="card-text">You can either complete or clear the topics</p>
        <a href="#" className="btn btn-primary btn-sm w-100" onClick={() => this.completeGoal()}>Complete the topic</a>
      </div>
    </div>

    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null) (GoalItem);
