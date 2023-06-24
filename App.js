import React from 'react';

const App = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const Content = () => {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <p>This is the content of the page.</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>
  );
};

export default App;
