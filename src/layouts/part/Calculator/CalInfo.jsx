const CalInfo = ({ values, opt, hasil}) => {
    return (
        <>
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
                            <td className="border-solid border-2 border-slate-100 h-12 font-semibold text-3xl">{values.input1}</td>
                            <td className="border-solid border-2 border-slate-100 h-12 font-semibold text-3xl">{opt}</td>
                            <td className="border-solid border-2 border-slate-100 h-12 font-semibold text-3xl">{values.input2}</td>

                        </tr>
                        <tr>
                            <td colSpan={3} className="border-solid border-2 border-slate-100 h-20 text-4xl font-bold text-emerald-700" >{hasil}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CalInfo