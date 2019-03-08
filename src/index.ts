import * as React from 'react';

export interface Props {}

export default function useVirtualized() {
  const ref = React.useRef();
  return ref;
}
