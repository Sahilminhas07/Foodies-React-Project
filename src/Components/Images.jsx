import React from 'react'

function Images(props) {
  return (
    <>
    <div className='h-[300px] w-[500px] mt-5'>
        <img className='h-[300px] w-[500px] rounded-lg' src={props.value} alt="" />
        </div>
    </>
  )
}

export default Images