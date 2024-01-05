import { logOnDev } from '@/utils/logger';
import { UploadCloudIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const checkScrollTop = () => {
        if (!visible && document.documentElement.scrollTop > 400) {
            setVisible(true);
        } else if (visible && document.documentElement.scrollTop <= 400) {
            setVisible(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    });

    useEffect(() => {
        logOnDev(visible)
    }, [visible])

    return (
        <UploadCloudIcon
            className={`scrollTop fixed bottom-5 right-2 z-10 cursor-pointer animate-fadeIn transition-opacity duration-400 opacity-50 ${visible ? 'flex' : 'hidden'}`}
            onClick={scrollTop}
            style={{ height: 40 }}
        />
    );
};

export default ScrollToTop;
