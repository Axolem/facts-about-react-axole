import logo from "../assets/Group.png";
function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img className="logo" src={logo} />
        <h1 className="logo-text">ReactFacts</h1>
      </div>
      <div>
        <p className="project-id">React Course - Project 1</p>
      </div>
    </div>
  );
}

export default Navbar;
