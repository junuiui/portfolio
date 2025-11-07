import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
    const form = useRef();
    const navigate = useNavigate();
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current
        ).then(
            () => {
                setIsSending(false);
                setIsSent(true);
            },
            (error) => {
                setIsSending(false);
                alert("Failed to send: " + error.text);
            }
        );
    };

    const handleSuccessConfirm = () => {
        setIsSent(false); // hide the popup
        navigate("/"); // redirect to home
    };

    return (
        <div className="min-h-screen bg-[#100d74] text-white px-6 py-16 relative">
            <h1 className="text-4xl font-bold text-center mb-8 border-b pb-3">CONTACT</h1>

            <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="p-3 rounded bg-transparent border border-white focus:outline-none"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="p-3 rounded bg-transparent border border-white focus:outline-none"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="p-3 rounded bg-transparent border border-white focus:outline-none h-40"
                    required
                />
                <button
                    type="submit"
                    disabled={isSending}
                    className={`bg-white text-[#100d74] font-bold py-2 rounded hover:bg-gray-200 transition ${isSending ? "opacity-60 cursor-not-allowed" : ""
                        }`}
                >
                    {isSending ? "Submitting..." : "Send Message"}
                </button>
            </form>

            {/* Success popup */}
            {isSent && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-[#100d74] p-6 rounded shadow-lg text-center">
                        <p className="text-green-400 text-lg font-bold mb-4">
                            Message sent successfully!
                        </p>
                        <button
                            onClick={handleSuccessConfirm}
                            className="bg-white text-[#100d74] font-bold py-2 px-4 rounded hover:bg-gray-200 transition"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
