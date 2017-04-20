import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';

export default createDevTools(
  <DockMonitor
    defaultIsVisible={false}
    changeMonitorKey="ctrl-m"
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultPosition="bottom"
    defaultSize={0.4}
  >
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    <SliderMonitor />
  </DockMonitor>
);
