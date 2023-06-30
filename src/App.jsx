import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
import { useFetch } from './fetch'

function App() {
const {loading,data}=useFetch()
const [page,setPage]=useState(0)
const [user,setUser]=useState([])

useEffect(()=>{
  if(loading) return
  setUser(data[page])
  // console.log(data[page])
},[loading,page])


const next =()=>{
  setPage((oldpage)=>{
    let nextpage= oldpage+1
    if(nextpage > data.length-1){
      nextpage=0
    }
    return nextpage
  })
}

const preview=()=>{
  setPage((oldpage)=>{
    let pre =oldpage -1
    if(pre <0){
       pre=data.length -1

    }
    return pre
  })
}

const handel=(index)=>{
  setPage(index)
}
  return (
    <>
        <section>
          <h1>Pagination</h1>
          <article className='cardItem'>
           {
            user.map((item)=>{

              return(
                <Card key={item.id} {...item}/>
              )
            })
           }
          </article>
   {
    !loading &&(
      <div className='change'>
      <button onClick={preview}>prev</button>
{
  data.map((item,index)=>{
      return(
        <button key={index} onClick={()=>handel(index)}>{index+1}</button>
      )
  })
}
      <button onClick={next}>next</button>
    </div>
    )
   }
        </section>
    </>
  )
}

export default App
