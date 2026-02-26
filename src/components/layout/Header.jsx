import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"

const nav_items = [
    { item: "Home", path: "/" },
    { item: "Jobs", path: "/jobs" },
    { item: "About", path: "/about" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full sticky top-0 z-50 bg-(--color-bg) shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link to="/">
                <h1 className="text-2xl cursor-pointer font-bold text-(--color-accent)">
                    Job Portal
                </h1>
                </Link>

                <nav className="hidden md:flex gap-8">
                    {nav_items.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 border-(--color-accent) text-(--color-accent) pb-1"
                                    : "text-(--color-fg) hover:text-(--color-accent) transition"
                            }
                        >
                            {item.item}
                        </NavLink>
                    ))}
                </nav>

                <button
                    className="md:hidden text-(--color-fg)"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-60" : "max-h-0"
                }`}
            >
                <nav className="flex flex-col px-6 pb-4 gap-4 bg-(--color-bg)">
                    {nav_items.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-(--color-accent) font-semibold"
                                    : "text-(--color-fg)"
                            }
                        >
                            {item.item}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}