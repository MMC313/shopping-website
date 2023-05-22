import '../styles/Home.css'
import naraka from '../images/naraka-overlayed.jpg'
import d4 from '../images/d4.webp'
import tweak from '../images/tweak.png'
import cnet from '../images/cnet.png'
import pc from '../images/pc.webp'
import tech from '../images/tech.png'
import tomhw from '../images/tomhw.avif' 
import toms from '../images/toms.avif'
import { useEffect, useState } from 'react'




const scene1 = (
    <div className="home-content">
        <div className='home-content-main'>
            <img className='content-overlay content-overlay-naraka' src={naraka} alt="naraka" />
            <div className='content-description' key={1}>
                <h2 className='content-description-h2'>
                    PLUG-N-PLAY
                </h2>
                <h3 className='content-description-h3'>
                    WITH <span className='content-description-webname'>MARTIAN MACHINES</span>
                </h3>
                <h4 className='content-description-h4'>
                    Limited Time Promotions for Peformance that is Out of this World
                </h4>
                <button className='content-description-shopbtn'>BUY NOW</button>
            </div>
        </div>
        <div className='home-content-testimonial'>
            <h3 className='home-content-testimonial-title'>WHY BUY FROM US?</h3>
            <div className='home-content-testimonial-info'>When it comes to purchasing graphics cards, Martian Machines offers a compelling choice that sets them apart from the competition. Their commitment to technological innovation and superior performance makes them an ideal choice for both gaming enthusiasts and professionals. Martian Machines' graphics cards are meticulously designed and optimized to deliver exceptional graphics rendering, allowing users to experience breathtaking visuals and immersive gaming experiences. Furthermore, their cards are built with the latest advancements in graphics processing technology, ensuring smooth gameplay and efficient multitasking capabilities. With a reputation for reliability and durability, Martian Machines provides a range of options to suit different budgets and requirements, making them a trusted brand in the world of graphics cards. Whether you're a casual gamer or a demanding professional, choosing Martian Machines means investing in cutting-edge technology that elevates your graphics experience to new heights.</div>
        </div>
    </div>
)

const scene2 = (
    <div className="home-content">
        <div className='home-content-main'>
            <img className='content-overlay content-overlay-diablo' src={d4} alt="Diablo 4" />
            <div className='content-description' key={2}>
                <h2 className='content-description-diablotitle,content-description-h2'>
                    RISE AGAINST EVIL
                </h2>
                <h4 className='content-description-h4' >
                    Get <span className='content-description-game'>Diablo IV</span> With a Purchase of Select GeForce RTX 40 Series Cards.<span className='content-description-ast' >*</span>
                </h4>
                <div className='content-description-smallprint'>
                    <span className='content-description-ast'>*</span>For a limited time, get Diablo® IV with the purchase of a qualifying GeForce RTX 4090, 4080, 4070 Ti, 4070
                </div>
                <button className='content-description-shopbtn'>BUY NOW</button>
            </div>
        </div>
        <div className='home-content-testimonial'>
            <h3 className='home-content-testimonial-title'>WHY BUY FROM US?</h3>
            <div className='home-content-testimonial-info'>When it comes to purchasing graphics cards, Martian Machines offers a compelling choice that sets them apart from the competition. Their commitment to technological innovation and superior performance makes them an ideal choice for both gaming enthusiasts and professionals. Martian Machines' graphics cards are meticulously designed and optimized to deliver exceptional graphics rendering, allowing users to experience breathtaking visuals and immersive gaming experiences. Furthermore, their cards are built with the latest advancements in graphics processing technology, ensuring smooth gameplay and efficient multitasking capabilities. With a reputation for reliability and durability, Martian Machines provides a range of options to suit different budgets and requirements, making them a trusted brand in the world of graphics cards. Whether you're a casual gamer or a demanding professional, choosing Martian Machines means investing in cutting-edge technology that elevates your graphics experience to new heights.</div>
        </div>
        <div className='home-content-awards'>
            <img src={toms} alt="toms" className='home-content-award'/>
            <img src={tomhw} alt="tomhw" className='home-content-award'/>
            <img src={pc} alt="pc" className='home-content-award'/>
            <img src={cnet} alt="cnet" className='home-content-award'/>
            <img src={tweak} alt="tweak" className='home-content-award'/>
            <img src={tech} alt="tech" className='home-content-award' />
        </div>
    </div>
)





function Home(){
    const [scene,setScene] = useState(scene2)

    
    
    function switchScene(){
        let timerSet;

        timerSet = setTimeout(function(){
            if(scene === scene1){
                setScene(scene2)
            }else setScene(scene1)
        },5000)
    }

    switchScene()
    

    return(
        scene
    )
}

export default Home;