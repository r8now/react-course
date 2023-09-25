import React from 'react'
import {shortList,list,longList} from "./data"
import { useState } from 'react'

const Carousel = () => {
const [people, setPeople]=    useState(shirtList)
  return (
    <section className='slider-container'>
        {people.map((person,index)=> {
            const {id,img,name,title,quote} = person;
            return <article className='slide' key={id}></article>
        })}
    </section>
  )
}

export default Carousel