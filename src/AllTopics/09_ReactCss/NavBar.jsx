import style from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav className={style.navbar}>
        <figure >NavBar</figure>
        <button id={style.loginbtn}>Login</button>
    </nav>
  )
}

export default NavBar