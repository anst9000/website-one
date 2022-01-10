import "./Form.css";

export const Form = () => {
  return (
    <form action="POST" data-netlify="true">
      <label htmlFor="name">Your Name</label>
      <input type='text' name="name" id="name" placeholder="Name"></input>

      <label htmlFor="email">Email</label>
      <input type='email' name="email" id="email" placeholder="Email"></input>

      <label htmlFor="subject">Subject</label>
      <input type='text' name="subject" id="subject" placeholder="Subject"></input>

      <label htmlFor="message">Details</label>
      <textarea rows='6' name="message" id="message" placeholder='Type a short message here' />

      <div data-netlify-recaptcha="true"></div>
      <input className='btn' type="submit" value="Submit" />
    </form>
  )
}