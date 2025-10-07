// Header.jsx
import Button from "./Buttons/Button";

export default function Header() {
    const scrollTo = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex items-center justify-between bg-amber-100 text-blue-700 antialiased font-mono text-4xl p-5 sticky top-0 z-50">
            <div>Junui Hong</div>
            <div className="flex gap-2 text-2xl p-2">
                <Button name="Home" onClick={() => scrollTo("home")} />
                <Button name="About me" onClick={() => scrollTo("about")} />
            </div>
        </div>
    );
}
