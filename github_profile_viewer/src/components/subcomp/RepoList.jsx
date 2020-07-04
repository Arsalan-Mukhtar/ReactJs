import React, { Component } from 'react';
import Repo from './Repo.jsx';

class RepoList extends Component {
   render() {
      return (
         <div>
            <ul className="list-group">
               {
                  this.props.userRepos.map(repo => {
                     return <Repo key={repo.id} repo={repo} {...this.props} />
                  })
               }
            </ul>
         </div>

      )
   }
}

export default RepoList
