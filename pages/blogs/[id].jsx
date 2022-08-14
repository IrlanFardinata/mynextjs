import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const BlogDetail = ({data}) =>{

    const [detail, setDetail] = useState();
    const {id} = useRouter().query;

    useEffect(() =>{
        ( async () =>{
            const getData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await getData.json()
            setDetail([data]);
        }
        )()

    },[])
    return(
        <>
            <div>
                <h2>Clientside Rendering</h2>
                {
                    detail && detail.map((data, index) => {
                        return(
                            <>
                                <h4>{data.title}</h4>
                                <p>{data.body}</p>
                                <br/>
                                <button>
                                    <Link href={`/blogs/`}>
                                        <a>Back</a>
                                    </Link>
                                </button>
                            </>
                        )
                    })
                }

            </div>
            <br/>
            <br/>
            <div>
                <h2>Serverside Rendering</h2>
                <h5>{data.title}</h5>
                <p>{data.body}</p>

            </div>
        </>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`)
    const data =  await res.json();
    return { props : {data}}
}
export default BlogDetail;