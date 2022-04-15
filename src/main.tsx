import { createRoot } from 'react-dom/client'

import { App } from './app/app'

function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(document.getElementById('root')!)
  root.render(<App />)
}

bootstrap()
