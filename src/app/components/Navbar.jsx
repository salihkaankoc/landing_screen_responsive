import React from 'react'

const Navbar = () => {
    return (
        <div id='navbar' className='bg-white w-full h-24 flex items-center'>
            <div className='flex w-full justify-between max-[700px]:w-full max-[700px]:ml-2 max-[700px]:flex max-[700px]:mr-2 max-[700px]:justify-center ml-40 mr-40'>
                <div className='flex w-full justify-between max-[700px]:justify-between '>
                    <div className='flex'>
                        <div className='text-[#8cf3e2] text-5xl font-extrabold'>logo</div>
                        <div className='flex max-[700px]:hidden items-center justify-between w-96 ml-10'>
                            <h2 className='cursor-pointer font-primary hover:text-[#8cf3e2] hover:font-bold'>Ana Sayfa</h2>
                            <h2 className='cursor-pointer font-primary hover:text-[#8cf3e2] hover:font-bold'>Hakkımızda</h2>
                            <h2 className='cursor-pointer font-primary hover:text-[#8cf3e2] hover:font-bold'>İletişim</h2>
                            <h2 className='cursor-pointer font-primary hover:text-[#8cf3e2] hover:font-bold'>Fiyatlandırma</h2>
                        </div>
                    </div>
                    <div className='flex max-[700px]:hidden items-center justify-between w-60'>
                        <h2 className='cursor-pointer font-primary hover:text-[#8cf3e2] hover:font-bold'>Giriş Yap</h2>
                        <div className='bg-[#8cf3e2] cursor-pointer flex items-center w-36 h-12 rounded-md justify-center'>
                            <h2 className='text-white font-primary'>Kayıt Ol</h2>
                        </div>
                    </div>
                    <div className='flex flex-col cursor-pointer lg:hidden '>
                        <div className='rounded-md h-1 w-7 bg-black'></div>
                        <div className='rounded-md h-1 mt-1 w-7 bg-black'></div>
                        <div className='rounded-md h-1 mt-1 w-7 bg-black'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar