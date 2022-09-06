import {createContext, useState, useEffect, useContext}  from 'react';

export const BlogsContext = createContext();

export const BlogProvider = (props) => {
    const [blogs, setBlog]    = useState([]);
    const [blogsbyID, setblogsbyID] = useState({})

    useEffect(() =>{
        ( async () =>{
            const getData = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await getData.json()
            setBlog(data);
        }
        )()
    },[])
    const btnHandleAction = (id) => {
        const dataBlogsByID = blogs.find(b=>b.id == id)
        setblogsbyID(dataBlogsByID)
    }

    const fncDelete = (e) => {
        let Executed = confirm('mau hapus??');
        if(Executed == true){
            let newblog = blogs.filter(({id}) =>  id != e);
            setBlog(newblog);
        }
    }
    
    const blogsState    = {blogs, setBlog, blogsbyID, setblogsbyID, btnHandleAction, fncDelete};

    return (
        <BlogsContext.Provider value={{blogsState}}>
            {props.children}
        </BlogsContext.Provider>
    )
}