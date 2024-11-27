import React from 'react'

const navbar = () => {
  return (
    <div className="navbar_head bg-violet-800 text-white">
        <div className='p-4 navbar_card flex justify-around items-center'>
        <div className='max-[720px]:text-sm max-[720px]:px-2 card font-bold text-xl font-bold text-lg border rounded-xl border-2 px-6' >iTask</div>
        <div className='card ' >
                <ul className='flex gap-9 max-[720px]:gap-2'>
                    <li className='max-[720px]:text-sm max-[720px]:px-2 px-6 font-bold text-lg hover:text-gray-800 hover:text-xl transition-all border rounded-xl border-2'>Home</li>
                    <li className='max-[720px]:text-sm max-[720px]:px-2 px-6 font-bold text-lg hover:text-gray-800 hover:text-xl transition-all border rounded-xl border-2'>Your Tasks</li>
                </ul>
            </div> 
        </div>
    </div>
  )
}

export default navbar
 