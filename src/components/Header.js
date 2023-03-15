import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo, useEffect, useRef } from 'react';
import useOnClickOutside from "./hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { cryptoActions } from "../store/crypto-slice";
import { uiActions } from '../store/ui-slice';
import { lazy, Suspense } from 'react'
const Menu = lazy(() => import("./Menu.js"));

let timer;

const Header = (props) => {

    const [input, setInput] = useState("");
    const [flag, setFlag] = useState(false);
    const [sortProp, setSortProp] = useState(null);
    const [showSortDrop, setShowSortDrop] = useState(false);
    const [showMenuDrop, setShowMenuDrop] = useState(false);
    const sortDropRef = useRef();
    const menuDropRef = useRef();
    useOnClickOutside(sortDropRef, () => setShowSortDrop(false))
    useOnClickOutside(menuDropRef, () => setShowMenuDrop(false))
    const dispatch = useDispatch();
    const { cryptoData } = props;
    console.log(sortProp)

    const handleChange = (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            setFlag(prevState => !prevState);
        }, 300)
        setInput(e.target.value);

    }

    const handleDropDown = (e) => {
        if (e.target.classList.contains("sort-btn")) {
            setShowSortDrop(prevState => !prevState);
            return;
        }
        if (e.target.classList.contains("price")) {
            setShowSortDrop(false);
            setSortProp("current_price");
            return;
        }
        if (e.target.classList.contains("mark-cap")) {
            setShowSortDrop(false);
            setSortProp("market_cap");
            return;
        }
        if (e.target.classList.contains("price-change")) {
            setShowSortDrop(false);
            setSortProp("price_change_24h");
            return;
        }
        if (e.target.classList.contains("menu-icon")) {
            console.log("radha maiya ji")
            setShowMenuDrop(prevState => !prevState);
            return;
        }
        if (e.target.classList.contains("menu-1")) {
            setShowMenuDrop(false);
            return;
        }
        if (e.target.classList.contains("menu-2")) {
            setShowMenuDrop(false);
            return;
        }
        if (e.target.classList.contains("menu-3")) {
            setShowMenuDrop(false);
            return;
        }
        if (e.target.classList.contains("menu-4")) {
            setShowMenuDrop(false);
            return;
        }
    }

    const filteredData = useMemo(() => {
        console.log(sortProp)
        console.log(typeof sortProp)
        const filteredData = cryptoData.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));

        if (!sortProp) {
            return filteredData;
        }
        filteredData.sort((a, b) => b[sortProp] - a[sortProp]);
        console.log(filteredData)
        return filteredData;

    }, [flag, sortProp]);

    useEffect(() => {
        if (filteredData.length !== 0) {
            console.log("krishna ji")

            dispatch(uiActions.hideMessage());
            dispatch(cryptoActions.replaceCryptos(filteredData));
        }
        else {
            dispatch(uiActions.showMessage("No items found"));
        }
    }, [flag, sortProp]);

    return (
        <div className="bg-background-color w-full h-20 flex justify-center items-center" onClick={handleDropDown}>
            <span className="ml-[2%] h-11 w-11 bg-primary text-[#fff] flex justify-center items-center">d</span>
            <div className="relative max-w-[300px] h-10 mx-auto flex justify-center gap-1 rounded-md shadow-sm">
                <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search..." value={input} onChange={handleChange}></input>
                <div ref={sortDropRef}>
                    <button className="sort-btn w-[70px] h-full py-1.5 rounded-md shadow-sm text-gray-400 font-semibold ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6 bg-[#fff]">Sort</button>
                    {showSortDrop && <div className="absolute w-[50%] p-1 right-0 top-11 bg-[#fff] rounded-md shadow-sm ring-1 ring-inset ring-indigo-600 z-[1]">
                        <li className="price w-full h-[35px] flex justify-center items-center border-b-2 border-gray-400 hover:border-indigo-600 hover:cursor-pointer">Price</li>
                        <li className="mark-cap w-full h-[35px] mt-1 flex justify-center items-center border-b-2 border-gray-400 hover:border-indigo-600 hover:cursor-pointer">Market Cap</li>
                        <li className="price-change w-full h-[35px] mt-1 flex justify-center items-center hover:border-indigo-600 hover:cursor-pointer">Price Change</li>
                    </div>}
                </div>
            </div>
            <div ref={menuDropRef} className="mr-[2%] md:hidden">
                <label className="relative"><FontAwesomeIcon
                    className="menu-icon"
                    icon={faBars}
                    style={{ fontSize: 20 }} />
                    {/* <input id="checkbox" type="checkbox" className="invisible w-0 peer"></input> */}
                    {showMenuDrop && <div className="absolute w-[150px] top-7 right-0 bg-gray-200 rounded-xl z-[1]">
                        <Suspense fallback={<span>Loading...</span>}>
                            <Menu />
                        </Suspense>
                    </div>}
                </label>
            </div>
        </div>
    );

}

export default Header;