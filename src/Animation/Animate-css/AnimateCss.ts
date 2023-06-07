import { AnimationOptionsInterface } from "../../Common_interfaces/Animation_Interface"
const animLibrary = "animated"
export default class AnimateCss {

  private static async initAnimation(
    section: HTMLElement,
    animationOptions: AnimationOptionsInterface
  ) {
    const animtype = section.getAttribute("anim-type")
    if (animtype && animtype.trim() !== "") {
      section.classList.add(animLibrary)
      section.classList.add(animtype.trim())
    }
  }

  private static revertAnimation(sections: NodeListOf<HTMLElement>) {
    const sectionsArray = Array.from(sections)
    sectionsArray.forEach((section) => {
      const animtype = section.getAttribute("anim-type")
      if (animtype && animtype.trim() !== "") {
        section.classList.remove(animtype.trim())
      }
    })
  }

  public  Bewwopacity(
    sections: NodeListOf<HTMLElement>,
    animateDistance: number
  ) {
    window.addEventListener("scroll", updateOpacity)
    function updateOpacity() {
      const windowHeight = window.innerHeight
      const scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
          ((document.documentElement && document.documentElement.scrollTop) ||
            0)

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        // Calculate the distance from the section's top to the center of the viewport
        const distanceToCenter =
          windowHeight / 2 - (sectionTop + sectionHeight / 2 - scrollPosition)

        // Calculate the maximum distance from the center for full opacity
        const maxDistanceToCenter = windowHeight / 2

        // Calculate the opacity based on the scroll position
        let opacity = 0

        if (distanceToCenter < 0) {
          opacity = 1 + distanceToCenter / maxDistanceToCenter
        } else {
          opacity = 1 - distanceToCenter / maxDistanceToCenter
        }

        // Ensure opacity is within the valid range of 0 to 1
        opacity = Math.max(0, Math.min(1, opacity))

        section.style.opacity = opacity.toString()
      })
    }
  }
  public animateTwoWay(
    section: HTMLElement,
    sections: NodeListOf<HTMLElement>,
    animationOptions: AnimationOptionsInterface
  ) {
    if (!animationOptions.enabled) return false
    if (!(section instanceof HTMLElement)) {
      throw new Error("First argument must be of type HTMLElement")
    }

    if (
      !(sections instanceof NodeList) ||
      sections.length === 0 ||
      !(sections[0] instanceof HTMLElement)
    ) {
      throw new Error(
        "Second argument must be of type NodeListOf<HTMLElement> and cannot be empty"
      )
    }
    AnimateCss.revertAnimation(sections)
    AnimateCss.initAnimation(section, animationOptions)
  }

  public animateOneWay(
    section: HTMLElement,
    animationOptions: AnimationOptionsInterface
  ) {
    if (!animationOptions.enabled) return false
    if (!(section instanceof HTMLElement)) {
      throw new Error("First argument must be of type HTMLElement")
    }
    AnimateCss.initAnimation(section, animationOptions)
  }
}

