import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {

    const [stuff, setStuff] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if(stuff === true){
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    }, [stuff]);

    return [stuff, setStuff];
}