import Canvas from './components/Canvas';
import { AnimatedText } from './components/AnimatedText';

export default function Home() {

  return (
    <main className='w-screen h-screen'>
      <div className="absolute headline top-4 left-4 text-black z-10">
      <AnimatedText>Under Construction</AnimatedText>
       </div>
     <Canvas />
    </main>
  );
}
