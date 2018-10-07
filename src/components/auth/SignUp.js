import React, { Component } from 'react'

class SignUp extends Component {
    state={
        email:'',
        password:'',
        name:'',
        nickname:'',
        age:'',
        favorite_food:'',
        life_status:''
    }
    handleChange=(e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e) =>{
        e.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white signUp">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email"onChange={this.handleChange} />
        </div>
        <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password"onChange={this.handleChange} />
        </div>
        <div className="input-field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"onChange={this.handleChange} />
        </div>
        <div className="input-field">
        <label htmlFor="nickname">Nickname</label>
        <input type="text" id="nickname"onChange={this.handleChange} />
        </div>
        <div className="input-field">
        <label htmlFor="age">Age</label>
        <input type="text" id="age"onChange={this.handleChange} />
        </div>
        <div className="input-field">
        <label htmlFor="hobies">Hobies</label>
        <input type="text" id="hobies"onChange={this.handleChange} />
        </div>
        <div className="input-field">
        <label htmlFor="fav_food">Favorite food</label>
        <input type="text" id="fav_food"onChange={this.handleChange} />
        </div>
        <div className="input-field">
        <label htmlFor="life_status">Life Status</label>
        <input type="text" id="life_status"onChange={this.handleChange} />
        </div>
        <div className="input-field">
        <button className="btn darken-3 z-depth-0">Go</button>
        </div>
        </form>
      </div>
    )
  }
}

export default SignUp
