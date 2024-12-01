import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar"
import { PostCard } from "../components/PostCard"
import { PostCardSkeleton } from "../components/PostCardSkeleton";
import { usePosts, useUser } from "../hooks"
import { useEffect } from "react";
import { Footer } from "../components/Footer";

export const Posts = () => {
    const { loading, posts } = usePosts();
    const { userLoading, user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && !userLoading) {
            navigate("/signin")
        }
    }, [user, userLoading]);

    if (loading) {
        return <>
            <Navbar />
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
            <Footer />
        </>
    }
    return <>
        <Navbar />
        <div className="space-y-4">
            {posts.map(post => <PostCard
                id={post.id.toString()}
                authorName={post.author.username}
                title={post.title}
                content={post.content}
                publishedDate="28th Nov 2024"
                key={post.id}
            />)}
        </div >
    </>
}