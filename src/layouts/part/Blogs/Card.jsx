import { useContext } from 'react';
import Link from 'next/link';
import { BlogsContext } from '@/layouts/context/BlogsContext';
const Card = () => {
const {blogsState} = useContext(BlogsContext);
// console.log(blogsState.blogsbyID)
    return (
        <>
           {
            blogsState.blogs.map((i, d)=>(
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" key={d}>{i.title}
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                ID : {i.id}
                            </p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">
                                {i.title} 
                            </div>
                            <p className="text-gray-800 text-base px-6 mb-5">
                                {i.body}
                            </p>
                        </a>
                    </div>

                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-around">
                            <Link href={`/blogs/${i.id}`}>
                                <a className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-4 py-4 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Detail
                                </a>
                            </Link>
                            <button  className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-4 py-4 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={() =>blogsState.btnHandleAction(i.id)} >
                            Edit
                            </button>
                            <button  className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-4 py-4 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"  onClick={()=>blogsState.fncDelete(i.id)} >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                
            ))
           }
       </>
    )
}
export default Card;