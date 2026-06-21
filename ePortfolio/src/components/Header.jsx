import { Link } from 'react-router-dom'; 

function Header({ title }) {
    return (
        <header className="header">
            <Link to="/"><h1>{ title }</h1></Link>
            
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/codereview">Code Review</Link>
                <Link to="/artifacts">Artifacts</Link>
                <a href="https://github.com/j-vasquez21" target="_blank" rel="noreferrer">Github</a>
            </nav>
        </header>
    );
}

export default Header;