import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react';
import React, { useLayoutEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';


const WindowWrapper = (Component, windowkey) => {
  const wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex, data } = windows[windowkey];
    const ref = useRef(null);

    // Extract windowPosition from data if available
    const windowPosition = data?.windowPosition || '';

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(el, { scale: 0.8, opacity: 0, y: 40 }, { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power3.out" },

      );


    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;
      const [instance] = Draggable.create(el, { onPress: () => focusWindow(windowkey) });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? "block" : "none";

    }, [isOpen]);




    return (
      <section id={windowkey} ref={ref} style={{ zIndex }}
        className={`absolute ${windowPosition}`}
      >
        <Component {...props} />
      </section>
    );
  };

  wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;


  return wrapped;



};

export default WindowWrapper

