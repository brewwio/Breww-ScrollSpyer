declare class BrewwAnimations {
    /**
    Sets the opacity of the given section based on scroll position and distance from the center of the viewport.
    @param section - The section element to apply the opacity effect to.
    @param windowHeight - The height of the viewport.
    @param scrollPosition - The current scroll position of the window.
    @param animateDistance - The distance from the center of the viewport at which the section should start fading.
    @since 1.0.0
    #returns void
    @NOTE  ---------------------------------------- >>>> :-) :-) -------------------->
    Currently opacity is set to default, it's one of the most famous styles or animations used by worldwide developers, so we implemented it first. Currently, we are planning to add more animations and transforms. But we did not want to give a bad impression, so we have enabled users to use third-party animation libraries. Currently, we support 'animate'.
    **/
    /**
     Sets the opacity of the given section based on scroll position and distance from the center of the viewport.
     @param section - The section element to apply the opacity effect to.
     @param windowHeight - The height of the viewport.
     @param scrollPosition - The current scroll position of the window.
     @param animateDistance - The distance from the center of the viewport at which the section should start fading.
     @since 1.0.0
     #returns void
     @NOTE  ---------------------------------------- >>>> :-) :-) -------------------->
     Currently opacity is set to default, it's one of the most famous styles or animations used by worldwide developers, so we implemented it first. Currently, we are planning to add more animations and transforms. But we did not want to give a bad impression, so we have enabled users to use third-party animation libraries. Currently, we support 'animate'.
     **/
    static Bewwopacity(sections: NodeListOf<HTMLElement>, animateDistance: number): void;
    static linear(p: number): number;
    static easeInQuad(t: number, b: number, c: number, d: number): number;
    static easeOutQuad(t: number, b: number, c: number, d: number): number;
    static easeInOutQuad(t: number, b: number, c: number, d: number): number;
    static easeInCubic(t: number, b: number, c: number, d: number): number;
    static easeOutCubic(t: number, b: number, c: number, d: number): number;
    static easeInOutCubic(t: number, b: number, c: number, d: number): number;
    static easeInQuart(t: number, b: number, c: number, d: number): number;
    static easeOutQuart(t: number, b: number, c: number, d: number): number;
    static easeInOutQuart(t: number, b: number, c: number, d: number): number;
    static easeInQuint(t: number, b: number, c: number, d: number): number;
    static easeOutQuint(t: number, b: number, c: number, d: number): number;
    static easeInOutQuint(t: number, b: number, c: number, d: number): number;
    static easeInSine(t: number, b: number, c: number, d: number): number;
    static easeOutSine(t: number, b: number, c: number, d: number): number;
    static easeInOutSine(t: number, b: number, c: number, d: number): number;
    static easeInExpo(t: number, b: number, c: number, d: number): number;
    static easeOutExpo(t: number, b: number, c: number, d: number): number;
    static easeInOutExpo(t: number, b: number, c: number, d: number): number;
    static easeInCirc(t: number, b: number, c: number, d: number): number;
    static easeOutCirc(t: number, b: number, c: number, d: number): number;
    static easeInOutCirc(t: number, b: number, c: number, d: number): number;
    static easeOutElastic(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number;
    static easeOutBounce(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number;
}
export { BrewwAnimations as default };
