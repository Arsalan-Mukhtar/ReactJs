import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './subcomp/Profile.jsx'
import Search from './subcomp/Search.jsx'

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: "Arsalan-Mukhtar",
         userData: [],
         userRepos: [],
         perPage: 5 
      }
   }
   // Get user data from github
   getUserData() {
      $.ajax({
         url: "https://api.github.com/users/" + this.state.username + "?clientId=" + this.props.clientId + "&clientSecret=" + this.props.clientSecret,
         dataType: "json",
         cache: false,
         success: function (data) {
            this.setState(
                  { userData: data }
               )
         }.bind(this),
         error: function (xhr, status, err) {
            this.setState(
                  { username: null }
               )
            alert(err);
         }.bind(this)
      });
   }

   getUserRepos() {
      $.ajax({
         url: "https://api.github.com/users/" + this.state.username + "/repos?per_page"+ this.state.perPage +"&clientId=" + this.props.clientId + "&clientSecret=" + this.props.clientSecret + "&sort=created",
         dataType: "json",
         cache: false,
         success: function (data) {
            this.setState(
               { userRepos: data }
            )
         }.bind(this),
         error: function (xhr, status, err) {
            this.setState(
               { username: null }
            )
            alert(err);
         }.bind(this)
      });
   }

   handleFormSubmit(username) {
      this.setState({username: username}, function () {
         this.getUserData();
         this.getUserRepos();
      })
   }

   componentDidMount() {
      this.getUserData();
      this.getUserRepos();
   }

   render() {
      return(
         <div>
            <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
            <Profile {...this.state}/>
         </div>

      )
   }
}


App.defaultProps = {
  clientId: "45daeaa1e9b641b296e8",
  clientSecret: "c08b1f4c88ceac6ca40bfaf38651a58a98490dc9",
};

export default App
