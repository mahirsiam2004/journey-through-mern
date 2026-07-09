import React from 'react'

export const Count = ({count}) => {
  return (
    <div className='p-4 h-40 flex flex-col items-center justify-center bg-white'>
        <div className='text-2xl font-semibold'>
            {count}
        </div>
    </div>
  )
}
