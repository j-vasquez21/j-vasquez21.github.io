import Header from '../components/Header';

function Artifacts() {
    return (
    <div>
      <Header title={'Jerry Vasquez'}/>
      <main className="main-content-container">
        <h1>Artifacts</h1>
        <section>
          <h2>Software Design and Engineering</h2>
          <article>
            <p>The artifact is the frontend of a web application that is part of project two from the course, CS 340. This artifact creates a user dashboard to view a table of data regarding animals that can potentially be recruited for rescue missions. The table has filters that will filter the rescue animals that meet the qualities for a specific type of rescue mission. In addition to the table, the dashboard includes two graphics which are a pie chart that shows the distribution of dog breeds and a geo map that displays the location of a selected animal.</p>
            <p><strong>Links</strong></p>
            <ul>
              <li><a href="https://github.com/j-vasquez21/CS340-Project/tree/main/Dashboard/frontend" target="_blank" rel="noreferrer">Enhancement </a></li>
              <li><a href="https://github.com/j-vasquez21/CS340-Project/blob/main/pre-enhancement/ProjectTwoDashboard.ipynb" target="_blank" rel="noreferrer">Original</a></li>
              <li><a href="">Narrative</a></li>
            </ul>
          </article>
        </section>
        <section>
          <h2>Algorithms and Data Structures</h2>
          <article>
            <p>The chosen artifact for this enhancement was the driver class of project two from the course, IT 145, which was completed during the very beginning of my computer science degree. The project as a whole is an application that creates a text based user interface for managing rescue animals. The driver class contains the main functionality that utilizes animal classes such as RescueAnimal, Dog, and Monkey to store information and represent the animals that the application will manage. The application presents the user with a menu option from which the user can select an option and complete the specified task such as adding a new dog or monkey, display the animal details in text format, reserving an animal for a rescue mission, or exiting the application.</p>
            <p><strong>Links</strong></p>
            <ul>
              <li><a href="https://github.com/j-vasquez21/IT-145-Grazioso-Salvare-Project/blob/main/Grazioso-Salvare/src/Driver.java" target="_blank" rel="noreferrer">Enhancement</a></li>
              <li><a href="https://github.com/j-vasquez21/IT-145-Grazioso-Salvare-Project/blob/main/Driver.java" target="_blank" rel="noreferrer">Original</a></li>
              <li><a href="">Narrative</a></li>
            </ul>
          </article>
        </section>
        <section>
          <h2>Databases</h2>
          <article>
            <p>The artifact, CRUD_Python_Module.py, is part of the animal shelter dashboard project completed in the course, CS 340. This artifact aimed to handle CRUD (Create, Read, Update, Delete) operations with the MongoDB database. Using this file, the frontend was able to load the data needed for the dashboard data table, chart, and geo map.  </p>
            <p><strong>Links</strong></p>
            <ul>
              <li><a href="https://github.com/j-vasquez21/CS340-Project/tree/main/Dashboard/backend" target="_blank" rel="noreferrer">Enhancement</a></li>
              <li><a href="https://github.com/j-vasquez21/CS340-Project/blob/main/pre-enhancement/CRUD_Python_Module.py" target="_blank" rel="noreferrer">Original</a></li>
              <li><a href="" target="_blank" rel="noreferrer">Narrative</a></li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Artifacts;