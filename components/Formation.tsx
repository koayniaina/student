'use client'
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Formation() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    
  }, []);
  return (
    <main>
      <span className="fm" data-aos="fade-right" data-aos-duration="2000">Training</span>
      <div className="card">
        <div className="grid " data-aos="fade-up" data-aos-duration="3000">
          <div className="w-[350px] cards">
            <h4>Vision & Strategy</h4>
            <p>
              "Think globally, act nationally" is the guiding principle that
              will guide all of the University's policies and actions.
            </p>
            <button>Join</button>
          </div>
          <div className="cards w-[350px]">
            <h4>Training & Careers</h4>
            <p>
              The employability of our students becomes our concern. Our
              training offers are accredited.
            </p>
            <button>Join</button>
          </div>
          <div className="cards w-[350px]">
            <h4>Research & Development</h4>
            <p>
              Doctoral Schools and laboratories supervise doctoral students and
              researchers capable of creating
            </p>
            <button>Join</button>
          </div>
        </div>
      </div>
    </main>
  );
}
