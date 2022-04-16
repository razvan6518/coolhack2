import classes from "./Footer.module.css"

function Footer() {
    return (
        <footer className={classes.footer + " page-footer"}>
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className={classes.logo}>FarmLife</h5>
                        <p className={"grey-text text-lighten-4"}>Farm life este o platforma prin care poti cumpara produse exclusiv romanesti.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">About Us</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Cine suntem?</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Cu ce ne ocupam</a></li>
                            {/*<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>*/}
                            {/*<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>*/}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2022 FarmLife
                    <a className="grey-text text-lighten-4 right" href="#!">FarmLife</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;