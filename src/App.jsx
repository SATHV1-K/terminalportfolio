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
 _____       _   _         ___           _   _ 
/  ___|     | | | |       |_  |         | | (_) 
\\ \`--.  __ _| |_| |__       | | __ _ ___| |_ _ 
\`--. \\/ _\` | __| '_ \\      | |/ _\` / __| __| | 
/\\__/ / (_| | |_| | | | /\\__/ / (_| \\__ \\ |_| | 
\\____/ \\__,_|\\__|_| |_| \\____/ \\__,_|___/\\__|_|`

  const initialGreeting = [
    { type: 'ascii', content: asciiArt },
    { type: 'info', content: 'Full-Stack Developer | Building AI-Powered Enterprise Solutions | Java • Spring • React • Machine Learning | 6+ Years' },
    { type: 'welcome', content: "" },
    { type: 'welcome', content: "Welcome to Sath Jasti's Portfolio Terminal" },
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
    about: () => `👋 Hello! 
I'm a Full-Stack Java Developer with over 6 years of experience specializing in enterprise-grade applications, AI/ML integration, and robust cloud infrastructure.

Background:

Expert Full-Stack Java Developer:
  - Proven ability to build scalable web applications using Spring Boot, Spring MVC, Spring Security, and microservices architecture.

AI/ML Integration Specialist:
  - Experienced in integrating AI/ML models for predictive analytics, real-time decision-making, and enhanced user insights, including supervised learning algorithms and cloud model deployment.

Cloud & DevOps Enthusiast:
  - Extensive experience with AWS (EC2, S3, RDS, Lambda, SageMaker) and serverless architectures, coupled with strong DevOps practices including CI/CD pipelines and Docker.

Database & Data Streaming Pro:
  - Proficient with both SQL (Oracle, MySQL) and NoSQL (MongoDB, DynamoDB) databases, and skilled in real-time data processing using Apache Kafka and Redis.

Modern UI/UX Developer:
  - Proficient in React.js, Redux, HTML5, CSS3, and JavaScript ES6+ for creating responsive and engaging user interfaces.

Feel free to explore my projects, skills, or contact me to learn more!`,
    experience: () => `💼 Professional Experience:

Software Developer, MICOR Industries, Melbourne, FL
Jul 2024 - Present
- Engineered a full-stack manufacturing execution system using Java 17, Spring Boot, and React.js, optimizing business logic with multithreading and enhancing UI with Redux and ES6+ features.
- Developed an intelligent production scheduling module using XGBoost and Random Forest algorithms, managing and deploying models on AWS SageMaker with A/B testing to improve manufacturing efficiency.
- Architected a scalable, event-driven microservices system using Apache Kafka and Redis caching, applying design patterns (MVC, Singleton, DTO) and securing RESTful/GraphQL APIs with OAuth 2.0.
- Managed robust data persistence and retrieval across Oracle Database and MongoDB using Hibernate/JPA, optimizing complex SQL queries and NoSQL aggregation pipelines for real-time analytics.
- Automated deployment and ensured system consistency by building CI/CD pipelines with Jenkins and AWS CodePipeline, containerizing applications with Docker, and leveraging AWS services (EC2, ECS, RDS, S3).

--------------

Software Developer, Insurance Group of Florida, Inc, Melbourne, FL
Aug 2023 - Jul 2024
- Developed a comprehensive insurance agency management platform using Java 8+, Spring Boot, and React.js with Material-UI, participating actively in the full Agile/Scrum lifecycle.
- Built an AI-powered customer retention system using Python (scikit-learn) deployed on AWS SageMaker and created a real-time analytics dashboard with React/D3.js for intelligent risk assessment.
- Contributed to a microservices architecture using Spring Boot, designing RESTful APIs with Swagger documentation and implementing Redis caching to enhance system responsiveness and service orchestration.
- Engineered the persistence layer using Hibernate/JPA with MySQL and integrated MongoDB and DynamoDB to manage unstructured customer data and track real-time interactions.
- Deployed and monitored scalable applications on AWS (EC2, RDS, S3, Lambda), utilizing GIT for version control and maintaining high code quality through rigorous peer reviews.

--------------

Software Developer, Apollo Hospitals, Hyderabad
Aug 2021 - Jul 2023
- Developed and maintained a secure, full-stack hospital management system using Java 8+, Spring Framework, and React.js with Redux for state management in an Agile/Scrum environment.
- Implemented an AI-driven diagnostic support system using Python (TensorFlow) and deployed models on AWS SageMaker for real-time patient risk assessment, with automated alerts via SNS.
- Architected the healthcare application using J2EE design patterns, developed RESTful API clients for third-party system integration, and implemented Redis caching to reduce data access latency.
- Managed data persistence using Hibernate/JPA with Oracle Database for patient records and MongoDB for medical documents, ensuring HIPAA compliance through comprehensive Log4j auditing.
- Deployed the application suite across AWS services including EC2, RDS, S3 for storage, and Lambda for automated report generation, ensuring high availability and scalability.

--------------

Software Developer, The New India Assurance Company Limited, Hyderabad
Jun 2019 - Aug 2021
- Developed a responsive online insurance platform using Java 8, Spring MVC/Security, and React.js, implementing core Java concepts like multithreading to optimize performance.
- Engineered an intelligent underwriting automation system using machine learning and a real-time fraud detection model, deploying them on AWS and storing results in DynamoDB.
- Designed and developed RESTful web services for seamless data exchange between front-end and back-end systems, implementing Redis caching to improve performance for frequently accessed policy data.
- Managed database architecture using Hibernate/JPA with an Oracle Database, integrated MongoDB for policy document storage, and created automated PL/SQL reports using AWS Lambda.
- Leveraged AWS services (S3, CloudWatch, SNS) for storage, monitoring, and notifications within an Agile framework that utilized CI/CD for continuous, reliable deployments.`,
    skills: () => `💻 Technical Skills:

Programming Languages: Java (8, 11, 17), Python, HTML5, CSS3, JavaScript ES6+, SQL

Framework & Libraries: Spring Boot (2.x, 3.x), Spring MVC, Spring Security, Spring Data JPA, Hibernate, React.js, Redux, Node.js, jQuery, Bootstrap, Material-UI

AI/ML Technologies: Machine Learning, Supervised Learning, XGBoost, Random Forest, Linear Regression, Decision Trees, Model Evaluation, Feature Engineering, AI Model Integration, TensorFlow, Scikit-learn, Predictive Analytics, Real-time ML Systems

Web Technologies: RESTful APIs, Microservices, GraphQL, WebSockets, Servlets, JDBC, Swagger/OpenAPI, JSON, XML, OAuth 2.0

Cloud & DevOps: AWS (EC2, S3, RDS, Lambda, SageMaker, CloudWatch, SES, SNS, SQS, API Gateway), Docker, Jenkins, CI/CD, Kubernetes

Tools & Platforms: IntelliJ IDEA, VS Code, GIT, JIRA, Postman, Apache Kafka, JUnit, Mockito, Maven

Databases: Oracle Database, MySQL, MongoDB, DynamoDB, Redis, Database Design, Query Optimization`,
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
          Email: <a href="mailto:sath.jasti@gmail.com" className="clickable-link" target="_blank" rel="noopener noreferrer">sath.jasti@gmail.com</a>
          <br />
          Phone: <a href="tel:+14702903665" className="clickable-link">+1(470) 290-3665</a>
          <br />
          LinkedIn: <a href="https://www.linkedin.com/in/sathvikjasti" className="clickable-link" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/sathvikjasti</a>
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
                <img src="/portfolio/SathJasti_Image.jpg" alt="Sath Jasti" className="profile-avatar" />
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
