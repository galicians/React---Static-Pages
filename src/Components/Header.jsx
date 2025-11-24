import ReactLogo from "../assets/react.svg";
export default function Header() {
 
  return (
    <>
      <header className="header">
        <nav className="nav">
          <img src={ReactLogo} alt="this is the logo" className="logoImg"/>
          <span className="logoText">ReactFacts</span>
        </nav>
      </header>
    </>
  )
}