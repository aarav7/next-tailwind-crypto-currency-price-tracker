import Card from './ui/Card';
import CryptoItem from './CryptoItem';
import { useSelector } from 'react-redux';

const Cryptos = () => {

    const filteredData = useSelector(state => state.crypto.cryptos);
    const { show, message } = useSelector(state => state.ui);

    const cryptoList = filteredData.map((item, id) => <CryptoItem key={item.id} id={id} imgURL={item.image} name={item.name} price={item.current_price} markCap={item.market_cap} priceChange={item.price_change_24h} />)

    return (
        <Card>

            {!show &&
                (<table className="w-full">
                    <thead className="bg-gray-50 border-b-2 border-gray-200 sticky top-0">
                        <tr className="">
                            <th className="p-3 text-sm font-semibold text-center">Icon</th>
                            <th className="p-3 text-sm font-semibold text-center">Name</th>
                            <th className="p-3 text-sm font-semibold text-center">Price</th>
                            <th className="p-3 text-sm font-semibold text-center">Market Cap</th>
                            <th className="p-3 text-sm font-semibold text-center">Price Change</th>
                        </tr>
                    </thead>
                    <tbody>{cryptoList}</tbody>
                </table>)
            }
            {show && (<div className="p-3 mx-auto w-[200px] text-center">{message}</div>)}
        </Card >
    );
}

export default Cryptos;