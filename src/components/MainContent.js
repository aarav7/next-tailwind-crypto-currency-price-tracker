import Menu from './Menu';
import Cryptos from './Cryptos';

const MainContent = () => {

    return (
        <div className="w-full h-[calc(100%_-_80px)] p-1.5 gap-1.5 flex justify-center items-center bg-background-color">
            <div className="hidden p-[4px] bg-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.25)] md:block md:w-[20%] md:h-full"><Menu /></div>
            <div className="w-[100%] min-w-[80%] h-full pb-3 flex justify-center items-center">
                <Cryptos />
            </div>
        </div>
    );
}

export default MainContent;