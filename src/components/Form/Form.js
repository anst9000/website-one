import "./Form.css";
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

export const Form = () => {
  return (
    <form method='POST' action="/thanks" name='contactform' className='contactForm'>
      <div className="form-field">
        <input type='hidden' name='form-name' value='contactForm' />
      </div>

      <div className="form-field">
        <label htmlFor="name" />
        <input type='text' name='name' placeholder='Enter your name' />
      </div>

      <div className="form-field">
        <label htmlFor="email" />
        <input type='email' name='email' placeholder='Enter your email' />
      </div>

      <div className="form-field">
        <label htmlFor="message" />
        <textarea name='message' placeholder='Type your message here...'></textarea>
      </div>

      <div className="form-field">
        <button className="btn" type='submit'>Submit</button>
      </div>
    </form>
  )
}