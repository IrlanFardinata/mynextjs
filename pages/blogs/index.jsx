import { useState, useEffect } from 'react';
import Link from 'next/link';
const Blogs = ({datalist}) =>{
    console.log(datalist)
    const [blogs, setBlog] = useState([]);
    useEffect(() =>{
        ( async () =>{
            const getData = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await getData.json()
            setBlog(data);
        }
        )()

    },[])
    return(
        <>
            <div>
                <h3>Clientside Rendering</h3>
                <ul>
                {
                    blogs && blogs.map((data, index) =>{
                        return(
                            <li key={index}>
                                <Link href={`/blogs/${data.id}`}>
                                    <a>{data.title}</a>
                                </Link>
                            </li>
                        )
                    })

                }
                </ul>
            </div>

            <div>
                <h3>Serverside Rendering</h3>
                <ul>
                {
                    datalist && datalist.map((ls, index) =>{
                        return(
                            <li key={index}>
                                <Link href={`/blogs/${ls.id}`}>
                                    <a>{ls.title}</a>
                                </Link>
                            </li>
                        )
                    })

                }
                </ul>
            </div>
            
        </>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const datalist =  await res.json();
    return { props : {datalist}}
}
export default Blogs;