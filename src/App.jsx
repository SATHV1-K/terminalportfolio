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
    { type: 'info', content: 'ML/AI Engineer | Full-Stack AI Developer | Cloud AI Practitioner | Python • LLMs • RAG • AWS • Spring Boot • React | 4+ Years' },
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

Innovative AI/ML Professional with progressive experience spanning machine learning, full-stack development, and cloud native AI systems. Skilled in architecting end to end ML pipelines across model integration, backend infrastructure, and cloud deployment in AWS, Azure, and GCP ecosystems. Proven expertise in LLM integration, Retrieval Augmented Generation (RAG), intelligent automation, and scalable API design using Python, Java (Spring Boot), and Node.js. Experienced in applying predictive analytics, customer segmentation, NLP, and data driven automation to solve business problems in insurance, FinTech, and enterprise domains.

What drives me as an engineer is the challenge of turning complex data into systems that deliver real, measurable impact. Whether I'm building a RAG powered document intelligence platform, designing ML serving backend infrastructure, or deploying an AI chatbot that saves hours of manual work, my focus is always the same: build reliable, scalable systems that organizations can grow with and that continue to advance long after deployment.

📍 Harrison, NJ | Open to Relocate
📧 sathvikjasti27@gmail.com | 📞 +1 (470) 871-5249

📊 4+ Years Experience | ML/AI Engineer | Full-Stack AI Developer | Cloud AI Practitioner`,
    experience: () => `💼 Work Experience:

AI/ML Platform Engineer | Reliance Surfaces | USA
Feb 2026 – Present | Domain: Manufacturing | Cloud: AWS

• LLM Integration: Architected AI integrated platform features incorporating LLM API endpoints and intelligent content generation pipelines using OpenAI APIs, enabling automated surface material recommendations that reduced manual product consultation time.
• ML Backend: Designed ML informed backend services using Python and Node.js, processing structured and unstructured product catalog data to power predictive analytics dashboards delivering real time business insights.
• Data Pipelines: Built automated data ingestion workflows leveraging AWS Lambda and S3, enabling real time feature extraction from product catalogs for downstream ML model consumption.
• Semantic Search: Implemented intelligent product search modules using vector similarity matching with Pinecone, improving customer product discovery accuracy by ~25%.
Tech Stack: Python, Node.js, OpenAI APIs, LangChain, Pinecone, AWS (Lambda, S3, EC2), React.js, PostgreSQL, Docker, Git

--------------

AI Backend Engineer | Antra, Inc. | Sterling, VA, USA
Jul 2025 – Feb 2026 | Domain: Enterprise Software & AI | Cloud: AWS

• ML Serving Infra: Engineered scalable backend infrastructure using Java (Spring Boot) and Python to support real time model inference endpoints, serving enterprise AI features across multiple microservices.
• Feature Store: Designed and optimized PostgreSQL/MySQL schemas structured as ML feature stores, enabling efficient data retrieval for model training pipelines and reducing query latency by 30%.
• Caching Layer: Implemented Redis based caching for model prediction results and high frequency reads, improving response times by 30% and supporting 99.9% uptime SLA.
• API Architecture: Architected secure RESTful APIs for data exchange between ML microservices and external vendor platforms, ensuring reliable integration with production AI workflows.
• Cloud Ops: Managed AWS (EC2, S3) deployment and monitoring with automated health checks and scaling policies for AI serving workloads.
Tech Stack: Java, Spring Boot, Python, PostgreSQL, MySQL, Redis, AWS (EC2, S3), React.js, Docker, Git, CI/CD

--------------

ML Research Assistant | Florida Institute of Technology | Melbourne, FL, USA
Aug 2023 – May 2025 | Domain: Academic Research | Cloud: AWS

• AI Chatbot: Developed and deployed a custom AI chatbot using Node.js and OpenAI LLM APIs, integrating NLU with automated calendar scheduling based on real time availability, saving the lead professor 5+ hours/week of manual coordination.
• Research Platform: Served as lead developer building a centralized platform managing high impact publications, faculty projects, and digital asset libraries with optimized content retrieval.
• CMS & Performance: Built a custom CMS module with advanced image compression and lazy loading, reducing page load times by 40% for large scale research image portfolios.
• Technical Leadership: Acted as sole technical point of contact, translating academic requirements into production features and delivering comprehensive system documentation for future scalability.
Tech Stack: Node.js, OpenAI APIs, React.js, JavaScript, Python, AWS (S3), MongoDB, Git

--------------

ML Engineer | Orbit Analytics | India
Apr 2022 – Jun 2023 | Domain: Insurance & Risk Analytics | Cloud: GCP, AWS

• Risk Analytics: Developed fraud detection and claims risk assessment models using Scikit-learn, CatBoost, and LightGBM, improving claims adjudication accuracy and supporting data driven underwriting decisions.
• Customer Segmentation: Performed behavioral clustering and customer profiling using K-Means and hierarchical clustering, enabling personalized insurance offerings and contributing to improved customer retention.
• Forecasting: Built claims volume and premium forecasting models using Prophet and SARIMA, enabling actuarial teams to enhance reserve planning and improve loss ratio projections.
• Data Engineering: Designed ETL pipelines using GCP Dataflow, BigQuery, and Cloud Storage, ensuring reliable ingestion and transformation of structured and semi structured insurance datasets.
• Visualization & BI: Created executive dashboards in Tableau, Power BI, and Plotly, delivering real time insights on claims trends, risk metrics, and customer segments for actuaries and underwriters.
• Governance: Applied data validation and PII redaction techniques to safeguard sensitive customer information and ensure compliance with insurance regulatory standards.
Tech Stack: Python, R, Scikit-learn, CatBoost, LightGBM, Prophet, SARIMA, SQL, MongoDB, Snowflake, Tableau, Power BI, Plotly, GCP (BigQuery, Dataflow, Cloud Storage)`,
    skills: () => `💻 Technical Skills:

Programming Languages:
  Python, Java, JavaScript, TypeScript, SQL

Python Libraries:
  NumPy, Pandas, Scikit-learn, PyTorch, TensorFlow

AI/ML Libraries:
  Scikit-learn, XGBoost, LightGBM, PyTorch, TensorFlow, CatBoost

ML Techniques:
  Predictive Modeling, Segmentation Modeling, Classification, Clustering, Feature Engineering

NLP / LLMs:
  OpenAI APIs (GPT), Hugging Face Transformers, LangChain, RAG, BERT, Pinecone, Milvus, Faiss, Chroma

Prompt Engineering:
  Chain-of-Thought, Few-shot Prompting, Prompt Guardrails

Time-Series:
  Prophet, SARIMA, ARIMA

Testing / Explainability:
  SHAP, LIME, AUC-ROC, RAGAS Metrics, Unit Testing, CI/CD (GitHub Actions)

MLOps & Automation:
  MLflow, Docker, FastAPI, Apache Airflow, CI/CD Pipelines

Cloud Platforms:
  AWS (EC2, S3, Lambda, SageMaker, Glue)
  Azure (App Service, SQL DB, Functions)
  GCP (BigQuery, Dataflow, Cloud Storage)

Databases:
  PostgreSQL, MySQL, MongoDB, Redis, Snowflake, Azure SQL Database

Vector Databases:
  Pinecone, Milvus, Faiss, Chroma

Visualization:
  Matplotlib, Seaborn, Plotly, Power BI, Tableau

Web Development:
  React.js, Node.js, Spring Boot, FastAPI, Flask, RESTful APIs, Microservices

Version Control:
  Git, GitHub, Bitbucket`,
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
