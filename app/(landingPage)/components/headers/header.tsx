import React from 'react'

export const HeaderSection = ({title, subtitle, description}:{title:string, subtitle:string, description?:string}) => {
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
        <p className='w-full md:w-2/4 mx-auto flex items-center justify-center text-sm text-slate-400 text-center'>{description}</p>
      </div>
  )
}

export const SingleHeaderSection = ({title}:{title:string}) => {
  return (
    <div className="w-full">
       <div className="text-defaultGreen flex items-center gap-2">
          <span className="h-[5px] w-8 block bg-defaultGreen"></span>
          <h2 className="font-semibold text-4xl tracking-normal">
            {title}
          </h2>
        </div>
      </div>
  )
}
