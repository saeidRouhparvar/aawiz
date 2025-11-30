import React, { FC } from 'react'
import { ToggleButton } from './ui/ToggleButton'
import { Icon } from './icons/icon'

type TopBarProps = {
    menuClick:() => void
}
const TopBar:FC<TopBarProps> = ({menuClick}) => {
    return (
        <div className='flex justify-between items-center bg-neutV-50 p-4'>
            <div className="flex justify-between w-full">
                <div className="lg:hidden sm:block" onClick={menuClick}>
                    <Icon name='burger' w={30} h={30} color='var(--lime-800)' className='cursor-pointer' />
                </div>
                <div className="flex justify-between w-full">
                    <div className=""></div>
                    <ToggleButton />
                </div>
            </div>
        </div>
    )
}

export default TopBar