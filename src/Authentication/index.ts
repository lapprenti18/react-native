import { assets as onBoardingAssets} from "./Onboarding";
import { assets as WelcomeAssets } from "./Welcome";
export { default as Onboarding } from "./Onboarding";
export { default as Welcome } from "./Welcome";
export const assets = [ ...onBoardingAssets, ...WelcomeAssets];