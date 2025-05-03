import React from 'react'

const ButtonForm = ({type="",value="",submit}) => {
  return (
    <>
    <div>
         <input 
         type={type}
         value={value}
         onClick={submit}
           />
    </div>
    </>
  )
}

export default ButtonForm
