import React from 'react'
import Like from './Like';

interface FooterProps {
    isFavorite: boolean;
    title: string;
    authorLabel: string;
    createdAtLabel:string;
    onClick:()=>void;
    disabled:boolean;
    }

const Footer = ({isFavorite,title,authorLabel,onClick,disabled,createdAtLabel}:FooterProps) => {
  return (
    <div className='relative bg-white p-3'>
       <p className="text-[13px] truncate max-w-[calc(100%-25px)]">
        {title}
       </p>
       <p className='opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate'>
        {authorLabel} • {createdAtLabel}
       </p>
          <Like isFavorite={isFavorite} onClick={onClick} disabled={disabled}/> 
        </div>
  )
}

export default Footer