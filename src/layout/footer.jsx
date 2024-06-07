function Footer() {
    return <footer className="page-footer deep-purple accent-1">
        <div className="footer-copyright">
            <div className="container">
                ©{new Date().getUTCFullYear()} 
                 Борисов Никита
                <a href="#!" className="grey-text text-lighten-4 right">Repository </a>
            </div>
        </div>
    </footer>
}
export { Footer };