declare class BrewwEasings {
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
export { BrewwEasings as default };
