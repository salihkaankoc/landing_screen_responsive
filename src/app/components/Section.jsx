import Image from 'next/image'
import React from 'react'

const Section = () => {
    return (
        <div className='bg-white h-screen justify-between w-full   max-[700px]:w-full '>
            <div className='w-full ml-40 mr-40 items-center pr-40  max-[700px]:w-full max-[700px]:pr-0   max-[700px]:flex-col  max-[700px]:mt-10 justify-between  max-[700px]:m-0 h-full flex'>
                <div className='flex flex-col w-1/2 max-[700px]:m-0 max-[700px]:w-full max-[700px]:items-center max-[700px]:flex-col'>
                    <div className='flex max-[700px]:justify-center items-start w-4/5'>
                    <h1 className='text-4xl max-[700px]:w-full w-4/5 font-bold font-primary'>Ödemelerinizi ve transferlerinizi kolaylaştırıyoruz.</h1>
                    </div>
                    
                    <div className='flex max-[700px]:justify-center items-start w-4/5'>
                        <h2 className='mt-8 text-slate-500 text-2xl  font-primary'>Tüm ödeme yöntemlerinizi kolayca bağlayın ve tek bir yerden yönetin.</h2>
                    </div>
                    <div className='flex max-[700px]:w-full max-[700px]:justify-center w-4/5 mt-8 items-start'>
                        <div className='bg-[#8cf3e2]  cursor-pointer flex justify-center items-center rounded-2xl w-72 h-10'>
                            <h1 className='text-white '>Hadi Başlayalım</h1>
                        </div>
                    </div>
                </div>
                <div className='w-1/2  max-[700px]:h-[300px] max-[700px]:w-full max-[700px]:mt-10'>
                    <Image height={700} width={700} src={"/payment.jpg"} />
                </div>

            </div>

        </div>
    )
}

export default Section