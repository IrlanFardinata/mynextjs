const CalBtn = (props) =>{
    const btnHandleAction = (e) =>{
        props.btnAction(e)
    }
    return(
        <>
            <div className="flex items-center justify-around flex-wrap">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4"
                         onClick={()=>btnHandleAction({aksi :'tambah', icon: '+'})} >
                            +
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4"
                         onClick={()=>btnHandleAction({aksi:'kurang', icon: '-'})} >
                            -
                        </button>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4"
                            onClick={()=>btnHandleAction({aksi:'kali', icon:'x'})} >
                            *
                        </button>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4"
                            onClick={()=>btnHandleAction({aksi:'bagi', icon:'/'})} >
                            /
                        </button>
    
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4"
                            onClick={()=>btnHandleAction({aksi:'clear'})} >
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CalBtn