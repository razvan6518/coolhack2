import classes from "./Header.module.css"

const headerURL = "https://foto.agerpres.ro/foto/watermark/8817668";

function Header() {
    return (
        <div className={classes.container}>
            <img className={classes.img} src={headerURL}/>
        </div>
    )
}

export default Header;