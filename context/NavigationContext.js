'use client'
import { createContext, useContext, useState } from 'react'

const NavigationContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
    openSetting: false,
    setOpenSetting: () => {},
})

export const useNavigation = () => useContext(NavigationContext)

export const NavigationProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [openSetting, setOpenSetting] = useState(false)

    return (
        <NavigationContext.Provider value={{ isOpen, setIsOpen, openSetting, setOpenSetting }}>
            {children}
        </NavigationContext.Provider>
    )
}