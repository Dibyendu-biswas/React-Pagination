import React from 'react'
// import img from "./assets/img.png"
const Card = ({ avatar_url, html_url, login }) => {
  return (
    <div className='container'>
        <img src={avatar_url} alt="" />
        <p>{login}</p>
        <button>
            <a href={html_url}>View Profile</a>
        </button>
    </div>
  )
}

export default Card