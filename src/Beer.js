import React from "react"
import './Beer.css'

export const Beer = ( {item} ) => {
    return (
        <li key={item.id}>
            <article>
                <img src={item.image_url} alt={item.name}></img>
                <div class="text-wrapper">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>
            </article>
        </li>
    )
}