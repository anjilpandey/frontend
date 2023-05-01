// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import DataDisplay from './DataDisplay'

// const DataFetch = () => {
//     const [posts, setPosts] = useState([])
//     const [limit, setLimit] = useState(10)
//     useEffect(() => {
//         // using fetch()

//         //     fetch("https://jsonplaceholder.typicode.com/posts")
//         //         .then(response => response.json())
//         //         .then(data => setPosts(data))

//         // using Axios()
//         axios("https://jsonplaceholder.typicode.com/posts")
//             .then(response => response.data.slice(0, limit))
//             .then(data => setPosts(data))

//     }, [limit])
//     return (
//         <>
//             {
//                 posts.map(p => {
//                     return <DataDisplay post={p} />
//                 })
//             }
//             <div className='text-center'>
//                 {
//                     limit < 100 &&
//                     <button className='btn btn-primary' onClick={() => setLimit(limit + 10)}>Load More</button>

//                 }
//                 &nbsp;
//                 {
//                     limit > 10 &&
//                     <button className='btn btn-primary' onClick={() => setLimit(limit - 10)}>Show Less</button>
//                 }
//                 &nbsp;
//                 {
//                     limit > 10 &&

//                     <button className='btn btn-primary' onClick={() => setLimit(10)}>Reset</button>
//                 }
//             </div>
//         </>
//     )
// }

// export default DataFetch

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataDisplay from './DataDisplay'

const DataFetch = () => {

    const [post, setPost] = useState([])
    const [limit, setLimit] =useState(10)

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then(response => response.json().slice(0,limit))
        //     // .then(response=>response.data.slice(0,limit))
        //     .then(data => setPost(data))

        axios("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.data.slice(0,limit))
        .then(data=>setPost(data))

    },[limit])
    return (
        <>
            {
                post.map((p) => {
                    return <DataDisplay props={p}/>
                })
            }

            <div>
                {
                limit<100 &&
                <button className='btn btn-primary btn-sm' onClick={()=>setLimit(limit+20)}> Load More</button>
                }
                &nbsp;
                {
                    limit>20 &&
                <button className='btn btn-primary btn-sm' onClick={()=>setLimit(limit-20)}> See Less</button>
                }
                &nbsp;
                <button className='btn btn-primary btn-sm' onClick={()=>setLimit(10)}>Reset</button>
                &nbsp;
            </div>

        </>
    )
}

export default DataFetch