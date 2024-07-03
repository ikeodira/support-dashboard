import { PersonStandingIcon } from 'lucide-react'
import React from 'react'

function MenuTitle() {
    return (
        <h4 className='flex items-center'>
            <PersonStandingIcon size={40} className='text-pink-500' /> SupportMe
        </h4>
    )
}

export default MenuTitle