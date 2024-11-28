import { useRef } from 'react';
import './Contactform.css'

import emailjs from '@emailjs/browser';
 const Contactform = ()=>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_cpjizmr', 'template_swlkpmj', form.current, {
          publicKey: 'wuvIlXVgX7zsIo1Lm',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return(
        <>
        <div  className="contact-form-content">
            <form id='contact' ref={form} onSubmit={sendEmail}>
                <div className="contact-form-container">
                    <input type="text" name="to_name" placeholder="First Name"/>
                   
                </div>
                <input type="email" name="to_email" placeholder="Email"/>
                <textarea type="text" name="message" placeholder="Message" rows={10}/>

                <button>SEND</button>
            </form>
        </div>
        
        
        
        
        </>
    )
 }
 export default Contactform