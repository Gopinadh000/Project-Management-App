import React from 'react';


interface AvatarProps {
    imgurl :string,
    imgheight?:string,
    imgwidth? :string,
    rounded? : boolean,
}

const Avatar :React.FC<AvatarProps> = ({imgurl , imgheight= "full", imgwidth="full", rounded}) => {
  return (
    <div className={`h-${imgheight} w-${imgwidth} ${rounded && "rounded-full " }`}>
      <img src={imgurl} alt={imgurl}  className='m-auto h-full' />
    </div>
  )
}

export default Avatar
