import React from 'react'
import { cn } from '../../lib/utils'

interface Props {
    width: number
    src: string
    alt: string
    height?: number
    className?: string
}
const ImageIcons: React.FC<Props> = ({ width, src, alt, height, className }) => {
    return (
        <div className={cn("object-contain", className)}>
            <img src={src} alt={alt} width={width} height={height} />
        </div>
    )
}

export default ImageIcons