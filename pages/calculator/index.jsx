// sastra nababan
import Layout from '@/layouts/MainLayout';

const Calculator = () =>{
    return(
        <>
            <Layout>
                <section className="bg-white border-b py-8">
                        <div className="container mx-auto flex flex-wrap pt-10 pb-12">
                            <div className='flex w-full'>
                                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                                    Calculator
                                </h2>
                            </div>
                            <div className="w-full mb-4">
                                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                            </div>
                        </div>
                        <div className="w-full mb-4 flex justify-center">
                            <div className="w-3/5 bg-fuchsia-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                                <div className='flex justify-center'>
                                    <div className="w-4/5 bg-white p-9">
                                        <div className='w-full mb-10'>
                                            <table className="border-solid border-2 border-slate-100 w-full text-black text-center">
                                                <thead>
                                                    <tr>
                                                        <th className="border-solid border-2 border-slate-100 h-10">Input 1</th>
                                                        <th className="border-solid border-2 border-slate-100 h-10">Aksi</th>
                                                        <th className="border-solid border-2 border-slate-100 h-10">Input 2</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border-solid border-2 border-slate-100 h-12 font-semibold text-3xl">0</td>
                                                        <td className="border-solid border-2 border-slate-100 h-12 font-semibold text-3xl">#</td>
                                                        <td className="border-solid border-2 border-slate-100 h-12 font-semibold text-3xl">0</td>

                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3} className="border-solid border-2 border-slate-100 h-20 text-6xl font-bold text-emerald-700" >0</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                            
                                        <div className='flex justify-between'>
                                            <div className="flex justify-center">
                                                <div className="mb-3">
                                                    <input type="number" className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                                        border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="input1" placeholder="Input Number 1" value={0}/>
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="mb-3">
                                                    <input type="number" className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                                        border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="input2" placeholder="Input Number 2" value={0}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-around flex-wrap">
                                            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                                                <div className="text-sm lg:flex-grow">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4">
                                                        +
                                                    </button>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4">
                                                        -
                                                    </button>

                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4">
                                                        *
                                                    </button>

                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4">
                                                        /
                                                    </button>
                              
                                                </div>
                                                <div>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4">
                                                        Clear
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="flex flex-col">
                                    <div className=''>01</div>
                                    <div className=''>
                                        <div className='flex justify-around'>
                                            <div className="flex justify-center">
                                                <div className="mb-3">
                                                    <input type="number" className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                                        border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="input1" placeholder="Input Number 1"/>
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="mb-3">
                                                    <input type="number" className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                                        border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    id="input2" placeholder="Input Number 2"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-around flex-wrap">
                                            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                                                <div className="text-sm lg:flex-grow">
                                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4">
                                                        +
                                                    </button>
                                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4">
                                                        -
                                                    </button>

                                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4">
                                                        *
                                                    </button>

                                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4">
                                                        /
                                                    </button>
                              
                                                </div>
                                                <div>
                                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4">
                                                        Clear
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
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

export default Calculator
