async function importCss(fileName: string): Promise<void> {
    const cssModule = await import(`animate.css/source/${fileName}`);
    // Do something with the CSS module, e.g., append it to the document
    const styleElement = document.createElement('style');
    styleElement.textContent = cssModule.default;
    document.head.appendChild(styleElement);
  }
 
  export function applyCss(className: string): void {
    switch (className) {
        case 'bounce':
          importCss('attention_seekers/bounce.css');
          break;
        case 'flash':
          importCss('attention_seekers/flash.css');
          break;
        case 'pulse':
          importCss('attention_seekers/pulse.css');
          break;
        case 'rubberBand':
          importCss('attention_seekers/rubberBand.css');
          break;
        case 'shake':
          importCss('attention_seekers/shake.css');
          break;
        case 'headShake':
          importCss('attention_seekers/headShake.css');
          break;
        case 'swing':
          importCss('attention_seekers/swing.css');
          break;
        case 'tada':
          importCss('attention_seekers/tada.css');
          break;
        case 'wobble':
          importCss('attention_seekers/wobble.css');
          break;
        case 'jello':
          importCss('attention_seekers/jello.css');
          break;
        case 'heartBeat':
          importCss('attention_seekers/heartBeat.css');
          break;
        default:
          throw new Error(`Invalid CSS class: ${className}`);
      }
      
  }
  