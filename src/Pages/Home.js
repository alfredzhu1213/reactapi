import React from 'react';
import Table from './Table';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            items: [],
            isLoaded: false,
            name: '',
            image: '',
            watchers: '',
            forks: '',
            open_issues: '',
            icense: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(e) {
        // get all entities - GET
        var orgName = this.state.search
 
        fetch(`https://api.github.com/orgs/${orgName}/repos`
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
                this.setState({
                isLoaded: true,
                items: result,
            })
        }) 
        .catch(err => { console.log(err); 
        });

       
    }
 
    handleChange(changeObject) {
        this.setState(changeObject)
      }
    handleSubmit(event) {
        alert(this.state.search + ' was submitted! ');
        this.componentDidMount(event);
        event.preventDefault();
    }


    render() {

        const { isLoaded, items } = this.state; 
               

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="display-4 text-center"> Searching github organizations</h1> <br/>    <br/> 
                        <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">
                         Org Name:</label>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            value={this.state.search}
                            onChange={(e) => this.handleChange({ search: e.target.value })}
                            required
                            />
                            <br/> 
 
                            <button className="btn btn-primary" type='button' onClick={(e) => this.componentDidMount(e)}>
                            Search
                            </button>
                            
                            <br/>    <br/> 
                            <div className="App">
                                <Table className="table" items={ this.state.items } />
                            </div>

                        </form>
                    </div>
                </div>
            </div>

           

        );

    }

}

export default Home;
