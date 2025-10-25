import Alert from './Alert'
import { Button } from './Buttons'
import Card from './Card'
import NavLink from './NavLink'

export default function App() {
    return (
        <div>

            <NavLink linkText='Home' />
            <NavLink linkText='About' />
            <NavLink linkText='Services' />
            <NavLink linkText='Products' />
            <NavLink linkText='Contacts' />

            <Button text='OK' ></Button>
            <Button text='Cancel' ></Button>
            <Button text='Save' ></Button>
            <Button text='Update' ></Button>

            <hr />
            <Alert header='Saved Successfully' msg='You data has been saved!' />
            <Alert header='Cannot Update' msg='We have an issue updating your content' />
            <Alert header='You info is secure' />
            <Alert header='Data will be deleted soon' />

            <hr />
            <Card header='Saved Successfully'>
                <div>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <hr />
                <section>
                    <article>
                        <h5>Next Content</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ex!</p>
                    </article>
                </section>
                <div>
                    <h3>This is a subtitle</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <ul>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Ad, cumque laudantium!</li>
                        <li>Magnam, inventore expedita?</li>
                        <li>Numquam, doloremque repellendus!</li>
                    </ul>
                </div>
            </Card>
            {/* <Card header='Cannot Update' />
            <Card header='Delete in Progress' /> */}
        </div>
    )
}

