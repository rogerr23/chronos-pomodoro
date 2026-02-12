import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Oi');
  return (
    <>
      <Heading attr={123} attr2='String '>
        Lebron James
      </Heading>
      <p> A B C D E F G H I</p>
    </>
  );
}
