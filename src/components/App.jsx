import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import '../app.css';
import AddGoal from './addGoal';
import GoalsList from './GoalsList';
import CompletedGoalList from './completedGoalList';

class App extends Component {
  signOut(){
firebaseApp.auth().signOut();
  }
  render() {
    return(
      <div className='wrapper main-cover'>
      <div className='App-title row'>
      <div className="col">
        <h3 className='title-brand'>Project via React-redux.js</h3>
      </div>
      <div className='col log-out '>
      <button className="btn btn-primary btn-sm btn-out" onClick={() => this.signOut()}>
              Sign out
      </button>
      </div>
      </div>

      <AddGoal />
      <hr/>
      <h4 className='list-title'>Terms to discuss</h4>
      <GoalsList />
      <hr/>
      <h4 style={{'color': 'white'}}>Recent Issues</h4>
      <CompletedGoalList />
      <hr/>

      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {};
}
export default connect(mapStateToProps, null) (App);
