import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"
import { Footer } from "../components/Footer"

export const Signup = () => {
    return <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <Auth type="signup" />
            <Quote />
        </div>
        <Footer />
    </>
}