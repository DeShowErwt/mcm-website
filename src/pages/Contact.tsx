import { useLayoutEffect, useState } from "react";
import Navbar from "../components/Navbar"

export default function Contact() {
    const [shrinkNav, setShrinkNav] = useState(false)
    
    useLayoutEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 100) {
                setShrinkNav(true)
            } else {
                setShrinkNav(false)
            } 
        };
    })
    
    return (
        <>
            <Navbar shrink={shrinkNav} /> 
            <div className="flex flex-col min-h-screen bg-background pt-16">
                <div className="px-32 text-xl pt-8">
                    <h1 className="text-4xl font-bold">Hoe kunnen we je helpen?</h1>
                    <div className="flex pt-8 space-x-12">
                        <p className="w-1/3">
                            Vragen over onze dienstverlening of een foutje gespot op onze website? Neem contact met ons op, we helpen je graag verder!
                        </p>
                        <form className="relative w-2/3 space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-xl">Naam</label>
                                <input type="text" id="name" className="border-2 border-primary hover:border-secondary focus:border-secondary duration-75 rounded-md p-2" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-xl">E-mail</label>
                                <input type="email" id="email" className="border-2 border-primary focus:border-secondary hover:border-secondary duration-75 rounded-md p-2" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-xl">Bericht</label>
                                <textarea id="message" className="border-2 border-primary focus:border-secondary hover:border-secondary duration-75 rounded-md p-2"></textarea>
                            </div>
                            <div className="absolute right-0  text-xl text-background px-3 py-1 rounded-full hover:cursor-pointer bg-secondary hover:bg-secondary/90 active:bg-secondary/80 duration-150 select-none">
                                Insturen &rarr;
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}