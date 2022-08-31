import Button from '@/layouts/part/Calculator/Button/Button';
const CalBtn = ({btnAction}) =>{
    return(
        <>
            <div className="flex items-center justify-around flex-wrap">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Button btnAction={btnAction} aksi={'tambah'} icon='+'/>
                        <Button btnAction={btnAction} aksi={'kurang'} icon='-'/>
                        <Button btnAction={btnAction} aksi={'kali'} icon='x'/>
                        <Button btnAction={btnAction} aksi={'bagi'} icon='/'/>
                    </div>
                    <div>
                        <Button btnAction={btnAction} aksi={'clear'} icon='Clear'/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CalBtn