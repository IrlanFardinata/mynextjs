const Button = ({btnAction, aksi, icon}) =>{
    const btnHandleAction = (e) =>{
        btnAction({aksi : aksi, icon : icon})
    }

    return(
        <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mr-4" onClick={()=>btnHandleAction()} >{icon}</button>
        </>
    )
}
export default Button