import React from 'react'
import { useForm } from "react-hook-form"

const Creatjob = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
       // console.log(data);
       fetch("http://localhost:3000/all-jobs")
    };


    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            {/* form */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col lg:flex-row items-center'>

                    </div>

                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Creatjob