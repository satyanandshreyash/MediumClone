import { Navbar } from "./Navbar"

export const PostSkeleton = () => {
    return <>
        <Navbar />
        <div className="w-[90%] ml-[5%] my-4 h-screen lg:w-[70%] lg:h-screen lg:mx-[15%] lg:my-10 border-l-2 border-r-2 border-gray-800 animate-pulse">
            <div className="col-span-12 px-2 py-4 lg:px-20 lg:py-10 lg:col-span-10">
                <div className="text-4xl font-semibold text-gray-300 space-y-2 lg:space-y-4">
                    <div className="h-4 mb-1 lg:h-6 lg:mb-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[100%]"></div>
                    <div className="h-4 mb-1 lg:h-6 lg:mb-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[70%]"></div>
                </div>
                <div className="flex space-x-1 pt-1 lg:space-x-2 lg:pt-4 text-gray-500">
                    <div className="text-sm mr-1 font-normal lg:text-xl lg:mr-2 lg:font-semibold flex flex-col justify-center">By: </div>
                    <svg className="w-6 h-6 text-gray-200 dark:text-gray-700 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div className="flex flex-col justify-center text-xl font-semibold">
                        <div className="w-16 h-2 lg:w-28 lg:h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>
                <div className="px-1 py-2 lg:text-lg lg:px-6 lg:py-6 text-gray-400 font-medium">
                    <ContentSkeleton />
                </div>
            </div>
        </div>
    </>
}

function ContentSkeleton() {
    return <div role="status" className="space-y-2 lg:space-y-4 animate-pulse">
        <div className="flex items-center w-full">
            <div className="h-2 lg:h-4 w-32 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="h-2 lg:h-4 w-24 ms-2 bg-gray-300 rounded-full dark:bg-gray-600"></div>
            <div className="h-2 lg:h-4 w-full ms-2 bg-gray-300 rounded-full dark:bg-gray-600"></div>
        </div>
        <div className="flex items-center w-full">
            <div className="h-2 lg:h-4 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="h-2 lg:h-4 w-full ms-2 bg-gray-300 rounded-full dark:bg-gray-600"></div>
            <div className="h-2 lg:h-4 w-24 ms-2 bg-gray-300 rounded-full dark:bg-gray-600"></div>
        </div>
        <div className="flex items-center w-full">
            <div className="h-2 lg:h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2 lg:h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div className="h-2 lg:h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full">
            <div className="h-2 lg:h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-2 lg:h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2 lg:h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full">
            <div className="h-2 lg:h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
            <div className="h-2 lg:h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2 lg:h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        </div>
        <div className="flex items-center w-full">
            <div className="h-2 lg:h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2 lg:h-4 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div className="h-2 lg:h-4 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>

        <span className="sr-only">Loading...</span>
    </div>
}    