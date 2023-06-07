export default class BrewwAnimations{
    
 public static Bewwopacity(
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
          (windowHeight / 2 - (sectionTop + sectionHeight / 2 - scrollPosition)) 

        // Calculate the maximum distance from the center for full opacity
        const maxDistanceToCenter = (windowHeight / 2)

        // Calculate the opacity based on the scroll position
        let opacity = 0

        if (distanceToCenter + animateDistance < 0) {
          opacity = 1 + distanceToCenter  / maxDistanceToCenter
        } else {
          opacity = 1 - distanceToCenter / maxDistanceToCenter
        }

        // Ensure opacity is within the valid range of 0 to 1
        opacity = Math.max(0, Math.min(1, opacity))

        section.style.opacity = opacity.toString()
      })
    }
  }

}