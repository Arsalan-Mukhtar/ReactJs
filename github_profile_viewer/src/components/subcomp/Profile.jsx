import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RepoList from './RepoList.jsx';

class Profile extends Component {

   render() {
      return (
         <div className="card card-default">
            <div className="card-header">
               <h4 className="card-title">{this.props.userData.name}</h4>
            </div>
            <div className="card-text">
               <div className="row">
                  <div className="col-md-4">
                     <img src={this.props.userData.avatar_url} className="thumbnail" style={ { width: "100%" }} />
                  </div>
                  <div className="col-md-8">
                     <div className="row">
                        <div className="col-md-12">
                           <span className="badge badge-primary">{this.props.userData.public_repos} Repos</span>
                           <span className="badge badge-success">{this.props.userData.gists} Public Gists</span>
                           <span className="badge badge-info">{this.props.userData.followers} Followers</span>
                           <span className="badge badge-danger">{this.props.userData.following} Following</span>
                        </div>
                     </div>
                     <hr/>
                     <div className="row">
                        <div className="col-md-12">
                           <ul className="list-group">
                              <li className="list-group-item"><strong>Username: </strong>{this.props.userData.login}</li>
                              <li className="list-group-item"><strong>Location: </strong>{this.props.userData.location}</li>
                              <li className="list-group-item"><strong>Email Address: </strong>{this.props.userData.email}</li>
                           </ul>
                        </div>
                     </div>
                     <br/>
                     <a id="visit-profile" className="btn btn-primary" href={this.props.userData.html_url} target="_blank">Visit Profile</a>
                  </div>
               </div>
               <hr/>
               <h4 id="user-repo">User Repositories</h4>
               <RepoList userRepos={this.props.userRepos} />
            </div>
         </div>

      )
   }
}

export default Profile
