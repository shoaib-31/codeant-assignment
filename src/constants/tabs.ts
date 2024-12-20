export const tabs = ["SAAS", "Self Hosted"] as const;
export type TabType = (typeof tabs)[number];
