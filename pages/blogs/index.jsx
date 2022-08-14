import { useState, useEffect } from 'react';
import Link from 'next/link';
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

    const handleUpdate = (idBlog) =>{
        let getBlogID = blogs.find(({id}) =>  id == idBlog );

        let title = prompt('Title :', getBlogID.title);
        let body = prompt('Body :', getBlogID.body);

        let Executed = confirm('ingin menyimpan data yang sudah diubah??');
        if(Executed == true){
            const newData = [{'userId': getBlogID.userId, 'id':getBlogID.id , 'title' : title, 'body' : body}]
            const currentObj = {...blogs, ...newData};
            console.log(currentObj)

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
            <div style={{display : 'flex', justifyContent: 'center'}}>
                <div>
                    <h3>Serverside Rendering| jumlah : {datalistserve.length}</h3>
                    <table style={{borderCollapse: 'collapse', width: '100%', border: '2px solid #ddd'}}>
                    <thead>
                        <tr style={{border: '1px solid #ddd'}}>
                            <th>No</th>
                            <th style={{border: '1px solid #ddd'}}>Judul</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        datalistserve && datalistserve.map((list, index) =>{
                            return(
                                <tr style={{border: '1px solid #ddd'}}>
                                    <td><a>{index + 1}</a></td>
                                    <td key={index} style={{border: '1px solid #ddd', height:'30px'}}>
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
                    <table style={{borderCollapse: 'collapse', width: '100%', border: '2px solid #ddd'}}>
                    <thead>
                        <tr style={{border: '1px solid #ddd'}}>
                            <th>No</th>
                            <th style={{border: '1px solid #ddd'}}>Judul</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        blogs && blogs.map((data, index) =>{
                            return(
                                <tr style={{border: '1px solid #ddd'}}>
                                    <td><a>{index + 1}</a></td>
                                    <td  key={index} style={{border: '1px solid #ddd', height:'30px' }}>
                                        <Link href={`/blogs/${data.id}`}>
                                            <a>{data.title}</a>
                                        </Link>
                                    </td>
                                    <td>
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
   
        </>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const datalist =  await res.json();
    return { props : {datalist}}
}
export default Blogs;