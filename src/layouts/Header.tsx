import background_header from '/images/backgroud_header.jpeg'
import '../styles/header_style.css'
export default function Header() {
    return (
        <header className="header">
            <div className='container_background'>
                <img src={background_header} alt="header_Guitar" className="header_img" />
            </div>
        </header>
    )
}