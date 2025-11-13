import {Form} from 'react-router-dom'

export const contactdata = async ({request}) =>{
  try{
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data)

    return null
  }catch(error){
    console.log(error)
  }
}

const Contact = () => {
  return (
    <div className='container'>
      <div className='grid-container'>
        <div className='form-container'>
          <div className='header-container'>
            <h1>Contact US</h1>
            <p>Get in touch we are always here to help you.</p>
          </div>
          <Form method='POST' action='/contact'>
            <label htmlFor="name">Full Name
              <input id='name' name='name' type="text" placeholder='Enter full name'/>
            </label>
            <label htmlFor="address">Email Address
              <input id='email' name='email' type="email" placeholder='xyz@gmial.com'/>
            </label>
            <label htmlFor="address">Email Address
              <textarea id='text' name='text' type="text" rows={6} placeholder='We are always here to help you'/>
            </label>
            <div>
            <button className='send-message-bnt'>Send Message</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Contact