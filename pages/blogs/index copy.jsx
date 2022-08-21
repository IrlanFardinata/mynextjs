import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/layouts/MainLayout';
import Card from '@/layouts/part/Blogs/card';

const Blogs = ({datalist}) =>{
    const [blogs, setBlog] = useState([]);
    const [datalistserve, setListserve] = useState(datalist);

    useEffect(() =>{
        ( async () =>{
            const getData = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await getData.json()
            setBlog(data);
        }
        )()

    },[])

    const handleInsert = () =>{
        let title = prompt('Title :');
        let body = prompt('Body :');

        let Executed = confirm('ingin menyimpan data yang sudah ditambahkan??');
        if(Executed == true){
            const newData = [{'userId': 11, 'id':blogs.length +1 , 'title' : title, 'body' : body}]
            let newBlogInsert = blogs.concat(newData); 
            let newServerInsert = datalistserve.concat(newData); 
            setBlog(newBlogInsert);
            setListserve(newServerInsert);
        }
    }

    const handleUpdate = async (idBlog) =>{
        let getBlogID = await blogs.find(({id}) =>  id == idBlog );
        let title = prompt('Title :', getBlogID.title);
        let body = prompt('Body :', getBlogID.body);

        let Executed = confirm('ingin menyimpan data yang sudah diubah??');
        if(Executed){

        const newBlogs = [...blogs]
        const blogsByid = newBlogs.findIndex((b => b.id == idBlog));
        newBlogs[blogsByid].title = title
        newBlogs[blogsByid].body = body

            // await blogs && blogs.map((x, index) =>{
            //     if(x.id === idBlog) {
            //         blogs[index] = {...x, title: title, body : body}
            //     }
            // })
            //console.log(blogs)

            setBlog(newBlogs);
            setListserve(newBlogs);
        }
    }

    const handleDelete = async (idBlog) =>{
        let Executed = confirm('mau hapus??');
        if(Executed == true){
            let newblog = blogs.filter(({id}) =>  id != idBlog );
            let newlist = datalistserve.filter(({id}) =>  id != idBlog );
            setBlog(newblog);
            setListserve(newlist);
        }
    }
    return(
        <>  
            <Layout>
                <section className="bg-white border-b py-8">
                    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Title
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                        </div>
                        {
                            blogs && blogs.map((data, index) =>{
                                return (
                                    <Card id={data.id} title={data.title} body={data.body}/>
                                )
                            })
                        }
                    </div>
                </section>
                <div style={{display : 'flex', justifyContent: 'center'}}>
                    <div>
                        <h3>Serverside Rendering| jumlah : {datalistserve.length}</h3>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6"> No</th>
                                    <th scope="col" className="py-3 px-6"> Judul</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                datalistserve && datalistserve.map((list, index) =>{
                                    return(
                                        <tr key={index} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td scope="col" className="py-3 px-6"><a>{index + 1}</a></td>
                                            <td scope="col" className="py-3 px-6">
                                                <Link href={`/blogs/${list.id}`}>
                                                    <a>{list.title}</a>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })

                            }
                            </tbody>
                        </table>
                    </div>
            

                    <div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h3>Clientside Rendering| jumlah: {blogs.length}</h3>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}} >
                                <button onClick={()=>handleInsert()} style={{color: 'green'}}>+</button>
                            </div>

                        </div>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6"> No</th>
                                    <th scope="col" className="py-3 px-6"> Judul</th>
                                    <th scope="col" className="py-3 px-6"> Action</th>
                                </tr>
                            </thead>
                        <tbody>
                        {
                            blogs && blogs.map((data, index) =>{
                                return(
                                    <tr key={index}  scope="col" className="py-3 px-6">
                                        <td  scope="col" className="py-3 px-6">{index + 1}</td>
                                        <td  scope="col" className="py-3 px-6">
                                            <Link href={`/blogs/${data.id}`}>
                                                <a>{data.title}</a>
                                            </Link>
                                        </td>
                                        <td  scope="col" className="py-3 px-6">
                                            <button onClick={()=>handleUpdate(data.id)} style={{color: 'blue', marginLeft:'5px', marginRight:'5px'}}>\</button>
                                            <button onClick={()=>handleDelete(data.id)} style={{color: 'red', marginRight:'5px'}}>x</button>
                                        </td>
                                    </tr>

                                )
                            })

                        }
                        </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const datalist =  await res.json();
    return { props : {datalist}}
}
export default Blogs;