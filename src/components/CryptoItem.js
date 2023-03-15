const CryptoItem = props => {

    const { imgURL, name, price, markCap, priceChange } = props;

    return <tr className="w-full">
        <td className="p-3 text-sm text-gray-700 flex justify-center items-center font-primary"><img className="w-[30px] h-[30]" src={imgURL} alt="crypto-img"></img></td>
        <td className="p-3 text-sm text-gray-700 text-center font-primary whitespace-nowrap">{name}</td>
        <td className="p-3 text-sm text-gray-700 text-center font-primary whitespace-nowrap">₹ {price}</td>
        <td className="p-3 text-sm text-gray-700 text-center font-primary whitespace-nowrap">{markCap}</td>
        <td className="p-3 text-sm text-gray-700 text-center font-primary whitespace-nowrap">{priceChange}</td>
    </tr>
}

export default CryptoItem;