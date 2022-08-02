import React from 'react';
import gym from '../../Assest/Image/gym.png';
import lounge from '../../Assest/Image/lounge.png';
import play from '../../Assest/Image/play.png';
import gazebo from '../../Assest/Image/gazebo.png';
import plaza from '../../Assest/Image/plaza.png';
import threater from '../../Assest/Image/threater.png';
export const ThirdSection = () => {
    return (
        <div className='pj-third-section'>
            <div className='pj-third-section-left'>
                <div></div>
            </div>
            <div className='pj-third-section-middle'>
                <h1>Stunning Luxury Amenities, Designed For Life</h1>
                <div className='pj-third-section-middle-container'>
                    <div><span><img src={plaza} /></span> <h1>Central Plaza</h1></div>
                    <div><span><img src={gazebo} /></span> <h1>Gazebo</h1></div>
                    <div><span><img src={play} /></span> <h1>Kids Play Area + Multipurpose Play Court</h1></div>
                </div>
                <div className='pj-third-section-middle-container'>
                    <div><span><img src={threater} /></span> <h1>Home Theater</h1></div>
                    <div><span><img src={lounge} /></span> <h1>Lounge</h1></div>
                    <div><span><img src={gym} /></span> <h1>Gym</h1></div>
                </div>
            </div>

            <div className='pj-third-section-right'>
            <div></div>
            </div>
        </div>
    )
}