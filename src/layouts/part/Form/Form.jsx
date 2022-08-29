import { useState, useEffect } from 'react';
const initialValues = {
    title : "",
    body : ""
}
const Form = ({blogs, setBlog, dtSubmit, setdtSubmit }) => {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setValues({...values, [name]:value,})
    }

    useEffect(() => {
        if(dtSubmit){
            setValues({title : dtSubmit.title, body : dtSubmit.body})
        }else{
            setValues(initialValues)
        }
    }, [setValues, dtSubmit]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(dtSubmit.id){
            const newBlogs = [...blogs]
            const blogsByid = newBlogs.findIndex((b => b.id == dtSubmit.id));
            newBlogs[blogsByid].title = values.title == "" ? dtSubmit.title : values.title
            newBlogs[blogsByid].body = values.body == "" ? dtSubmit.body : values.body
            setBlog(newBlogs);
            setValues(initialValues)
            setdtSubmit('')
        }else{
            const NewData = [...blogs, {'userId': 11, 'id':blogs.length +1 , 'title' : values.title, 'body' : values.body}]
            const sortDesc = [...NewData]
            sortDesc.sort((a, b) => (a.id > b.id ? -1 : 1))
            setBlog(sortDesc)
            setValues(initialValues)
        }
    }

    console.log(values)

    return (
        <>
        {/* title == "" ? dtSubmit.title : title */}
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
                        name="body" rows="4" cols="20" placeholder="Tulis Deskripsi ..." value={values.body} onChange={handleInputChange}>
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