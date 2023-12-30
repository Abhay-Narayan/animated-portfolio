import { Backend_skill, Frontend_skill, Other_skill } from './index1'
import Skilldataprovider from './skilldataprovider'
import './skills.scss'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className="skills"  >
        <div className="stars"></div>
        <h1 className='heading'>Making Apps with modern Technologies</h1>
        <div className='skillsection'>
          {Frontend_skill.map((image,index)=>(
            <Skilldataprovider 
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>
        <div className='skillsection'>
          {Backend_skill.map((image,index)=>(
            <Skilldataprovider 
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>
        <div className='skillsection'>
          {Other_skill.map((image,index)=>(
            <Skilldataprovider 
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            />
          ))}
        </div>
    </div>
  )
}

export default Skills