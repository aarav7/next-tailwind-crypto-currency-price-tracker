const Card = props => {
    return <div className="w-[90%] h-full bg-[#fff] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.25)] overflow-y-auto">
        {props.children}
    </div>
}

export default Card;