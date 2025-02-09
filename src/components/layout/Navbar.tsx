export function Navbar() {
    return (
        <nav className="w-full py-4 bg-white shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                <span className="text-xl font-semibold">Khu Mo Distillery</span>
                <div className="space-x-4">
                    <a href="/" className="text-gray-700 hover:text-black">Home</a>
                    <a href="/wine" className="text-gray-700 hover:text-black">Wine</a>
                    <a href="/about" className="text-gray-700 hover:text-black">About</a>
                </div>
            </div>
        </nav>
    );
}
