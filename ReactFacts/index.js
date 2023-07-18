function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./orange yellow sunset.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>The Musicals</h1>
      <ol>
        <li>High School Musical</li>
        <li>Camp Rock</li>
        <li>Lemonade Mouth</li>
        <li>Let it Shine</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2023 Waffle House development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
