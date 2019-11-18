import React from 'react';

import { server,api_name } from '../../../api/general';
// const fetch = require('node-fetch');

class Personal extends React.Component{
    constructor(prop){
        super(prop)
        this.state={
            list_personal:[],
            personal:{},

        }

        

        
        fetch('http://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json =>{
            console.log(json);
        });

        this.cargarData();
    }

    cargarData =()=>{
        fetch(server+api_name+'/getusers')
        .then(res => res.json())
        .then(json =>{
            console.log(json);
        });
    }

    render (){
        return (
            <>
                <h1>Personal  Redux </h1>
            </>
        );
    }

}

export default Personal;