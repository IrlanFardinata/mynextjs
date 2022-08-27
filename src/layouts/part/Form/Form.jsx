import Blogs from 'pages/blogs';
import { useState, useEffect } from 'react';
const Form = ({blogs, setBlog, Blogid}) => {
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()

        if(Blogid){
            console.log('ini proses edit')
            // let getBlogID =  blogs.find(({id}) =>  id == Blogid);
            console.log(Blogid.title)
            const newBlogs = [...blogs]
            const blogsByid = newBlogs.findIndex((b => b.id == Blogid.id));
            newBlogs[blogsByid].title = title
            newBlogs[blogsByid].body = deskripsi
            setBlog(newBlogs);
            setID('')
            setTitle('')
            setDeskripsi('')

        }else{
            const NewData = [...blogs, {'userId': 11, 'id':blogs.length +1 , 'title' : title, 'body' : deskripsi}]
            const sortDesc = [...NewData]
            sortDesc.sort((a, b) => (a.id > b.id ? -1 : 1))
            setBlog(sortDesc)
        }
        setID('')
        setTitle('')
        setDeskripsi('')
    }

    return (
        <>
            <form className="w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                        Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Blogid" type="hidden" placeholder="Blogid"
                   value={id} onChange={(e) => setID(e.target.value)} />

                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title"
                    value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="deskripsi">
                        Deskripsi
                    </label>
                    <textarea id="deskripsi" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="content" rows="4" cols="20" placeholder="Tulis Deskripsi ..." value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}>
                    </textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                        Add
                    </button>
                </div>

            </form>
        </>
    )
}
export default Form;