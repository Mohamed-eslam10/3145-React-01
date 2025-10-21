import 'bootstrap/dist/css/bootstrap.min.css';
import {  SimpleButton } from "./Buttons"
export function Card() {
    return (
        <section>
            <div className="border rounded shadow p-3 m-3">
                <p className='fw-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consequatur repudiandae? Tenetur, ea iste quae, atque assumenda harum id ipsam vitae dolorum voluptate beatae suscipit facere optio, totam magni aspernatur.</p>
               
                <SimpleButton></SimpleButton>
            </div>
        </section>
    )
}