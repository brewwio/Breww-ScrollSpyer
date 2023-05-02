export const AnimateCss = {
    fadeUpAnimation: (element: HTMLElement) => {
      // implementation here
    },
    fadeDownAnimation: (element: HTMLElement) => {
      // implementation here
    },
    initAnimation: (section: HTMLElement, animLibrary: string, animType: string) => {
      if (animLibrary && animLibrary.trim() !== '') {
        section.classList.add(animLibrary.trim());
        section.classList.add(animType.trim());
      }
    },
    revertAnimation: (elements: NodeListOf<HTMLElement>, animLibrary: string, animType: string) => {
      elements.forEach((element) => {
        const section = element;
        if (animLibrary && animLibrary.trim() !== '') {
          section.classList.remove(animType.trim());
        }
      });
    }
  };
  