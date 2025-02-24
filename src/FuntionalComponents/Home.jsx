import { useNavigate } from "react-router-dom";
import "../Css/Home.css"
import example from "../assets/profile.svg"


const Home=({onScroll})=>{
    
    return (
      <div className="home">
        <h1>Hi,I Am RNS ANEESH</h1>
        <div>
          <img
            src={example}
            alt="placeholder"
            style={{
              width: "300px",
              float: "right",
              marginTop: "-60px",
              zIndex: "2",
              
            }}
          />
        </div>
        <p>
          Welcome to my  portfolio! I am a  passionate
          student currently pursuing a B.E in Computer Science  and
          Engineering at St Joseph's Institute of Technology, Chennai. My academic journey
          has been driven by a profound interest in the transformative power of
          CyberSecurity and data-driven technologies. Through rigorous coursework and
          hands-on projects, I have honed my skills in CyberSecurity and Data Engineering,
          including server Side Handling, Backend Engineering, and Foundations of Machine Learning. I am
          committed to leveraging these skills to create innovative solutions
          that address real-world challenges. Explore my portfolio to learn more
          about my projects, skills, and the impact I aim to make in the field
          of CyberSecurity.
        </p>
        <button onClick={onScroll} style={{ marginTop: "20px",backgroundColor:"transparent",color:"whitesmoke",border:"1px solid white" }} className="btn">
          Contact Me
        </button>
      </div>
    );
}
export default Home;