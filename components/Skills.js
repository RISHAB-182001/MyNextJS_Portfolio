import codeThinking from './../Image/codeThinking.png'
import Image from 'next/image'
const listTitleStyle = { fontWeight: 900, color:'white', marginBottom:'4px'}


const backendSkills =
    <ul>
        <li style = {listTitleStyle}>BACKEND</li>
        <li>Java-Mongo DB-Express JS-Node JS-Postgres</li>
    </ul>

const frontendSkills =
    <ul>
        <li style = {listTitleStyle}>FRONTEND</li>
        <li>HTML-CSS-JavaScript-React JS-Next JS-TailwindCSS-TypeScript</li>
    </ul>

//Storing all the Skills in an Array-we can use const or let
const totalSkills= [backendSkills, frontendSkills]

//Place valid JavaScript codes inside JSX between curly braces as shown in lines 33-35
const Skills = () => {
    return ( 
        <div className="Skills flex justify-center mb-20">
            <h1 title={'What about the Skills?'}></h1>

            <div className="Container flex justify-between w-full sm:px-20 xl:px-64">
                
                {totalSkills.map(skills => {
                    return(
                        <div className="List">
                            {skills}
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Skills;