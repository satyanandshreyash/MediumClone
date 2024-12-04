import { SignupSchema } from "@satyanand_shreyash/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Backend_Url } from "../config";
import { IoIosHome } from "react-icons/io";


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [signupInputs, setSignupInputs] = useState<SignupSchema>({
        username: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function sendRequest() {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${Backend_Url}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, signupInputs);
            const token = response.data.token;
            localStorage.setItem("token", token);
            navigate('/posts');
        } catch (err: any) {
            console.log(err.response.data.message);
            setError(err.response.data.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }
    return <div className="relative flex my-[20%] lg:h-screen lg:my-0 lg:flex justify-center items-center">
        {/* {loading && (
            <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-80 z-10">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            </div>
        )} */}
        <div className="space-y-2 text-center w-[60%] lg:w-[40%]">
            <div className="flex justify-center"><IoIosHome className="text-4xl cursor-pointer" onClick={() => { navigate('/') }} /></div>
            <div className="text-3xl font-bold">{type === "signup" ? "Create an account" : "Login to your account"}</div>
            <p>{type === "signup" ? "Already have an account?" : "Don't have an account?"} <Link to={type === "signup" ? "/signin" : "/signup"} className="underline underline-offset-2 text-blue-300 ml-2">{type === "signup" ? "Login" : "Signup"}</Link></p>
            {type === "signup" && <LabledInput label="Username" type="text" placeholder="Enter your username" onChange={(e) => {
                setSignupInputs({
                    ...signupInputs,
                    username: e.target.value
                })
            }} />}
            <LabledInput label="Email" type="text" placeholder="Enter your email" onChange={(e) => {
                setSignupInputs({
                    ...signupInputs,
                    email: e.target.value
                })
            }} />
            <LabledInput label="Password" type="password" placeholder="Enter your password" onChange={(e) => {
                setSignupInputs({
                    ...signupInputs,
                    password: e.target.value
                })
            }} />
            <p className="text-red-500 text-sm font-medium">{error}</p>
            <div>
                <button onClick={sendRequest} className={`${loading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-700"
                    } text-white font-semibold w-[100%] mt-2 p-2 rounded-lg`} disabled={loading}>{loading ? "Please wait..." : type === "signup" ? "Sign Up" : "Log In"}
                </button>
            </div>

        </div>
    </div >
}

interface labledInputType {
    label: string;
    type: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabledInput({ label, type, placeholder, onChange }: labledInputType) {
    return <div>
        <div className="text-left">
            <label htmlFor="username" className="font-medium text-md">{label}</label>
        </div>
        <div><input type={type} placeholder={placeholder} onChange={onChange} className="border-gray-200  bg-gray-800 rounded-md border-1 h-10 p-4 w-[100%]" id={label} /></div>
    </div>
}