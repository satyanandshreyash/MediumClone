import { Link } from "react-router-dom"

export const NavbarSkeleton = () => {
    return <div className="border-b border-gray-600 flex justify-between lg:px-20 lg:py-4">
        <div className="flex flex-col justify-center text-2xl font-extrabold">
            Blogg
        </div>
        <div className="flex animate-pulse">
            <Link to={`/publish`}><button className="bg-blue-700 px-4 py-1 mr-8 rounded-full font-semibold">Add Post</button></Link>
            <Link to={`/`}><button className="bg-red-600 px-4 py-1 mr-8 rounded-full font-semibold">Logout</button></Link>
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-700 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <div className="flex flex-col justify-center font-thin">
                <div className="w-20 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
        </div>
    </div>
}