import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./PostCard";
import { useUser } from "../hooks";
import { useState } from "react";

export const Navbar = () => {
    const { userLoading, user } = useUser();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="px-4 py-4 border-b border-gray-600 flex justify-between items-center lg:px-20 lg:py-4 relative">
            {/* Logo */}
            <Link to="/posts" className="flex items-center">
                <div className="text-2xl font-extrabold">Blogg</div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
                className="lg:hidden text-gray-600 dark:text-gray-300 px-4"
                onClick={toggleMenu}
            >
                {isMenuOpen ? "✖" : "☰"}
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center">
                {userLoading ? (
                    <div className="hidden lg:block">
                        {/* Render skeleton for desktop while loading */}
                        <div className="animate-pulse flex space-x-4">
                            <div className="bg-gray-300 dark:bg-gray-600 rounded-full h-8 w-24"></div>
                            <div className="bg-gray-300 dark:bg-gray-600 rounded-full h-8 w-32"></div>
                            <div className="bg-gray-300 dark:bg-gray-600 rounded-full h-8 w-10"></div>
                        </div>
                    </div>
                ) : user ? (
                    <div className="flex items-center">
                        <Link to={`/publish`}>
                            <button className="bg-blue-700 px-4 py-1 mr-8 rounded-full font-semibold">
                                Add Post
                            </button>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 px-4 py-1 mr-8 rounded-full font-semibold"
                        >
                            Logout
                        </button>
                        <Avatar name={user?.username || "Anonymous"} size="big" />
                        <span className="text-gray-600 dark:text-gray-300 mx-2 text-lg font-semibold">
                            {user?.username}
                        </span>
                    </div>
                ) : (
                    <Link to={`/signin`}>
                        <button className="bg-blue-700 px-4 py-1 mr-8 rounded-full font-semibold">
                            Sign In
                        </button>
                    </Link>
                )}
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-full right-2 w-[50%] bg-white dark:bg-gray-800 shadow-lg z-50">
                    {userLoading ? (
                        <div className="p-4">
                            {/* Render skeleton for dropdown while loading */}
                            <div className="animate-pulse space-y-2">
                                <div className="bg-gray-300 dark:bg-gray-600 h-8 w-full rounded-lg"></div>
                                <div className="bg-gray-300 dark:bg-gray-600 h-8 w-full rounded-lg"></div>
                            </div>
                        </div>
                    ) : user ? (
                        <div className="flex flex-col items-start p-4">
                            <div className="flex items-center w-[100%] mb-2">
                                <Avatar name={user?.username || "Anonymous"} size="small" />
                                <span className="text-gray-600 dark:text-gray-300 mx-2 text-lg font-semibold">
                                    {user?.username}
                                </span>
                            </div>
                            <Link to={`/publish`} className="w-full">
                                <button className="bg-blue-700 px-4 py-2 w-[100%] text-center rounded-lg font-semibold mb-2">
                                    Add Post
                                </button>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 px-4 py-2 w-[100%] text-center rounded-lg font-semibold mb-2"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-start p-4">
                            <Link to={`/signin`} className="w-full">
                                <button className="bg-blue-700 px-4 py-2 w-full text-left rounded-lg font-semibold">
                                    Sign In
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
