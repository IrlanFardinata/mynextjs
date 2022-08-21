import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Layouts from '@/layouts/MainLayout';

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
            <Layouts>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6"></p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6"></div>
                            <p className="text-gray-800 text-base px-6 mb-5"></p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-around">
                            <Link href={`/blogs/`}>
                                <a className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-4 py-4 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Detail
                                </a>
                            </Link>
                            <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-4 py-4 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Edit
                            </button>
                            <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-4 py-4 px-4 shadow-lg focus:outline-none           focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Delete
                            </button>
                        </div>
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`)
    const data =  await res.json();
    return { props : {data}}
}
export default BlogDetail;