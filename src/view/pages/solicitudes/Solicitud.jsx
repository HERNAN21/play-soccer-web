import React from 'react';



class Solicitud extends React.Component{
    constructor(prop){
        super(prop);

        this.state={
            solicitudes:{

            },
            list_solicitudes:[],


        }
        
    }




    render (){
        return (
            <>
                <h1>Solicitud</h1>
            </>
        );
    }


}

export default Solicitud;