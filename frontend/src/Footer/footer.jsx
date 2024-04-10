import "./footer.css"
function Footer() {
    return (
        <footer className="footer-container"> 
            <div className="email-signup"> 
                <h1>NEVER MISS A UPDATE!</h1>
                <p>Be first to know!</p>
                <input type="text" placeholder="Enter your email adress" className="email-input" />
                <hr />
            </div>

            <div className="footer-content">

            
            <div className="footer-section company"> 
                <h1>Company</h1>
                <hr />
                <ul className="footer-links"> 
                    <li>Contact Us</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                </ul>
            </div>

            <div className="footer-section policies"> 
                <h1>Policies</h1>
                <hr />
                <ul className="footer-links"> 
                    <li>Privacy Policy</li>
                    <li>Cancellation & Return Policy</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>

            <div className="footer-section about-us"> 
                <h1>About Us</h1>
                <p>qwertyuiop</p>
            </div>

            <div className="footer-section categories"> 
                <h1>Categories</h1>
                <ul className="footer-links"> 
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                    <li>d</li>
                    <li>e</li>
                    <li>f</li>
                </ul>
            </div>

            <div className="footer-section cities"> 
                <h1>Cities We Serve</h1>
                <ul className="footer-links"> 
                    <li>City 1</li>
                    <li>City 2</li>
                    <li>City 3</li>
                    <li>City 4</li>
                    <li>City 5</li>
                    <li>City 6</li>
                </ul>
            </div>
            </div>
        </footer>
    );
}
export default Footer;