// sastra nababan

import { useState, useEffect } from 'react';
import Layout from '@/layouts/MainLayout';
import CalInfo from '@/layouts/part/Calculator/CalInfo';
import CalInput from '@/layouts/part/Calculator/CalInput';
import CalBtn from '@/layouts/part/Calculator/CalBtn';
const initialValues = {
    input1 : Number(0),
    input2 : Number(0)
}

const Calculator = () =>{
    const [values, setValues] = useState(initialValues);
    const [opt, setOpt] = useState({aksi :'tambah', icon: '+'});
    const [hasil, setHasil] = useState(0);

    const btnHandleAction = (e) =>{
        setOpt(e)
    }

    const Execute = (val, opt) =>{
        let val1 = Number(val.input1)
        let val2 = Number(val.input2)
        let hasil = 0

        if(opt){
            if(opt.aksi == 'clear'){
                setValues(initialValues)
                setOpt({aksi :'tambah', icon: '+'})

            }else if(opt.aksi == 'tambah'){
                hasil = val1 + val2
            }else if(opt.aksi == 'kurang'){
                hasil = val1 - val2
            }else if(opt.aksi == 'kali'){
                hasil = val1 * val2
            }else if(opt.aksi == 'bagi'){
                hasil = val1 / val2
            }
        }else{
            hasil = val1 + val2
        }
        if (Number.isNaN(hasil)) {
            hasil = 0;
        }
        setHasil(hasil)

    }

    useEffect(() => {
       Execute(values, opt);

    }, [values, opt]);

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
                                        <CalInfo values={values} opt={opt} hasil={hasil}/>
                                        <CalInput values={values} setValues={setValues}/>
                                        <CalBtn btnAction={btnHandleAction}/>
                                    </div>
                                </div>
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
