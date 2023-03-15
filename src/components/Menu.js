const Menu = () => {
    return (
        <div className="w-full p-1">
            <a href="#" className="menu-1 w-full h-[35px] flex justify-center items-center font-primary text-gray-700 rounded-md drop-shadow-lg bg-[#fff] hover:bg-primary">Home</a>
            <a href="#" className="menu-2 w-full h-[35px] mt-1 flex justify-center items-center font-primary text-gray-700 rounded-md drop-shadow-lg bg-[#fff] hover:bg-primary">About</a>
            <a href="#" className="menu-3 w-full h-[35px] mt-1 flex justify-center items-center font-primary text-gray-700 rounded-md drop-shadow-lg bg-[#fff] hover:bg-primary">Blog</a>
            <a href="#" className="menu-4 w-full h-[35px] mt-1 flex justify-center items-center font-primary text-gray-700 rounded-md drop-shadow-lg bg-[#fff] hover:bg-primary">Contact</a>
        </div>
    );
}

export default Menu;