function Header({ title }) {
    return (
        <header className="header">
            <a href="/"><h1>{ title }</h1></a>
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/codereview">Code Review</a>
                <a href="/artifacts">Artifacts</a>
                <a href="https://github.com/j-vasquez21" target="_blank">Github</a>
            </nav>

        </header>
    );
}

export default Header;