import React from 'react'

const InputRadioList = ({ id, name, value, labelContent, onChange}) => {
    return (
        <div className='flex w-full'>
            <div className='w-6 min-w-6'>
                <input id={id} name={name} type='radio' onChange={onChange} value={value} />
            </div>
            <div className='min-w-[calc(100%_-_1.5rem)]'>
                <label htmlFor={id} className='cursor-pointer'>{labelContent}</label>
            </div>
        </div>
    )
}

export default InputRadioList