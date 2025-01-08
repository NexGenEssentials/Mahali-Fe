'use client'
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react'

const DropdownHeader = ({title}:{title:string}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg text-nowrap font-semibold text-primaryGreen">title</h3>
        <button
          className={`px-2 py-1 text-white text-sm rounded `}
        >
          {isOpen ? (
          <Icon icon="uis:angle-up" width="24" height="24" className="text-primaryGreen"/>
        ) : (
          <Icon icon="uis:angle-up" width="24" height="24" className="text-primaryGreen" rotate={90} />
        )}
        </button>
      </div>
  )
}

export default DropdownHeader