import cppLogo from '../assets/cpp.svg';
import pythonLogo from '../assets/python.svg';
import javaLogo from '../assets/java.svg';
import cLogo from '../assets/C.svg';
import sqlLogo from '../assets/database.svg';
import "../Css/About.css";

const About =()=>{
    const techStack = [
        { name: 'C++', img: cppLogo },
        { name: 'Python', img: pythonLogo },
        { name: 'Java', img: javaLogo },
        { name: 'C', img: cLogo },
        { name: 'SQL', img: sqlLogo },
      ];
    return (  
      <div style={{ marginTop: "40px",placeItems:"center",marginLeft:"20px" }}>
        <h1 style={{marginBottom :"20px" }}>About Me</h1>
        <p>
          Hi I am RNS Aneesh. I am an aspiring Cyber Enthusiast and Data Engineering
          professional . My
          passion for technology and problem-solving has led me to specialize in
         Cyber Security , where I thrive in challenging environments that
          push me to think creatively. With a strong analytical mindset and
          expertise in C++, Python, JAVA, SQL, and machine learning frameworks
          like TensorFlow and PyTorch, I have engaged in diverse projects, like
          creating predictive models in the field of Cyber . My academic and hands-on experiences have
          equipped me with the skills to drive meaningful insights and
          innovation. Thank you for visiting my portfolio. I look forward to
          connecting with professionals and exploring opportunities.
        </p>
        <h1 className="title">My Tech Stack</h1>
<div className="grid" style={{ display: "grid" }}>
  {techStack.map((tech, index) => (
    <div key={index} className="card">
      <img src={tech.img} alt={tech.name} className="tech-logo" style={{width: "50px" , height:"50px"}} />
      <p>{tech.name}</p>
    </div>
  ))}
</div>
      </div>
    );
}
export default About