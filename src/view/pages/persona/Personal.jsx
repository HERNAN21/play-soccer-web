import React from 'react';

import { server,api_name } from '../../../api/general';
// const fetch = require('node-fetch');
import axios from 'axios';

class Personal extends React.Component{
    constructor(prop){
        super(prop)
        this.state={
            list_personal:[],
            personal:{},

        }
                
        
        this.cargarData();
    }
    
    cargarData =()=>{
        axios.get(server+api_name+'/getusers')
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            // alert(error)
            console.log(error)
        });
        
        // fetch(server+api_name+'/getusers')
        // .then(res => res.json())
        // .then(json =>{
        //     console.log(json);
        // });

        // axios.get("http://jsonplaceholder.typicode.com/todos")
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(error => {
        //     alert(error)
        // });
    }
    
    render (){
        return (
            <>
                {/* <h1>Personal  Redux </h1> */}
            </>
        );
    }

}

export default Personal;