import { useState, useEffect, useContext} from 'react';
import { BlogsContext } from '@/layouts/context/BlogsContext';

const initialValues = {
    title : "",
    body : ""
}
const Form = () => {
    const [values, setValues] = useState(initialValues);
    const {blogsState} = useContext(BlogsContext);

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setValues({...values, [name]:value,})
    }

    useEffect(() => {
        if(blogsState.blogsbyID){
            setValues({title : blogsState.blogsbyID.title, body : blogsState.blogsbyID.body})
        }else{
            setValues(initialValues)
        }
    }, [setValues, blogsState.blogsbyID]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(blogsState.blogsbyID){
            const newBlogs = [...blogsState.blogs]
            const blogsByid = newBlogs.findIndex((b => b.id == blogsState.blogsbyID.id));
            newBlogs[blogsByid].title = values.title == "" ? blogsState.blogsbyID.title : values.title
            newBlogs[blogsByid].body = values.body == "" ? blogsState.blogsbyID.body : values.body
            blogsState.setBlog(newBlogs);
            setValues(initialValues)
            blogsState.setblogsbyID('')
        }else{
            const NewData = [...blogsState.blogs, {'userId': 11, 'id':blogsState.blogs.length +1 , 'title' : values.title, 'body' : values.body}]
            const sortDesc = [...NewData]
            sortDesc.sort((a, b) => (a.id > b.id ? -1 : 1))
            blogsState.setBlog(sortDesc)
            setValues(initialValues)
        }
    }
    // console.log(blogsState.blogsbyID)



    return (
        <>
            <form  onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" name="title" type="text" placeholder="Title"
                    value={values.title} onChange={handleInputChange} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                        Deskripsi
                    </label>
                    <textarea id="deskripsi" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name="body" rows="4" cols="20" placeholder="Tulis Deskripsi ..."
                        value={values.body} onChange={handleInputChange}>
                    </textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-4 py-4 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" type="submit" >
                        Save
                    </button>
                </div>

            </form>
        </>
    )
}
export default Form;