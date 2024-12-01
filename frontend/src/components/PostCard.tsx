import { Link } from "react-router-dom";

interface postCardInputs {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate?: string,
}
export const PostCard = ({ id, authorName, title, content }: postCardInputs) => {

    return <div className="w-[90%] mt-4 ml-[5%] px-2 pb-2 lg:w-[50%] lg:ml-[25%] lg:mr-[25%] lg:p-4 border-gray-700 border-b-2  cursor-pointer">
        <Link to={`/post/${id}`}>
            <div className="flex text-center"><div className="mr-1"><Avatar name={authorName} /></div><div className="flex flex-col justify-center font-thin text-sm lg:text-base lg:mx-1 lg:font-thin">{authorName}</div>
            </div>
            <div className="pt-2 text-xl lg:pt-4 lg:text-2xl font-bold text-gray-200">{title}</div>
            <div className="pt-1 text-sm lg:pt-2 lg:text-lg font-semibold text-gray-400">{content.slice(0, 120) + ' ...'}</div>
        </Link >
    </div>

}

export function Avatar({ name = "Anonymous", size = "small" }: { name: string, size?: "small" | "big" }) {

    return <div className={`relative inline-flex items-center justify-center rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-sm" : "test-xl"} text-gray-600 dark:text-gray-300`}>{name[0].toUpperCase()}</span>
    </div>
}