// import React from 'react'

// const DataDisplay = ({post}) => {
//   return (
//     <>      
//     <div className='m-3 p-3 border border-2 shadow-lg'>
//         <h4>Id: {post.id}</h4>
//         <h4>userID: {post.userId}</h4>
//         <h4>Title: {post.title}</h4>
//         <h4>Body: {post.body}</h4>

//     </div>

//     </>
//   )
// }

// export default DataDisplay

import React from 'react'

const DataDisplay = ({props}) => {
  return (
    <>
      <div className='m-4 p-4 border border-2 shadow-lg'>
        <h4>userId : {props.userId} </h4>
        <h4>Id : {props.id} </h4>
        <h4>Title : {props.title} </h4>
        <h4>Body : {props.body} </h4>
        {/* <h4>Mouse : {props.id} </h4> */}
        
      </div>
    </>
  )
}

export default DataDisplay