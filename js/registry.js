// js/registry.js
import * as basicradar from './generators/basicradar.js';
import * as microwaves from './generators/microwaves.js';
import * as txrx from './generators/txrx.js';
import * as radtech from './generators/radtech.js';
import * as iffflir from './generators/iffflir.js';
import * as recce from './generators/recce.js';
import * as ew from './generators/ew.js';

export const registry = {
  basicradar,
  microwaves,
  txrx,
  radtech,
  iffflir,
  recce,
  ew,

  get(topic) {
    const gen = this[topic];
    if (!gen || typeof gen.generate !== 'function') {
      throw new Error(`No generator for: ${topic}`);
    }
    return gen;
  }
};

window.registry = registry;
