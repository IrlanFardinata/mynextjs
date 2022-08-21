import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/layouts/MainLayout';
import Card from '@/layouts/part/Blogs/Card';

const Blogs = ({datalist}) =>{
    const [blogs, setBlog] = useState([]);
    const jumlah = blogs.length; 

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
            setBlog(newBlogInsert);
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

            setBlog(newBlogs);
        }
    }

    const handleDelete = (e) =>{
        //console.log(e.target.id)
        let Executed = confirm('mau hapus??');
        const idblog = e.target.id
        if(Executed == true){
            let newblog = blogs.filter(({id}) =>  id != idblog );
            setBlog(newblog);
        }
    }
    return(
        <>  
            <Layout>
                <section className="bg-white border-b py-8">
                    <div className="container mx-auto flex flex-wrap pt-10 pb-12">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Title jumlah : {jumlah}
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                        </div>
                        {
                            blogs && blogs.map((data, index) =>{
                                return (
                                    <Card key={index} id={data.id} title={data.title} body={data.body} delete={handleDelete}/>
                                )
                            })
                        }
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Blogs;