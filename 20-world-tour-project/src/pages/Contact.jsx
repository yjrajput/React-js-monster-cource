import React from 'react'
import { Form } from 'react-router-dom';


export const contactData = async ({request}) =>{
  try{
      const res = await request.formData();
      const data =  Object.fromEntries(res);
      console.log(data)
  }catch(error){
    console.log(error)
  }
      
}
const Contact = () => {
  return (
    <div className='contact-section'>
      <div className='container contact-container'>
          <div className='contact-heading'>
              <h3 className='heading'>Contact us</h3>
          </div>

          
              <Form method='POST' action='/contact'>
                <input name='name' id='name' type="text" placeholder='Enter your name' />
                <input name='email' id='email' type="mail" placeholder='Enter your mail' />

                <textarea name='message' id='message' rows={10} type='text'placeholder='Enter your message' />

                <div className='btn-container'>
                  <button>Submit</button>
                </div>
              </Form>
    
      </div>
    </div>
  )
}

export default Contact