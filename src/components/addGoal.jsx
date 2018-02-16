import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:''
    }
  }

addGoal(){
  console.log('state', this.state);
  const { title } = this.state;
  const { email } = this.props.user;
  goalRef.push({email, title});
}

  render() {
    return(
      <div className="form-inline add-goal">
        <div className="form-group">
          <input className="form-control"
                 type="text"
                 placeholder="Type an idea"
                 style={{marginRight: '5px'}}
                 onChange={(event) => this.setState({title: event.target.value})}
                 />
                <button className="btn btn-info" onClick={() => this.addGoal()}>Add idea</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const { user } = state;
    return {
      user
    };
}

export default connect(mapStateToProps, null)(AddGoal) ;
