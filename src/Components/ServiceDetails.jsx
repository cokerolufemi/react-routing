import React from 'react';
import {useParams} from"react-router-dom"

function ServiceDetails() {
const{id}=useParams ()

  return (
    <div>
        <h1>ServiceDetails of {id} </h1>
        </div>
  )
}

export default ServiceDetails