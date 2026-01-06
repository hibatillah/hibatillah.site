declare module '*.webp' {
  import { StaticImageData } from 'next/image';
  const content: StaticImageData;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';