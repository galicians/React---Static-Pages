import ReactLogo from "../assets/react.svg";
export default function Header() {
 
  return (
    <>
      <header>
        <nav>
          <img src={ReactLogo} />
          <span>ReactFacts</span>
        </nav>
      </header>
    </>
  )
}