// js/utils.js - Shared utilities for Radar Revision App

export function countDecimals(value) {
  if (Math.floor(value) !== value) {
    return value.toString().split('.')[1].length || 0;
  }
  return 0;
}

export function rndgen(lower, upper, dp, step, fix) {
  step = step * Math.pow(10, dp);
  if (fix === -1) {
    let tmp;
    do {
      tmp =
        (Math.floor(
          Math.random() *
            ((upper * Math.pow(10, dp)) / step - (lower * Math.pow(10, dp)) / step + 1) +
            (lower * Math.pow(10, dp)) / step
        ) /
          Math.pow(10, dp)) *
        step;
    } while (countDecimals(tmp) > dp);
    return tmp;
  }
  return (
    (Math.floor(
      Math.random() *
        ((upper * Math.pow(10, dp)) / step - (lower * Math.pow(10, dp)) / step + 1) +
        (lower * Math.pow(10, dp)) / step
    ) /
      Math.pow(10, dp)) *
    step
  ).toFixed(fix);
}

export function dp(num, scale, fix) {
  if (!('' + num).includes('e')) {
    const rounded = +(Math.round(num + 'e+' + scale) + 'e-' + scale);
    return fix === -1 ? rounded : rounded.toFixed(fix);
  }
  const arr = ('' + num).split('e');
  const sig = +arr[1] + scale > 0 ? '+' : '';
  const rounded = +(Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) + 'e-' + scale);
  return fix === -1 ? rounded : rounded.toFixed(fix);
}

export function thouSep(value, sep) {
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, sep);
}

export function QLimitRepeats(arr, x) {
  let sum;
  do {
    sum = rndgen(1, x, 0, 1, -1);
  } while (arr.includes(sum));
  arr.push(sum);
  if (arr.length > Math.ceil(x / 2)) {
    arr.shift();
  }
  return arr;
}

export function eqnformat(id) {
  if (window.MathJax && MathJax.Hub) {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, id]);
  }
}

export function removeLeadbr(txt) {
  while (txt.indexOf('<br>') === 0) {
    txt = txt.replace('<br>', '');
  }
  return txt;
}

export function isCanvasBlank(canvas) {
  return !canvas
    .getContext('2d')
    .getImageData(0, 0, canvas.width, canvas.height)
    .data.some((channel) => channel !== 0);
}

// Image preloading — all diagram PNGs used by generators
const imageSources = [
  'images/basiccwblk.png',
  'images/basicfmcwblk.png',
  'images/basicmopablk.png',
  'images/basicpulsedopblk.png',
  'images/basicradblk.png',
  'images/basicradblklblq.png',
  'images/basicradblkwavea.png',
  'images/basicradblkwaveq.png',
  'images/cavityfields.png',
  'images/cavitysect.png',
  'images/chokeflange.png',
  'images/famopablk.png',
  'images/flirblk.png',
  'images/ftcpulsesa.png',
  'images/ftcpulsesq.png',
  'images/hpotxblk.png',
  'images/iffssrblk.png',
  'images/iffssrmodesa.png',
  'images/iffssrmodesq.png',
  'images/jetsclosing.png',
  'images/jetsopening.png',
  'images/raptorimagetypesa.png',
  'images/raptorimagetypesq.png',
  'images/rwrblk.png',
  'images/superhetrxblk.png',
  'images/Cosbadge.png'
];

export const images = {};

export function loadImages() {
  imageSources.forEach((src) => {
    const name = src.split('/').pop().replace('.png', '');
    const img = new Image();
    img.src = src;
    images[name] = img;
    // Legacy bare names used by original modules (e.g. basicradblk)
    window[name] = img;
  });
}

window.eqnformat = eqnformat;
window.rndgen = rndgen;
window.dp = dp;
window.thouSep = thouSep;
window.QLimitRepeats = QLimitRepeats;
window.loadImages = loadImages;
window.removeLeadbr = removeLeadbr;
