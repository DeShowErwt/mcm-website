import { useLayoutEffect, useState } from "react"
import Navbar from "../components/Navbar"

export default function About() {
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
            {/* Adding a padding top of 16 to ensure no overlapping with the navbar */}
            <div className="flex flex-col min-h-screen bg-background pt-16">
                <div className="px-24 pt-8">
                    <h1 className="text-4xl font-bold">Lennart</h1>
                    <div className="flex">
                        <img src="/lennart.png" className="w-64 rounded-md mt-8 mr-8" alt="Lennart" />
                        <p className="text-xl mt-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores officia nesciunt, eius accusamus, id ab, quas necessitatibus at distinctio fuga alias quidem inventore ratione voluptatem ullam praesentium! Itaque, quae?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt doloribus earum maiores quia quaerat totam sequi, vitae a dolorem consequuntur corporis amet ipsum? Veniam impedit vero tenetur facere iure dicta.
                            <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellendus corporis libero laudantium, sit ea, vitae animi pariatur non dolor voluptatum labore, sint quia nesciunt vero? Consequuntur aliquam necessitatibus beatae?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}