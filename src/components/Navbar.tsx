export default function Navbar(props: {shrink : boolean}) {

    return (
        <div className={"w-screen duration-150 bg-none text-xl text-primary flex items-center justify-between fixed " + (props.shrink ? "h-8" : "h-16")}>
        <div className="flex items-center">
            <a href="./" className="duration-150">
                <img src="./public/logo-mcm.png" className={"w-auto duration-150 " + (props.shrink ? "h-8" : "h-16")} alt="logo" />
            </a>
            <div className="group flex">
                <h1 className="text-2xl font-bold ml-4">Mi Casa Moments</h1>
                {/* Could change these effects, for illustration */}
                <img src="./public/sun.png" hidden={props.shrink} className="relative right-4 group-hover:-translate-x-2 size-4 duration-150 group-hover:rotate-45 ml-4 translate-y-1 group-hover:-translate-y-2 opacity-0 group-hover:opacity-100" alt="logo" />
            </div>
        </div>
        <div className="flex space-x-4 mr-8">
            <a href="./" className="text-primary hover:text-secondary duration-150">Home</a>
            <a href="./about" className="text-primary hover:text-secondary duration-150">Over</a>
            <a href="./contact" className="text-primary hover:text-secondary duration-150">Contact</a>
        </div>

        </div>
    )
}