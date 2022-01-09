import React from 'react';
import { Link } from 'react-router-dom';


 

const Table = ({items}) => {
  
  return (
    <table >
          <thead>
              <tr>
                  <th>Public Repository</th>
                  <th></th>
                  {/* <th>Watchers</th>
                  <th>Folks</th>
                  <th>Open Issues</th>
                
                  <th>Avatar Image</th> */}
              </tr>
          </thead>
      <tbody>
      { (items.length > 0) ? items.map( (items, index) => {
           return (
            <tr key={ items.id }>
               <td>{items.name}</td>
              
               <td>
                 
               <Link to={{
                 
                 pathname:`/Detail/?org=${items.owner.login}&&id=${index}`,
                  // pathname:`/Detail/?org=${items.owner.login}id=${items.id}&&name=${items.name}&&avatar=${items.owner.avatar_url}
                  // &&avatar=${items.owner.avatar_url}&&watchers=${items.watchers}&&forks=${items.forks}&&open_issues=${}`, 
                  id: items.id, 
                  }}>View Detail</Link>
               </td>
            </tr>
          )
         }) : <tr><td colSpan="2">No data to view</td></tr> }
      </tbody>
    </table>
  );
}

export default Table