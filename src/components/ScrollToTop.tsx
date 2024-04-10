import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const scrollThreshold = 1200;

    const checkScrollTop = () => {
        if (!visible && document.documentElement.scrollTop > scrollThreshold) {
            setVisible(true);
        } else if (visible && document.documentElement.scrollTop <= scrollThreshold) {
            setVisible(false);
        }
    };

    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    });

    // useEffect(() => {
    //     logOnDev(visible)
    // }, [visible])

    return (
        <>
            {/* <ArrowUpFromDotIcon
                className={`scrollTop fixed bottom-5 right-2 z-10 cursor-pointer animate-fadeIn transition-opacity duration-400 opacity-50 ${visible ? 'flex' : 'hidden'}`}
                onClick={scrollTop}
                style={{ height: 40 }}
            /> */}
            <p className={`scrollTop fixed bottom-1 right-2 z-10 cursor-pointer animate-fadeIn transition-opacity duration-400 opacity-50 ${visible ? 'flex' : 'hidden'}`}
                onClick={scrollTop}
                style={{ height: 40 }}
            >Scrool to top</p>
        </>
    );
};

export default ScrollToTop;
