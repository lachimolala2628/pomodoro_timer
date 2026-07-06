'use client'
import { useRef, useState, useEffect } from 'react'
import Navigation from './Navigation'
import { NavigationProvider, useNavigation } from '@/context/NavigationContext'

const sounds = [
    { id: 'cafe', label: 'Cafe', file: '/cafe.mp3' },
    { id: 'ambient', label: 'Ambient', file: '/ambient.mp3' },
    { id: 'brew', label: 'Brew', file: '/coffee.mp3' },
    { id: 'ocean', label: 'Ocean', file: '/oceanwaves.mp3' },
]

const ShellContent = ({ children }) => {
    const { isOpen, setIsOpen, setOpenSetting } = useNavigation()
    const [activeSound, setActiveSound] = useState(null)
    const soundRef = useRef()

    const toggleSound = (id) => {
        setActiveSound((prev) => (prev === id ? null : id))
    }

    useEffect(() => {
        if (!activeSound) {
            soundRef.current.pause()
            return
        }
        const track = sounds.find((s) => s.id === activeSound)
        soundRef.current.src = track.file
        soundRef.current.play()
    }, [activeSound])

    return (
        <>
            <div className='fixed top-4 right-4 z-50'>
                <Navigation
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setOpenSetting={setOpenSetting}
                    sounds={sounds}
                    activeSound={activeSound}
                    toggleSound={toggleSound}
                />
            </div>
            <audio ref={soundRef} loop />
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