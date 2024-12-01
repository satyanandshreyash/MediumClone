import axios from "axios"
import { Navbar } from "../components/Navbar"
import { Backend_Url } from "../config"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../hooks"

export const Publish = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { userLoading, user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && !userLoading) {
            navigate("/signin")
        }
    }, [user, userLoading]);

    return <>
        <Navbar />
        <div className="w-[96%] ml-[2%] my-2 lg:w-[70%] lg:mx-[15%] lg:my-10">
            <div className=""><input onChange={(e) => {
                setTitle(e.target.value);
            }} type="text" placeholder="Add Title" className="focus:outline-none bg-gray-900 w-[100%] text-2xl lg:text-5xl rounded-2xl font-semibold p-4 text-gray-300" /></div>
            <div><textarea onChange={(e) => {
                setContent(e.target.value);
            }} placeholder="Add Content" rows={20} className="focus:outline-none w-[100%] bg-gray-900 text-lg lg:text-xl font-semibold rounded-2xl p-4 my-3 lg:my-6 text-gray-300"></textarea></div>
            <button onClick={async () => {
                const response = await axios.post(`${Backend_Url}/api/v1/post/create`, {
                    title,
                    content,
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                })
                navigate(`/post/${response.data.post.id}`)
            }} type="submit" className="bg-blue-700 w-[40%] ml-[30%] lg:w-[20%] lg:ml-[40%] text-white font-semibold py-2 px-4 rounded-md">Publish Post</button>
        </div>

    </>
}