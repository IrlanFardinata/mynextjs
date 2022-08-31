
const CalInput = ({values, setValues}) =>{

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setValues({...values, [name]:value,})

    }
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