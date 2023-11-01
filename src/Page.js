import { Button } from '@cred/neopop-web/lib/components';
// script.js
import "nes.css/css/nes.min.css";
import './Page.css';
// style.scss

const Page = () => {
    const downloadResume = () =>{
       
        const filePath = '/resumeAthith.pdf'; // Adjust the path to match your file

        // Create an anchor element
        const a = document.createElement('a');
        a.href = filePath; // Use process.env.PUBLIC_URL to access the public directory
        a.download = 'resumeAthith.pdf'; // Set the desired filename
        a.style.display = 'none';
        document.body.appendChild(a);
    
        // Click the anchor element to initiate the download
        a.click();
    
        // Clean up
        document.body.removeChild(a);
    }
    return (
        <div>
            <div>
                <h1>hello there!</h1>
            </div>
            <div class="nes-container with-title ">
                <p class="title">About</p>
                <p>To my corner of the internet, you have come! A passionate software engineer, I am. On a perpetual journey to explore the boundless realms of code, I am. With a keen eye for elegant solutions and a heart that beats to the rhythm of algorithms, I am here to share my adventures in the world of technology and software development.
                </p>
                <p>
                A full stack developer, I am. Skills in React, .NET, SQL, I possess. Code, I write, front-end and back-end, for you. Complex systems, I can build, and databases, I can wield. In the digital realm, a Jedi of development, I strive to be. Ask, you may, and answers, I shall provide. Hmmmm.
                </p>
            
                <div class="nes-container with-title">
                    <p class="title">Work</p>
                    <div class="nes-container is-rounded is-dark">
                    <p class="title">2022 to present</p>
                    <p>Senior Software Engineer - Visa Inc</p>
                    <p>"At Visa Inc, part of Client Services Product Development team, I am. Worked on various projects, we have, including Emergency Card Printing and Dispute services, we did."</p>
                    </div>
                    <div class="nes-container is-rounded is-dark">
                    <p class="title">2019 to 2022</p>
                    <p>Software Engineer - Tata Consultancy Services</p>
                    <p>"At TCS, with a major Market research company, NielsenIQ, I worked. Part of a team, I was, that developed a Global Tool for products promotion update used by market research analysts across the world with around 20+ countries spread across APAC,LATAM,EMEA"</p>
                    </div>
                
                </div>
            </div>
            
            <p></p>
            <div class="nes-container with-title ">
                <p class="title">Contact</p>
                <div>
                <section class="icon-list" style={{marginLeft:"5px"}}>
                    <a href="https://github.com/funkill-gk" target="_blank"><i class="nes-icon github is-medium" ></i></a>
                    <a style={{marginLeft:"50px"}} href="mailto:athithyafied@outlook.com" target="_blank"><i class="nes-icon gmail is-medium"></i></a>
                    <a style={{marginLeft:"50px"}} href="https://www.linkedin.com/in/athithgk/" target="_blank"><i class="nes-icon linkedin is-medium"></i></a>
                </section>
                </div>
            </div>
            <div className="center-div" > 
                <button type="button" class="nes-btn is-primary" onClick={downloadResume}>Download Resume</button>
            </div>
            <div className="center-div">
            
                Still more to Come. Stay Tuned!
            
            </div>
            
        </div>
        
    );
};

export default Page;