import "./css/contactus.css";

function Contactus(){

    return(
        <>
        <div className="contact-contrainer">
            <div className="contact-me">
                <h2>How can I help you ?</h2>
                <p>Fill the form or drop an email</p>

            </div>
            <div className="email-form">
                <input type="text" placeholder="Name"/>
                <input type="emil" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea type="text" placeholder="Massage" />
                <button className="sumbit">
                    Sumbite
                </button>
            </div>
        </div>
        </>
    )
}

export default Contactus;