import React, { Component } from 'react';
import '../app.css';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  signUp(){
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log('error', error);
      this.setState({error});
    })
  }
  render() {
    return(
      <div className="main-cover">
      <div className="form-inline" style={{margin: '5%'}}>
      <h2 className='App-title'>Sign up and get involved</h2>
      <div className="form-group log-form">
      <div className='row'>
    <div className='col'></div>
      <div className='col'>
      <input className="form-control"
             type="text"
             placeholder="Email"
             onChange={(event) => this.setState({email: event.target.value})}
             style={{marginRight:'5%'}}
             />
      </div>
      <div className='col'>
      <input className="form-control"
             type="password"
             placeholder="Password"
             onChange={(event) => this.setState({password: event.target.value})}
             style={{marginRight:'5%'}}
             />
      </div>
      <div className='col'>
      <button className="btn btn-primary"
              type="button"
              onClick={() => this.signUp()}>Sign up </button>
        </div>
      </div>
      </div>
      <hr/>
      <div>{this.state.error.message}</div>
      <Link to={'/signin'}>Already a user? Sign in instead</Link>
      </div>
      <div style={{'textAlign':'center','color':'grey'}}>Powered by google.firebase</div>
      </div>
    )
  }
}

export default SignUp;
