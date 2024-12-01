import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const Home = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className="flex justify-center p-4">
                    <img src="../../home.svg" alt="" />
                </div>
                <div className="flex flex-col justify-center my-6 bg-gray-950">
                    <div className="w-[90%] ml-[5%] lg:w-[70%] lg:ml-[15%] text-center">
                        <div className="text-6xl font-bold text-center lg:text-8xl">
                            Human Stories & Ideas
                        </div>
                        <div className="text-2xl text-gray-500 font-semibold text-center m-4">
                            A place to read, write and deepen your understanding.
                        </div>
                        <div className="flex justify-center">
                            <div className="text-2xl lg:text-4xl font-bold animate-bounce">&#10230;</div>
                            <div className="flex flex-col justify-center">
                                <Link to={`/signup`}>
                                    <button className="bg-blue-700 mx-2 px-4 py-1 rounded-full font-semibold">
                                        Get started
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}