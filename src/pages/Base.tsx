import { useLayoutEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeGallery from "../components/HomeGallery";
import { Link } from "react-router";

export default function Home() {
  const [shrinkNav, setShrinkNav] = useState(false)

  useLayoutEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 100) {
        setShrinkNav(true)
      } else {
        setShrinkNav(false)
      } 
    }
  })


  return (
    <>
      <Navbar shrink={shrinkNav} />
      <div className="flex flex-col min-h-screen bg-background pt-16">
        <div className="flex flex-col min-h-64 items-center justify-center">
          <h1 className="text-4xl font-bold">
            Ons huis, <span className="text-primary">jouw moment</span>
          </h1>
        </div>
        <div className="bg-primary/50 p-8">
          <HomeGallery />
        </div>
        <div className="p-8 mx-32 relative">
          <div className="flex justify-center text-4xl font-bold">
            Over ons
          </div>
          <div className="flex">
            <img src="/lennart.png" className="w-64 rounded-md mt-8 mr-8" alt="Lennart" />
            <p className="text-xl mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores officia nesciunt, eius accusamus, id ab, quas necessitatibus at distinctio fuga alias quidem inventore ratione voluptatem ullam praesentium! Itaque, quae?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt doloribus earum maiores quia quaerat totam sequi, vitae a dolorem consequuntur corporis amet ipsum? Veniam impedit vero tenetur facere iure dicta.
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellendus corporis libero laudantium, sit ea, vitae animi pariatur non dolor voluptatum labore, sint quia nesciunt vero? Consequuntur aliquam necessitatibus beatae?
            </p>
          </div>
          <Link to="/about">
            <div className="absolute right-0 bottom-8 text-xl text-background px-3 py-1 rounded-full hover:cursor-pointer bg-secondary hover:bg-secondary/90 active:bg-secondary/80 duration-150 select-none">
              Meer &rarr;
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}