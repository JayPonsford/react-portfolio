import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJsSquare, faReact, faSalesforce } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout();
        }
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    index={15}
                    />
                </h1>
                <p>Hi, I'm a very ambitious web developer who has a particular interest in the front-end. I am currently looking for a role to both expand on my skill-set as well as bring my own skills and knowledge to your company.</p>
                <p>I'm a tech enthusiast, spending most my days learning about new and emerging technologies as well as staying up to date with Web standards. I believe I've proven very capable of working with clients to not only build relations, but to ensure they are getting the level of service/quality expected as well as being able to suggest ideas to help build/enhance their desired Web platform or Web app.</p>
                <p>Lastly a list of hobbies I currently take part-in:</p>
                <ul>
                    <li>Gaming 🕹️</li>
                    <li>Gym 👟</li>
                    <li>Politics & News 📢</li>
                    <li>Coding 💻</li>
                </ul>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faSalesforce} color="#009EDB" />
                    </div>
                </div>
            </div>            
            </div>
            <Loader type="pacman" />
            </>
    )
}

export default About