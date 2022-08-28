import Blogs from 'pages/blogs';
import { useState, useEffect } from 'react';
const Form = ({blogs, setBlog, dtSubmit }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if(dtSubmit.action == 'add'){
            const NewData = [...blogs, {'userId': 11, 'id':blogs.length +1 , 'title' : title, 'body' : body}]
            const sortDesc = [...NewData]
            sortDesc.sort((a, b) => (a.id > b.id ? -1 : 1))
            setBlog(sortDesc)
        }else if(dtSubmit.action == 'edit'){
            const newBlogs = [...blogs]
            const blogsByid = newBlogs.findIndex((b => b.id == dtSubmit.id));
            newBlogs[blogsByid].title = title == "" ? dtSubmit.title : title
            newBlogs[blogsByid].body = body == "" ? dtSubmit.body : body
            setBlog(newBlogs);
        }
        setTitle('')
        setBody('')

        // if(dtSubmit.id){
        //     const newBlogs = [...blogs]
        //     const blogsByid = newBlogs.findIndex((b => b.id == dtSubmit.id));
        //     newBlogs[blogsByid].title = title == "" ? dtSubmit.title : title
        //     newBlogs[blogsByid].body = body == "" ? dtSubmit.body : body
        //     setBlog(newBlogs);
        // }else{
        //     const NewData = [...blogs, {'userId': 11, 'id':blogs.length +1 , 'title' : title, 'body' : body}]
        //     const sortDesc = [...NewData]
        //     sortDesc.sort((a, b) => (a.id > b.id ? -1 : 1))
        //     setBlog(sortDesc)
        // }
        // setTitle(' ')
        // setBody(' ')
    }

    return (
        <>
        {/* title == "" ? dtSubmit.title : title */}
            <form  onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title"
                    value={title == "" ? dtSubmit.title : title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                        Deskripsi
                    </label>
                    <textarea id="deskripsi" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="content" rows="4" cols="20" placeholder="Tulis Deskripsi ..." value={body == "" ? dtSubmit.body : body} onChange={(e) => setBody(e.target.value)}>
                    </textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                        Save
                    </button>
                </div>

            </form>
        </>
    )
}
export default Form;