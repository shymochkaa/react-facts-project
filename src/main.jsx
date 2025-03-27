import { createRoot } from 'react-dom/client'
import './index.css'


const root = createRoot(document.getElementById('root'))

root.render(
  <main>
    <img className='react-logo' src="/src/assets/react.svg"  alt="Light blue atomic-style symbol with three intersecting elliptical orbits around a central blue circle, representing the interconnected nature of React's component-based architecture" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
)
