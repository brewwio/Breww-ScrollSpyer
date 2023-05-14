export async function importCss(fileName : any) {
  const cssModule = await import(`../../../node_modules/animate.css/source/${fileName}.css`);
  const styleElement = document.createElement('style');
  styleElement.textContent = cssModule.default;
  document.head.appendChild(styleElement);
}

export function applyCss(className : any) {
  switch (className) {
    case 'bounce':
      importCss('attention_seekers/bounce');
      break;
    case 'flash':
      importCss('attention_seekers/flash');
      break;
    case 'pulse':
      importCss('attention_seekers/pulse');
      break;
    case 'rubberBand':
      importCss('attention_seekers/rubberBand');
      break;
    case 'shake':
      importCss('attention_seekers/shake');
      break;
    case 'headShake':
      importCss('attention_seekers/headShake');
      break;
    case 'swing':
      importCss('attention_seekers/swing');
      break;
    case 'tada':
      importCss('attention_seekers/tada');
      break;
    case 'wobble':
      importCss('attention_seekers/wobble');
      break;
    case 'jello':
      importCss('attention_seekers/jello');
      break;
    case 'heartBeat':
      importCss('attention_seekers/heartBeat');
      break;
    default:
      throw new Error(`Invalid CSS class: ${className}`);
  }
}
