'use client'
import Navigation from './Navigation'
import { NavigationProvider, useNavigation } from '@/context/NavigationContext'

const ShellContent = ({ children }) => {
    const { isOpen, setIsOpen, setOpenSetting } = useNavigation()

    return (
        <>
            <div className='fixed top-4 right-4 z-50'>
                <Navigation
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setOpenSetting={setOpenSetting}
                />
            </div>
            {children}
        </>
    )
}

const AppShell = ({ children }) => {
    return (
        <NavigationProvider>
            <ShellContent>{children}</ShellContent>
        </NavigationProvider>
    )
}

export default AppShell