import { Form } from "./components/Form";
import Head from "./head";

export default function Signup() {
    return (
        <>
            <Head />
            <div className="relative min-h-screen flex ">
                <Form />
            </div>
        </>
    )
}