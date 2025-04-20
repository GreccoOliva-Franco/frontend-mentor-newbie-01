'use client'

import 'client-only';

import { cn } from "@/lib/utils";
import NoSSR from 'next-no-ssr';
import { useState, useEffect } from "react";
import { Montserrat, Fraunces } from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'] })
const fraunces = Fraunces({ subsets: ['latin'] })

export default function Card() {
    const targetBreakpoint = "(max-width: 640px)";
    const [isMobile, setIsMobile] = useState(window.matchMedia(targetBreakpoint).matches);
  
    useEffect(() => {
        const event = window.matchMedia(targetBreakpoint);
        event.onchange = (e) => setIsMobile(e.matches);
    });
  
    return (
        <NoSSR>
            <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 sm:max-w-lg w-8/10 m-auto bg-white shadow-sm rounded-lg">
            <div>
                <img
                src={ isMobile ? '/image-mobile.jpg' : '/image-desktop.jpg' } 
                alt="Gabrielle Esence Eau de Parfum"
                className='size-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-r-none'
                />
            </div>
            <div className="p-5 flex flex-col justify-center gap-2.5 sm:gap-0 sm:justify-around">
                <h2 className={cn(
                'text-xs font-mono tracking-widest text-foreground-dimmed',
                montserrat.className,
                )}
                >
                PERFUME
                </h2>
                <h1 className={cn(
                'text-2xl font-bold sm:text-3xl',
                fraunces.className,
                )}>
                Gabrielle Essence Eau De Parfum
                </h1>
                <p className={cn(
                    'text-xs text-pretty text-foreground-dimmed',
                    montserrat.className
                )}
                >
                A floral, solar and voluptuous interpretation composed by Olivier Polge,
                Perfumer-Creator for the House of CHANEL.
                </p>
                <div className='flex items-center gap-4'>
                <span className={cn(
                    fraunces.className,
                    'text-2xl font-bold text-primary'
                )}>
                    $149.99
                </span>
                <span className='text-xs line-through text-foreground-dimmed'>
                    $169.99
                </span>
                </div>
                <button className={cn(
                    'flex justify-center items-center gap-2 p-3 rounded-md shadow-sm',
                    'text-xs text-primary-foreground bg-primary',
                    'hover:bg-primary-accent focus:bg-primary-accent',
                    'hover:cursor-pointer'
                )}
                >
                <img src='/icon-cart.svg'/>
                <div className='font-extrabold'>Add to Cart</div>
                </button>
            </div>
            </div>
        </NoSSR>
    );
  }