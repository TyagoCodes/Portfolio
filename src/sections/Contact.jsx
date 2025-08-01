import {useState} from "react";
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert.jsx";
import {Particles} from "../components/Particles.jsx";


const Contact = ({id}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [isLoading,setIsLoading] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState("success")
    const [alertMessage, setAlertMessage] = useState("")


    const handleChange=(e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const showAlertMessage = (type, message) => {
        setAlertType(type)
        setAlertMessage(message)
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }

    const handleSubmit = async  (e) => {
        e.preventDefault()
        setIsLoading(true)

        try{
            console.log("Form Submitted: ", formData)
            await emailjs.send("service_fp54bk9", "template_zczoj9q", {
                    from_name: formData.name,
                    to_name:"Santiago",
                    from_email: formData.email,
                    to_email:"SantiagoCVBusiness@gmail.com",
                    message: formData.message,
                },
            "FQVrP-OW8tFFqUU0K"
            )
            setIsLoading(false)
            setFormData({name:"", email: "", message: ""})
            showAlertMessage("success", "Your message has been sent!")
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            showAlertMessage("danger", "Something went wrong :/")
        }
    }

    return(
        <section id={id} className={"relative flex items-center c-space section-spacing"}>
            <Particles
                className={"absolute inset-0 -z-50"}
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
            />
            {showAlert && <Alert type={alertType} text={alertMessage}/>}
            <div className={"flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary"}>
                <div className={"flex flex-col items-start w-full gap-5 mb-10"}>
                    <h2 className={"text-heading"}> Let's Talk </h2>
                    <p className={"font-normal text-neutral-400"}> Reach out to me for any inquiries ! I'll be glad to answer! </p>
                </div>
            <form className={"w-full"} onSubmit={handleSubmit}>
                <div className={"mb-5"}>
                    <label htmlFor={"name"} className={"field-label text-orange-500"}>
                        Full Name
                    </label>
                    <input
                        id={"name"}
                        name={"name"}
                        type={"text"}
                        className={"field-input field-input-focus"}
                        placeholder={"John Doe"}
                        autoComplete={"name"}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={"mb-5"}>
                    <label htmlFor={"email"} className={"field-label text-orange-500"}>
                        Email
                    </label>
                    <input
                        id={"email"}
                        name={"email"}
                        type={"text"}
                        className={"field-input field-input-focus"}
                        placeholder={"JohnDoe@hotmail.com"}
                        autoComplete={"email"}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={"mb-5"}>
                    <label htmlFor={"message"} className={"field-label text-orange-500"}>
                        Message
                    </label>
                    <textarea
                        id={"message"}
                        name={"message"}
                        type={"text"}
                        rows="4"
                        className={"field-input field-input-focus"}
                        placeholder={"Don't be shy!"}
                        autoComplete={"message"}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type={"submit"}
                    className={"w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal"}
                >
                    {!isLoading?"Send" : "Sending..."}
                </button>
            </form>
            </div>
        </section>
    )
}

export default Contact;