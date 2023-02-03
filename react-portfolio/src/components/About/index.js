import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'me', 'e']}
                    index={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Ut placerat orci nulla pellentesque dignissim enim sit. Malesuada fames ac turpis egestas.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Ut placerat orci nulla pellentesque dignissim enim sit. Malesuada fames ac turpis egestas.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Ut placerat orci nulla pellentesque dignissim enim sit. Malesuada fames ac turpis egestas.</p>
            </div>
        </div>
    )
}

export default About