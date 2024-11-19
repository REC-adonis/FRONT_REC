import React, { useState } from "react";

const Header = ()=>{

    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false); 
    };

    return(
        <div className="w-full">
            <div className="w-full flex justify-center bg-black py-2">
                <p className="text-white">ENVIO GRATIS A PARTIR DE $$$</p>
            </div>
            <header className="w-full bg-cream shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                    <nav className="hidden sm:flex space-x-6">
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-700 hover:text-black"
                            onClick={handleLinkClick}
                        >
                            DROPS
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-700 hover:text-black"
                            onClick={handleLinkClick}
                        >
                            ACCESORIES
                        </a>
                    </nav>

                    {/*<button
                        className="sm:hidden text-gray-700 hover:text-black"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <img src="/menu.svg" alt="Menu" className="w-6 h-6" />
                    </button>*/}

                    <div className="flex items-center space-x-2">
                        <img src="/logo.png" alt="Logo" className="w-20" />
                    </div>

                    <div className="hidden sm:flex space-x-6">
                        <button
                            className="text-gray-700 hover:text-black"
                            onClick={handleLinkClick}
                        >
                            <img src="/search.svg" alt="Search" className="w-5 h-5" />
                        </button>
                        <button
                            className="text-gray-700 hover:text-black"
                            onClick={handleLinkClick}
                        >
                            <img src="/person.svg" alt="User" className="w-5 h-5" />
                        </button>
                        <button
                            className="text-gray-700 hover:text-black"
                            onClick={handleLinkClick}
                        >
                            <img src="/cart.svg" alt="Cart" className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/*{menuOpen && (
                    <div className="sm:hidden bg-cream w-full flex flex-col space-y-2 px-4 py-2">
                        <div className="flex items-center justify-between pb-4 border-b border-gray-300">
                            <img src="/list.svg" alt="Logo" className="w-10 h-10" />
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-700 hover:text-black"
                            >
                                <img src="/close.svg" alt="Close Menu" className="w-6 h-6" />
                            </button>
                        </div>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-700 hover:text-black"
                            onClick={handleLinkClick}
                        >
                            DROPS
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-700 hover:text-black"
                            onClick={handleLinkClick}
                        >
                            ACCESORIES
                        </a>
                        <div className="flex space-x-6 mt-4">
                            <button
                                className="text-gray-700 hover:text-black"
                                onClick={handleLinkClick}
                            >
                                <img src="/search.svg" alt="Search" className="w-5 h-5" />
                            </button>
                            <button
                                className="text-gray-700 hover:text-black"
                                onClick={handleLinkClick}
                            >
                                <img src="/person.svg" alt="User" className="w-5 h-5" />
                            </button>
                            <button
                                className="text-gray-700 hover:text-black"
                                onClick={handleLinkClick}
                            >
                                <img src="/cart.svg" alt="Cart" className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}*/}
            </header>
        </div>
    )
}

export default Header;