import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/navbar';

export const Route = createFileRoute('/contact')({
  component: Component,
});

function Component() {
  return (
    <div className="bg-white h-screen w-">
      <Navbar />
    </div>
  )
}