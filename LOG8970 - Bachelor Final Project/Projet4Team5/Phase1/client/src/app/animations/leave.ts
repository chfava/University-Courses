import { Animation } from "@ionic/core";

export function customLeaveAnimation(AnimationC: Animation, baseEl: HTMLElement): Promise<Animation> {
    const baseAnimation = new AnimationC();

    const backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector("ion-backdrop"));

    const wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector(".picker-wrapper"));

    backdropAnimation.fromTo("opacity", 0.26, 0.01);

    wrapperAnimation.fromTo("opacity", 1, 0);

    return Promise.resolve(
        baseAnimation
            .addElement(baseEl)
            .easing("cubic-bezier(.36,.66,.04,1)")
            .duration(50)
            .add(backdropAnimation)
            .add(wrapperAnimation)
    );
}
