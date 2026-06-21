import Header from '../components/Header';

function Home() {
    return (
    <div>
      <Header title={'Jerry Vasquez'}/>
      <main className="main-content-container">
        <article>
          <h1>Self Assessment</h1>
          <p>The computer science program proved challenging yet rewarding as I learned core concepts of software engineering. Through exploring the various avenues of software engineering, I have developed skills in software design, data structures and algorithms, databases, and security.</p>
          <p>The course CS 250 helped me reinforce my knowledge in the SDLC and agile methodology which I was first introduced to in my previous role as a business analyst at an IT company. With this course I honed my skills in collaborating in a team environment to effectively accomplish business goals, meet stakeholder expectations, and deliver a software product.</p>
          <p>The course, CS 300, helped develop strong algorithmic thinking by breaking down a problem into steps to find a solution. The course also taught me to evaluate different solutions and consider their strengths, efficiencies, and drawbacks.</p>
          <p>Courses such as CS 405 and CS 305 changed my perspective on how to develop an application. Through learning about the dangers that can arise from having weak security or leaving security until the end of development, my mindset has switched to be more security oriented.</p>
          <p>This ePortfolio is designed to consolidate my learning and demonstrate my software engineering capabilities through practical application and the delivery of three different artifacts.</p>
          <p>The first and third artifact are part of a broader project which come together to create a full stack application. This web app creates a user dashboard which visually communicates information about rescue animals through a data table, geo map, and pie chart. The web application is created using the PERN tech stack. The first artifact focuses on building the frontend or user interface of the application. The third artifact is more focused on the backend which facilitates the communication and exchange of data between the user interface and the database via a REST API.</p>
          <p>The second artifact creates a text-based user interface that creates a rescue animal management system. The system allows the user to enlist a new rescue animal or deploy a rescue animal for a rescue mission.</p>      
        </article>
      </main>
    </div>
  );
}

export default Home;