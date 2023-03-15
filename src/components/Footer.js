import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';


const Footer = () => {
    const [contentLoaded, setContentLoaded] = useState(false);

    useEffect(() => {
        setContentLoaded(true);
    }, []);

    return (
        <div className="w-full h-[100px] bg-background-color flex justify-between items-center flex-col sm:flex-row sm:h-[80px]">
            <span className="mt-[2%] h-11 w-11 bg-primary text-[#fff] flex justify-center items-center sm:ml-[2%] sm:mt-0">d</span>
            <div className="mb-[2%] h-5 w-20 flex justify-around items-center sm:mr-[2%] sm:mb-0">
                {contentLoaded && <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    className="text-primary"
                />}
                {contentLoaded && <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    className="text-primary"
                />}
                {contentLoaded && <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className="text-primary"
                />}
            </div>
        </div>
    );
}

export default Footer;