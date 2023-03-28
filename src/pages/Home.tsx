import { getTemples } from '@/api';

export default function Home() {
  getTemples(() => console.log(''));
  return <div>Home</div>;
}
