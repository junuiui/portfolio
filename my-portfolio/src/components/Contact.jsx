export default function Contact() {
    return (
        <div className="min-h-screen bg-[#100d74] text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl font-bold mb-6">Contact</h1>
            <p className="text-center text-gray-300 max-w-md mb-8">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>

            <form className="flex flex-col gap-4 w-full max-w-sm">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-[#1b187a] border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-[#1b187a] border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="bg-[#1b187a] border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 transition text-white font-medium rounded-md py-2"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
