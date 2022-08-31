
import Input from '@/layouts/part/Calculator/Input/Input';

const CalInput = ({values, setValues, opt}) =>{
    return (
        <>
            <div className='flex justify-between'>
                <div className="flex justify-center">
                    <div className="mb-3">
                        <Input values={values} setValues={setValues} opt={opt} InputName={'input1'}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mb-3">
                        <Input values={values} setValues={setValues} opt={opt} InputName={'input2'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalInput