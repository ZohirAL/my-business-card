import ourImage from"../images/me_and_wify.JPG"

export default function Header() {
    return (
        <nav>
            <img className="nav--picture" src={ourImage} alt="Me and my wife picture" width="400px"></img> 
            <h1 className="nav--title">Zohir Aliliche</h1>
            <h3>Software Developper</h3>
            <h4>Digital Corporation</h4>
            <button className="nav--email_button">Email</button>
            <button className="nav--linkedin_button">Linkedin</button>
        </nav>
    )
}