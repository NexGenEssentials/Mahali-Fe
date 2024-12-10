import React from 'react'

const HeaderSection = ({title, subtitle}:{title:string, subtitle:string}) => {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
        {title && <div className="text-defaultGreen flex items-center gap-2">
          <span className="h-[2px] w-12 block bg-defaultGreen"></span>
          <h2 className="font-semibold text-lg leading-8 tracking-normal">
            {title}
          </h2>
          <span className="h-[2px] w-12 block bg-defaultGreen"></span>
        </div>}
        <h1 className="text-4xl font-bold ">{subtitle}</h1>
      </div>
  )
}

export default HeaderSection