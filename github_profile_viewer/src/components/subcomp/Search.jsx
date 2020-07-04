import React, { Component } from 'react';

class Search extends Component {
   
   onSubmit(event) {
      event.preventDefault();
      let username = this.refs.username.value.trim();
      if (!username) {
         alert("Please enter valid username");
         return;
      }
      this.props.onFormSubmit(username);
      this.refs.username.value = '';
   }

   render() {
      return (
         <div>
            <form className="user-search" onSubmit={this.onSubmit.bind(this)}>
               <label><strong>Search Github Users</strong></label>
               <input type="text" ref="username" className="form-control" />
            </form>
         </div>
      )
   }
}

export default Search
