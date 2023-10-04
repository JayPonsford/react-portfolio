import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout();
        }
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1q8c2vc', 'template_7jfszuq', form.current, 'ih4zIcCEzYtUlL7C6')
        .then((result) => {
            alert("Your email has been sent successfully!")
            window.location.reload(false)
        }, (error) => {
            alert("This email has unfortunately not been successful.")
        });
    };
  

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        index={15}/>
                    </h1>
                    <p>For any opportunities, please contact me using the form below and thank you for stopping by 😊
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                 </div>
                </div>
            <Loader type="pacman"/>
        </>
    )

}

export default Contact
