import { useState, useEffect } from 'react';
const initialValues = {
    input1 : Number(0),
    input2 : Number(0)
}
const CalInput = ({setdtInfo, dtAksi}) =>{
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setValues({...values, [name]:value,})

    }
    const Executed = (e) => {
        let dtInput1 = Number(values.input1)
        let dtInput2 = Number(values.input2)
        let hasil = 0
        if(e){
            if(e == 'tambah'){
                hasil = dtInput1 + dtInput2
    
            }else if(e == 'kurang'){
                hasil = dtInput1 - dtInput2
    
            }else if(e == 'kali'){
                hasil = dtInput1 * dtInput2
                
            }else if(e == 'bagi'){
                hasil = dtInput1 / dtInput2

            }else if(e == 'clear'){
                setValues(initialValues)
                setdtInfo({input1 : 0, input2: 0, hasil :0, aksi:"#"})

            }else{
                // default tambah
                hasil = dtInput1 + dtInput2

            }
        }else{
            hasil = dtInput1 + dtInput2
        }
        setdtInfo({input1 : dtInput1, input2: dtInput2, hasil :hasil, aksi:e})
    }

    useEffect(() => {
        Executed(dtAksi)

    }, [setValues,setdtInfo, dtAksi]);


    // console.log(values)
    // console.log(dtAksi)
    return (
        <>
            <div className='flex justify-between'>
                <div className="flex justify-center">
                    <div className="mb-3">
                        <input type="number" className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="input1" name="input1" placeholder="Input Number 1" value={values.input1} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mb-3">
                        <input type="number" className="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="input2" name="input2" placeholder="Input Number 2" value={values.input2} onChange={handleInputChange}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalInput