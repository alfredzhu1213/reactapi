import React from "react";
 
import { useNavigate, useParams, useLocation, Link, NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

 

  function Detail() {
  
    const queryParams = new URLSearchParams(window.location.search);
    const _id = queryParams.get('id');
    const _org = queryParams.get('org');

    var _name ="";
    var avatar_image =""   ; 
    var watchers = "";
    var forks = "";
    var open_issues ="";
     

    
    fetch(`https://api.github.com/orgs/${_org}/repos`
    , 
        {
            method: 'GET',
            headers: {
                    'Content-type': 'application/json' 
                    },
        })
    .then(response => response.json())
    .then((result) => {
            console.log(result);
            console.log(result[_id].name);
            const image_f = document.getElementById('img_profile');
            image_f.src = result[_id].owner.avatar_url;

            const ul = document.getElementById('Org_details');
            ul.innerHTML = "";

            let li = document.createElement('li'); 
            let name = document.createElement('span');
            name.innerHTML ="Name: "+ result[_id].name;
            li.appendChild(name);
            ul.appendChild(li);

            // let li2 = document.createElement('li'); 
            // let avatar_image = document.createElement('span');
            // avatar_image.innerHTML = result[_id].owner.avatar_url;
            // li2.appendChild(avatar_image);
            // ul.appendChild(li2);

            let li3 = document.createElement('li');
            let watchers = document.createElement('span');
            watchers.innerHTML = "Watchers: "+ result[_id].watchers;
            li3.appendChild(watchers);
            ul.appendChild(li3);

            let li4 = document.createElement('li');
            let forks = document.createElement('span');
            forks.innerHTML = "Fork: "+ result[_id].forks;
            li4.appendChild(forks);
            ul.appendChild(li4);

            let li5 = document.createElement('li');
            let open_issues = document.createElement('span');
            open_issues.innerHTML ="Open Issues: "+result[_id].open_issues ;
            li5.appendChild(open_issues);
            ul.appendChild(li5);

            let li6 = document.createElement('li');
            let license_key = document.createElement('span');
            license_key.innerHTML ="License  <br/> Key:"+result[_id].license.key+" <br/> Name:"+result[_id].license.name
            +" <br/> spdx_id:"+result[_id].license.spdx_id +" <br/> url:"+result[_id].license.url;
            li6.appendChild(license_key);
            ul.appendChild(li6);
            

    }) 
    .catch(err => { console.log(err); 
    });
    return (
       
     

      <React.Fragment>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
            <NavLink to="/Home">Home</NavLink>
            <br/>


            
            <img id="img_profile"    ></img>
           
            {/* width="10" height="200" */}

            <ul id="Org_details"></ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
 
  
// }

export default Detail;