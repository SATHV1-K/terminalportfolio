import { useState, useRef, useEffect } from 'react'
import './App.css'
import ParticleBackground from './ParticleBackground'

function App() {
  const [terminalOutput, setTerminalOutput] = useState([])
  const [currentInput, setCurrentInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  const asciiArt = `
   _________       __  .__         .__ __          ____.                __  .__ 
  /   _____/____ _/  |_|  |_____  _|__|  | __     |    |____    _______/  |_|__| 
  \\_____  \\\\__  \\\\   __\\  |  \\  \\/ /  |  |/ /     |    \\__  \\  /  ___/\\   __\\  | 
  /        \\/ __ \\|  | |   Y  \\   /|  |    <  /\\__|    |/ __ \\_\\___ \\  |  | |  | 
 /_______  (____  /__| |___|  /\\_/ |__|__|_ \\ \\________(____  /____  > |__| |__| 
         \\/     \\/          \\/             \\/               \\/     \\/`

  const initialGreeting = [
    { type: 'ascii', content: asciiArt },
    { type: 'info', content: 'Software Developer | Building AI-Powered Enterprise Solutions | Java • Spring • React • AWS • Database• AI/ML | 2+ Years' },
    { type: 'welcome', content: "" },
    { type: 'welcome', content: "Welcome to Sathvik Jasti's Portfolio Terminal" },
    { type: 'help', content: "Type 'help' to see available commands." }
  ]

  useEffect(() => {
    setTerminalOutput(initialGreeting)
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalOutput])

  const commands = {
    help: () => `Available commands:
about or a              - Learn about me
experience or exp       - My work experience
skills or s             - See my technical skills
projects or p           - View my projects
education or edu        - My educational background
contact or c            - How to reach me
clear                   - Clear the terminal`,
    about: () => `👋 About Me

I'm a Software Developer with experience building production ready systems that blend AI, data, and full stack engineering to solve real business problems. At Orbit Analytics, I engineer Java Spring Boot REST APIs, integrate Hugging Face LLMs for data summarization and natural language querying, and deploy models on AWS SageMaker and Docker to improve performance, reliability, and delivery speed.

Previously, as a Research Assistant at Florida Institute of Technology, I built full stack applications with React and Node.js, incorporating RAG based LLM features to make complex NASA standards interactive and searchable, while automating deployments on Google Cloud Run.

I've also shipped freelance solutions, including a full stack dance studio management platform with React, TypeScript, Node.js, PostgreSQL, and third party integrations (Square, Twilio, Resend), as well as data automation pipelines that eliminate hours of manual work and improve data quality for solar energy forecasting.

My core toolkit includes Java, Python, JavaScript/TypeScript, React, Node.js, PostgreSQL, AWS, GCP, and Docker, and I enjoy collaborating in Agile teams to design scalable architectures, optimize data workflows, and deliver clear, measurable impact.

📊 2+ Years Experience | 1+ Years of AI/ML | 15+ Technologies Mastered`,
    experience: () => `💼 Work Experience:

Full-Stack Developer | Orbit Analytics, Atlanta, GA
May 2024 - Present

• Developed backend services for analytics platform using Java 8-17, Spring Boot, and Hibernate, implementing Kafka messaging for event-driven architecture while optimizing Oracle database queries and Redis caching to improve API response times and reduce system latency.
• Built RESTful APIs and responsive web components using Spring MVC and React.js, working with stakeholders to translate functional requirements into technical implementations for financial reporting features.
• Assisted in integrating Hugging Face LLM models via API endpoints in Spring Boot to enable natural language summarization of financial reports, collaborating with the team to fine-tune prompts for accurate insights from structured data.
• Supported production environment by troubleshooting database issues, refactoring Oracle PL/SQL stored procedures, and implementing performance improvements to reduce recurring errors and system bottlenecks.
• Collaborated with senior developers to integrate third-party APIs into existing J2EE application, implementing error handling and retry logic while containerizing services with Docker for AWS EC2 deployment.
• Contributed to establishing automated testing framework using JUnit and Mockito, writing unit and integration tests to improve code quality and streamline CI/CD pipeline with Jenkins.

--------------

Research Assistant | Florida Institute of Technology, Melbourne, FL
Aug 2023 - May 2024

• Designed and built full-stack web application using React.js, Node.js, and Google Cloud SQL backend, implementing RESTful APIs to serve research content to faculty and students.
• Built full stack applications with React and Node.js, incorporating RAG based LLM features to make complex NASA standards interactive and searchable.
• Containerized backend services with Docker and deployed on Google Cloud Run, setting up CI/CD pipeline with Cloud Build to enable faster and more reliable deployments.
• Integrated Dialogflow CX chatbot with a RAG pipeline to allow authorized users to query confidential research documents, using vector embeddings for secure retrieval and role-based access control.
• Implemented authentication system with JWT tokens and role-based access control, ensuring secure access to research data and meeting university security standards.`,
    skills: () => `💻 Technical Skills:

Languages & Frameworks: Java (8-17), J2EE (Servlets, JSP, JDBC), Spring Framework, Spring Boot, Spring MVC, Spring Data JPA, Spring Security, Apache Kafka, Hibernate ORM, Python, JavaScript (ES6+), TypeScript, React.js, Node.js/Express, Redux, Vite

Database Technologies: Oracle Database, Oracle SQL (Stored Procedures, Packages, Functions), MySQL, PostgreSQL, MongoDB, Redis, AWS DynamoDB, Google Cloud SQL, Supabase, Vector Database

Web Technologies: RESTful APIs, Microservices Architecture, Responsive Web Design, HTML5, CSS3, JSON, XML

Cloud & DevOps: AWS (EC2, S3, RDS, Lambda), Google Cloud Platform, Cloud Run, Cloud Functions, Pub/Sub, Cloud Build, Docker, Jenkins, CI/CD Pipelines, Terraform, Git/GitHub, Maven, Railway

AI/ML: Hugging Face Transformers, RAG Pipelines, TF-IDF, BERT, Scikit-learn, Embeddings (Sentence Transformers), XG Boost, Random Forest

Development Practices: SDLC (Agile/Scrum), Requirements Analysis, Software Design, Test-Driven Development (JUnit, Mockito), Production Support, Performance Optimization, Stakeholder Management, Client Interfacing

Tools: JIRA, Postman, Swagger/OpenAPI, IntelliJ IDEA, Eclipse, SQL Developer, Dialogflow CX, Firebase, Hugging Face Hub, Square API, Resend, Twilio`,
    projects: () => {
      return (
        <div>
          🚀 Featured Projects:
          <br /><br />
          1. Full-Stack File Storage Application
          <br />
          • Built secure cloud-based file storage system with user authentication
          <br />
          • Implemented file upload, download, and sharing functionality
          <br />
          • Features include folder organization, file versioning, and access control
          <br />
          • Tech Stack: Java, Spring Boot, React.js, AWS S3, MySQL, JWT
          <br /><br />
          2. Movie Database App
          <br />
          • Developed comprehensive movie database with search and filtering capabilities
          <br />
          • Integrated with external APIs for real-time movie data and ratings
          <br />
          • Implemented user reviews, watchlists, and recommendation system
          <br />
          • Tech Stack: React.js, Node.js, Express.js, MongoDB, TMDB API
          <br /><br />
          GitHub: <a href="https://github.com/SATHV1-K" className="clickable-link" target="_blank" rel="noopener noreferrer">github.com/SATHV1-K</a>
        </div>
      )
    },
    education: () => `🎓 Education:

Master of Computer Information Systems
Florida Institute of Technology, Melbourne, FL

-----------------------------

Bachelor of Technology in Artificial Intelligence
Vidya Jyothi Institute of Technology, India`,
    contact: () => {
      return (
        <div>
          📬 Get In Touch:
          <br /><br />
          Email: <a href="mailto:sathvikjasti27@gmail.com" className="clickable-link" target="_blank" rel="noopener noreferrer">sathvikjasti27@gmail.com</a>
          <br />
          Phone: <a href="tel:+14708715249" className="clickable-link">+1(470) 871-5249</a>
          <br />
          LinkedIn: <a href="https://www.linkedin.com/in/sathvikj/" className="clickable-link" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/sathvikj/</a>
        </div>
      )
    },

    clear: () => {
      setTerminalOutput([])
      return null
    },
    
    // Command aliases
    a: function() { return this.about() },
    exp: function() { return this.experience() },
    s: function() { return this.skills() },
    p: function() { return this.projects() },
    edu: function() { return this.education() },
    c: function() { return this.contact() }
  }

  const handleCommand = async (cmd) => {
    const command = cmd.trim().toLowerCase()
    
    if (command === 'clear') {
      setTerminalOutput([])
      setCommandHistory(prev => [...prev, cmd])
      setHistoryIndex(-1)
      return
    }
    
    const newOutput = [...terminalOutput, { type: 'command', content: `sathv@portfolio:~$ ${cmd}` }]
    
    if (commands[command]) {
      const result = await commands[command]()
      if (result) {
        newOutput.push({ type: 'output', content: result, isJSX: typeof result === 'object' })
      }
    } else if (command) {
      newOutput.push({ type: 'error', content: `bash: ${command}: command not found` })
      newOutput.push({ type: 'help', content: "Type 'help' to see available commands." })
    }
    
    setTerminalOutput(newOutput)
    setCommandHistory(prev => [...prev, cmd])
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput)
      setCurrentInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentInput('')
        } else {
          setHistoryIndex(newIndex)
          setCurrentInput(commandHistory[newIndex])
        }
      }
    }
  }

  const HeaderCommand = ({ command, children }) => {
    const [showTooltip, setShowTooltip] = useState(false)
    
    const getTooltipText = (cmd) => {
      const tooltips = {
        about: 'Please type "about" or "a" in the terminal',
        experience: 'Please type "experience" or "exp" in the terminal',
        skills: 'Please type "skills" or "s" in the terminal',
        projects: 'Please type "projects" or "p" in the terminal',
        education: 'Please type "education" or "edu" in the terminal',
        contact: 'Please type "contact" or "c" in the terminal',
        clear: 'Please type "clear" in the terminal'
      }
      return tooltips[cmd] || `Please type "${cmd}" in the terminal`
    }
    
    return (
      <span 
        className="header-command"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
        {showTooltip && (
          <div className="tooltip">
            {getTooltipText(command)}
          </div>
        )}
      </span>
    )
  }

  return (
    <div className="app">
      <ParticleBackground />
      <div className="container">
        <div className="left-panel">
          <div className="profile-card">
            <div className="profile-card-background">
              <div className="profile-card-gradient"></div>
            </div>
            <div className="profile-card-content">
              <div className="profile-avatar-container">
                <img src="/terminalportfolio/SathJasti_Image.jpg" alt="Sath Jasti" className="profile-avatar" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="header">
            <HeaderCommand command="about">about</HeaderCommand>
            <span className="separator"> | </span>
            <HeaderCommand command="experience">experience</HeaderCommand>
            <span className="separator"> | </span>
            <HeaderCommand command="skills">skills</HeaderCommand>
            <span className="separator"> | </span>
            <HeaderCommand command="projects">projects</HeaderCommand>
            <span className="separator"> | </span>
            <HeaderCommand command="education">education</HeaderCommand>
            <span className="separator"> | </span>
            <HeaderCommand command="contact">contact</HeaderCommand>
            <span className="separator"> | </span>
            <HeaderCommand command="clear">clear</HeaderCommand>
          </div>
          <div className="terminal" ref={terminalRef}>
            {terminalOutput.map((line, index) => (
              <div key={index} className={`terminal-line ${line.type}`}>
                {line.type === 'ascii' ? (
                  <pre className="ascii-art">{line.content}</pre>
                ) : line.isJSX ? (
                  <div>{line.content}</div>
                ) : (
                  <pre>{line.content}</pre>
                )}
              </div>
            ))}
            <div className="input-line">
            <span className="prompt-symbol">sathv@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoFocus
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
