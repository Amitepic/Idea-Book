
import SecondPage from '../Rightsecondpage/SecondPage.jsx';
import './RightAside.css';




const RightAside = () => {
    return(
        <>
        <div className='rightaside'>
            <div className='img-container'><img src="https://s3-alpha-sig.figma.com/img/f2b5/d356/00b6d4748cd536df01bd2b4fecc1d821?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnwRGxtw1~EqeklapJgm-8IVCBCPlgxCYfaV3kg5bsaVR4ZabI1OjJxSfT3dLLSzTJutqMR4fVUEmd45YaceoAeoASaCT3PTjERB3dEyFCl4k01BavItwQLZ4poG3XkeqYc6mU-zpNQJarCMP76B8Zid0psBiRWaPUmUD7bdHBJ~DsvcnsIaa4s~sScxNzQgEiRK4L0Sz50Di3wkWDCSsVAAkY4N6lsGPogsBFi2cfJrUhM~pasjBGujW1xhA83EHDGO8bMZ73fci9uudPoM8sqbEJ7PTpD5eIrqtzfC14dMSIZgkargZAtjwbJMxfm9CrLryUyFrf7rgZCdnWlOwg__" alt='photo' />
           </div>
             <h1>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online.
               Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
            <p>end-to-end encrypted</p>

            
            
         
        </div>

        <div className='right-second-page'>
            <SecondPage />
        </div>
        
        </>      
        

    )
}

export default RightAside;