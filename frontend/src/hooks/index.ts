import axios from "axios";
import { useEffect, useState } from "react"
import { Backend_Url } from "../config";

interface Post {
    id: number;
    title: string;
    content: string;
    author: {
        username: string;
    }
}

interface User {
    id: number;
    username: string;
    email: string;
}

export const useUser = () => {
    const [userLoading, setUserLoading] = useState(true);
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setUserLoading(false);
            return;
        }
        axios.get(`${Backend_Url}/api/v1/post/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then(response => {
                setUser(response.data.user);
                setUserLoading(false);
            })
    }, [])

    return {
        userLoading,
        user
    }
}

export const usePost = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        axios.get(`${Backend_Url}/api/v1/post/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then(response => {
                setPost(response.data.post);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        post
    }
}

export const usePosts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get(`${Backend_Url}/api/v1/post/bulk`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then(response => {
                setPosts(response.data.posts);
                setLoading(false);
            })
    }, []);

    return {
        loading,
        posts
    }
}