import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Avatar } from "../components/PostCard";
import { PostSkeleton } from "../components/PostSkeleton";
import { usePost, useUser } from "../hooks";
import { useNavigate, useParams } from "react-router-dom";

export const Post = () => {
    const { id } = useParams();
    const { userLoading, user } = useUser();
    const navigate = useNavigate();
    const { loading, post } = usePost({
        id: id || "",
    });

    useEffect(() => {
        if (!user && !userLoading) {
            navigate("/signin")
        }
    }, [user]);

    if (loading) {
        return <PostSkeleton />
    }
    return <>
        <Navbar />
        <div className="w-[90%] ml-[5%] my-4 h-screen lg:w-[70%] lg:h-screen lg:mx-[15%] lg:my-10 border-l-2 border-r-2 border-gray-800">
            <div className="col-span-12 px-2 py-4 lg:px-20 lg:py-10 lg:col-span-10">
                <div className="text-2xl font-semibold lg:text-4xl lg:font-semibold text-gray-300">{post?.title}</div>
                <div className="flex space-x-1 pt-1 lg:space-x-2 lg:pt-4 text-gray-500">
                    <div className="text-sm mr-1 font-normal lg:text-xl lg:mr-2 lg:font-semibold flex flex-col justify-center">By: </div>
                    <div className="flex flex-col justify-center"><Avatar name={post?.author.username || "Anonymous"} size="small" /></div>
                    <div className="text-sm font-normal lg:text-xl lg:font-semibold flex flex-col justify-center">{post?.author.username}</div>
                </div>
                <div className="text-sm font-normal px-1 py-2 lg:text-lg lg:font-medium lg:px-6 lg:py-6 text-gray-400">{post?.content}</div>
            </div>
        </div>
    </>

}