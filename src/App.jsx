import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Card } from "./Card";
import { Footer } from "./Footer";
export function App() {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <Card></Card>
            <Card></Card>
            
            <Footer></Footer>
        </div>
    )
}
