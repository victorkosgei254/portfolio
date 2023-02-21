import "../assets/sociallinks.css"
function SocialLinks()
{

    return(
        <div className="social-links">
            <div className="links">
                <div className="linkedIn">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
                <div className="github">
                    <i className="fa fa-github"/>
                </div>
                <div className="medium">
                    <i className="fa fa-medium"/>
                </div>
                <div className="twitter">
                    <i className="fa fa-twitter"/>
                </div>
                <div className="line"/>
            </div>
        </div>
    )
}

export default SocialLinks;
