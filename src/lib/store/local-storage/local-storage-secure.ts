
import secureLocalStorage from "react-secure-storage"

const setItem = (key: string, value: any) => {
    secureLocalStorage.setItem(key, value)
}

const getItem = (key: string) => {
    return secureLocalStorage.getItem(key)
}

const removeItem = (key: string) => {
    secureLocalStorage.removeItem(key)
}

const clearAll = () => {
    secureLocalStorage.clear()
}

const getList = (key: string) => {
    const tempData = secureLocalStorage.getItem(key)
    return tempData ? tempData : []
}

const SecureStorageService = {
    setItem,
    getItem,
    getList,
    removeItem,
    clearAll
}

export default SecureStorageService