import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../../stylesheets/pages/Contact.css';
//Toast Containers
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    const form = useRef();
    const notify = () => toast("Done. Soon an agent will reach you out.");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vh5el58', 'template_eynh23s', form.current, {
        publicKey: '-IYhzhBFqMNO2CUuO',
      })
      .then(
        () => {
          notify();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (<>
          <div class="row section bg contact">
            <div className='contact'>
            <h3>CONTACT</h3>
            <h4>Have any questions? Send us your contact info to solve them</h4>
            </div>
            
              <div className='form'>
                <form ref={form} onSubmit={sendEmail} class="contact-form">
                    <div class="form-row">
                        <label for="name">Name </label><br/>
                        <input type="text" name="user_name" id="name" placeholder="John" required/>
                    </div>
                    <div class="form-row">
                        <label for="name">Last name </label><br/>
                        <input type="text" name="last-name" id="name" placeholder="Doe" required/>
                    </div>
                    <div class="form-row">
                        <label for="name">Phone </label><br/>
                        <input type="text" name="phone-number" id="name" placeholder="+12348763227" required/>
                    </div>
                    <div class="form-row">
                        <label for="email">Mail </label><br/>
                        <input type="email" name="user_email" id="email" placeholder="johndoe@somemail.com" required/>
                    </div>
                    <div class="form-row">
                        <input class="submit" type="submit" value="Send"/>
                    </div>
                </form>
              </div>  
            
        </div>
      <ToastContainer position='top-center' theme='colored'/>
  </>)
}
