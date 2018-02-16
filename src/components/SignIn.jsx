import React, { Component } from 'react';
import '../app.css';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
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

  signIn() {
    const {email, password} = this.state;
firebaseApp.auth().signInWithEmailAndPassword(email, password)
  .catch(error => {
    this.setState({error});
    console.log('error', error);
  })



  }
  render() {
    return(
      <div className="main-cover">
      <div className="form-inline" style={{margin:'5%'}}>
      <h2 className='App-title'>Sign in and start the issue</h2>
      <div className="from-group log-form ">
      <div className="row">
      <div className='col'></div>
        <div className='col'>
      <input type="text"
             className="form-control "
             placeholder="Email"
             style={{marginRight:'5%'}}
             onChange={(event) => this.setState({email: event.target.value})}

      />
      </div>
      <div className='col'>
      <input type="password"
             className="form-control"
             placeholder="Password"
             style={{marginRight:'5%'}}
             onChange={(event) => this.setState({password: event.target.value})}
          />
          </div>
          <div className='col'>
            <button className="form-control btn btn-primary" type="button" onClick={() =>this.signIn()}>Sign in</button>
          </div>
        </div>
      </div>
      <hr/>
      <div>{this.state.error.message}</div>
      <Link to={'/signup'}>Don't have an account? Sign up instead!</Link>
      </div>
      <div style={{'textAlign':'center','color':'grey'}}>Powered by google.firebase</div>
    </div>
    )
  }
}

export default SignIn;
