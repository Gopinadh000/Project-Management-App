import {  useEffect  , useState} from 'react'

const useScreenSizeHook = () => {
    const [ screenSize , setScreenSize]= useState({
        innerHeight : window.innerHeight,
        innerWidth :window.innerWidth,
        screensize :'sm'
    })



    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateScreenSize = ()=>{

         const windowwidth = window.innerWidth
         let screendata = ''

        if(windowwidth  <  320){
            screendata = 'vsm'
        }else if (windowwidth > 340 && windowwidth < 480 ){
            setScreenSize({...screenSize , screensize : 'sm'})
            screendata = 'sm'
        }else if (windowwidth > 480  && windowwidth < 820){
          
            screendata = 'md'
        }else if (windowwidth > 820  && windowwidth < 1200){
            screendata ='lg'
        }else {
            screendata ='xl'
        }


        setScreenSize({
            innerHeight:window.innerHeight ,    
            innerWidth :window.innerWidth ,
            screensize :screendata
        })
       
    }

    useEffect(()=>{ 
        window.addEventListener('resize', updateScreenSize);
        console.log('Event listener added for resize');
        // Cleanup the event listener when the component unmounts
    return () => {
        window.removeEventListener('resize', updateScreenSize); 
        console.log('Event listener removed for resize');
      };
    },[ ])

  return {screenSize }
}

export default useScreenSizeHook
