export * from 'gsap';
export * from 'gsap/ScrollTrigger';
export * from '@gsap/react';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);
