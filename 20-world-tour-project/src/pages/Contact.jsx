import React from 'react'


// export const contactData = async ({request}) =>{
//   try{
//       const res = await request.formData();
//       const data =  Object.fromEntries(res);
//       console.log(data)
//   }catch(error){
//     console.log(error)
//   }
      
// }

const Contact = () => {
    const handleOnSubmit = (formdata) =>{
        const formInputData = Object.fromEntries(formdata.entries());
        console.log(formInputData)
    }

  return (
    <div className='contact-section'>
      <div className='container contact-container'>
          <div className='contact-heading'>
              <h3 className='heading'>Contact us</h3>
          </div>

          
              <form  action={handleOnSubmit}>
                <input name='name' id='name' type="text" placeholder='Enter your name' />
                <input name='email' id='email' type="mail" placeholder='Enter your mail' />

                <textarea name='message' id='message' rows={10} type='text'placeholder='Enter your message' />

                <div className='btn-container'>
                  <button type='submit'>Submit</button>
                </div>
              </form>
    
      </div>
    </div>
  )
}

export default Contact