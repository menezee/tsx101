import React from 'react';
import { createRoot } from 'react-dom/client';

import Button from "./components/button";

const container = document.querySelector('body');
const root = createRoot(container);

root.render(
  <Button>
    Click me!
  </Button>
);
