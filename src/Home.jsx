import React from 'react';
import Card from './Card'

export default function Home({data,head,update}) {
 
  
    return (
        <React.Fragment>
        <Card data={data} update={update} style={{padding:'5px 5px',margin:'3px 3px'}}   head={head}/>
            
        </React.Fragment>
    )
}
