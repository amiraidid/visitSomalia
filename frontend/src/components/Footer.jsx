

function Footer() {
    return (
        <footer className="bg-gray-200 rounded-lg shadow m-4 text-black">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-black sm:text-center">© 2024 <a href="#Home" className="hover:underline">Somalia™</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li><a href="#about" className="hover:underline me-4 md:me-6">About</a></li>
                    <li><a href="#services" className="hover:underline me-4 md:me-6">Our Services</a></li>
                    <li><a href="#packages" className="hover:underline me-4 md:me-6">Travel Packages</a></li>
                    <li><a href="#destination" className="hover:underline">Destinations</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer