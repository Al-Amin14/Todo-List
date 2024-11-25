import React from 'react'

const navbar = () => {
  return (
    <div className="navbar_head bg-violet-600 text-white">
        <div className='p-4 navbar_card flex justify-around items-center'>
        <div className='card font-bold text-xl font-bold text-lg border rounded-xl border-2 px-6' >iTask</div>
        <div className='card' >
                <ul className='flex gap-9'>
                    <li className='px-6 font-bold text-lg hover:text-gray-800 hover:text-xl transition-all border rounded-xl border-2'>Home</li>
                    <li className='px-6 font-bold text-lg hover:text-gray-800 hover:text-xl transition-all border rounded-xl border-2'>Your Tasks</li>
                </ul>
            </div> 
        </div>
    </div>
  )
}

export default navbar
 