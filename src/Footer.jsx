import { SubButton } from "./Buttons"
import 'bootstrap/dist/css/bootstrap.min.css';
export function Footer() {
    return (
        <section className="text-center p-3 bg-secondary text-white mt-3 pb-5">
            <p>
                <a href="#" className="text-light text-decoration-none mx-2">About</a> |
                <a href="#" className="text-light text-decoration-none mx-2">Contact</a> |
                <a href="#" className="text-light text-decoration-none mx-2">Privacy Policy</a>
            </p>
            <div className="mt-3">
                <a href="#" className="text-light mx-2"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-light mx-2"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-light mx-2"><i className="bi bi-instagram"></i></a>
            </div>
            Thanks for you ❤😘
            <SubButton></SubButton>
        </section>
    )
}