import "../assets/frame.css"
function Frame()
{
    return (
        <div className="frame">
            <div className="sidebar">
                <div className="sidebar-menu">
                    <p>Menu here</p>
                </div>
                <div className="sidebar-contents">
                    <p>JavaScript</p>
                    <p>Python</p>
                    <p>Java</p>
                    <p>C</p>
                    <p>C++</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Go</p>
                </div>
                <div className="sidebar-status-bar">
                    <p>Status bar</p>
                </div>
            </div>
            <div className="contents">

            </div>
        </div>
    )
}

export default Frame;
