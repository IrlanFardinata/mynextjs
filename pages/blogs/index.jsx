import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/layouts/MainLayout';
import Card from '@/layouts/part/Blogs/Card';
import Form from '@/layouts/part/Form/Form';

const Blogs = ({datalist}) =>{
    const [blogs, setBlog] = useState([]);
    const [dtSubmit, setdtSubmit] = useState({});
    const [formtitle, setFormtitle] = useState('Form Title');
    const jumlah = blogs.length; 

    useEffect(() =>{
        ( async () =>{
            const getData = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await getData.json()
            setBlog(data);
        }
        )()

    },[])

    // const fncHandleAction = async (e) =>{
    //     let action = e.action
    //     let idblog = e.id

    //     if(action == 'add'){
    //         let title = prompt('Title :');
    //         let body = prompt('Body :');

    //         let Executed = confirm('ingin menyimpan data yang sudah ditambahkan??');
    //         if(Executed == true){
    //             const newData = [{'userId': 11, 'id':blogs.length +1 , 'title' : title, 'body' : body}]
    //             let newBlogInsert = blogs.concat(newData); 
    //             setBlog(newBlogInsert);
    //         }
    //         // [{}]
    //         // blogs = [...blog,{}]

    //         // end add

    //     }else if(action == 'edit'){
    //         let getBlogID = await blogs.find(({id}) =>  id == idblog);
    //         let title = prompt('Title :', getBlogID.title);
    //         let body = prompt('Body :', getBlogID.body);

    //         let Executed = confirm('ingin menyimpan data yang sudah diubah??');
    //         if(Executed){

    //         const newBlogs = [...blogs]
    //         const blogsByid = newBlogs.findIndex((b => b.id == idblog));
    //         newBlogs[blogsByid].title = title
    //         newBlogs[blogsByid].body = body
    //         setBlog(newBlogs);
    //         }
    //         // end edit

    //     }else if(action == 'delete'){
    //         let Executed = confirm('mau hapus??');
    //         if(Executed == true){
    //             let newblog = blogs.filter(({id}) =>  id != idblog);
    //             setBlog(newblog);
    //         }
    //         // end delete
    //     }else{
    //         console.log('None')
    //     }
        
    // }

    // const btnHandleSubmit = async (e) =>{
    //     let title =  document.getElementById("title").value
    //     let body =  document.getElementById("deskripsi").value
    //     if(e.action == 'add'){
    //         blogs = [{userId: 11, id:blogs.length +1 , title : title, body : body}, ...blogs]
    //         setBlog(blogs);
    //     }else if(e.action == 'edit'){
    //         let getBlogID = await blogs.find(({id}) =>  id == e.id);
    //         console.log(getBlogID);
    //         document.getElementById("title").value = getBlogID.title;
    //         document.getElementById("deskripsi").value = getBlogID.body;

    //         const newBlogs = [...blogs]
    //         const blogsByid = newBlogs.findIndex((b => b.id == e.id));
    //         newBlogs[blogsByid].title = title
    //         newBlogs[blogsByid].body = body
    //         setBlog(newBlogs);


    //     }
    // }
    const fncDelete = (e) => {
        if(e.action == 'delete'){
            let Executed = confirm('mau hapus??');
            if(Executed == true){
                let newblog = blogs.filter(({id}) =>  id != e.id);
                setBlog(newblog);
            }
        }
    }

    const fncsetdtSubmit = (e) => {
        setdtSubmit(e)
        fncDelete(e)
        setFormtitle(e.formTitle)
    }

    return(
        <>  
            <Layout>
                <section className="bg-white border-b py-8">
                    <div className="container mx-auto flex flex-wrap pt-10 pb-12">
                        <div className='flex w-full'>
                            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                                Title jumlah : {jumlah}
                            </h2>
                            <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-4 py-4 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={()=>fncHandleAction({action :"add"})} >
                                Tambah
                            </button>
                        </div>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                        </div>

                        <div className="w-full mb-4">
                            <div className="w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {formtitle}
                                </h3>
                                <Form blogs={blogs} setBlog={setBlog} dtSubmit={dtSubmit} setdtSubmit={setdtSubmit} />
                            </div>
                        </div>

                        {
                            blogs && blogs.map((data, index) =>{
                                return (
                                    <Card key={index} id={data.id} title={data.title} body={data.body} btnSubmit={fncsetdtSubmit} />
                                )
                            })
                        }
                    </div>
                </section>
                <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
                        <g className="wave" fill="#f8fafc">
                        <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z" />
                        </g>
                        <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                        <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001" />
                            <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001" />
                            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003" />
                        </g>
                        </g>
                    </g>
                    </g>
                </svg>
            </Layout>
        </>
    )
}

export default Blogs;