import React, { useEffect, useRef, useState } from 'react';
import Walk_1 from '../public/walk_1.png'
import Walk_2 from '../public/walk_2.png'
import Walk_3 from "../public/walk_3.png"
import Walk_4 from "../public/walk_4.png"

const IMGS = [Walk_1, Walk_2, Walk_3, Walk_4];

function Slider() {
    const [idx, setIdx] =useState(0);
    const timer =  useRef(null);

    useEffect(() => {
        start();
        return stop;
    },[idx]);

    const start = () => {
        stop();
        timer.current = setTimeout(() =>{
            setIdx((i) => (i + 1) % IMGS.length)
        },3000)
    } 

    const stop = () => {
        if (timer.current) {
            clearTimeout(timer.current);
            timer.current = null;
        }
    };

    return (
            <div className="slider" onMouseEnter={stop} onMouseLeave={start}>
      <div className="track" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {IMGS.map((src, i) => (
          <div className="slide" key={i}>
            <img src={src} alt={`메인 슬라이드 ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className="dots">
        {IMGS.map((_, i) => (
          <button
            key={i}
            className={i === idx ? "on" : ""}
            aria-label={`${i + 1}번 슬라이드로 이동`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div></div>
    );  
}

export default Slider