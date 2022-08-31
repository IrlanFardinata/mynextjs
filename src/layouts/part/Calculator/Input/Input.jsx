import { useState, useEffect } from 'react';

const Input = ({values, setValues, opt, InputName}) =>{
    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setValues({...values, [name]:value,})
    }

    useEffect(() => {
        console.log(opt)
        // if(opt.aksi == 'clear'){
        //     console.log('lan')
        // }

    }, [values, setValues]);

    return(
        <>
            <input type="number" className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name={InputName} placeholder={`Insert Data ${InputName}`} value={values.InputName} onChange={handleInputChange}/>
        </>
    )
}
export default Input