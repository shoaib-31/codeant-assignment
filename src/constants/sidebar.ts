import HomeIcon from "@/assets/sidebar/home.svg";
import CodeReviewIcon from "@/assets/sidebar/code.svg";
import CloudSecurityIcon from "@/assets/sidebar/cloud.svg";
import HowToUseIcon from "@/assets/sidebar/book.svg";
import SettingsIcon from "@/assets/sidebar/gear.svg";
import SupportIcon from "@/assets/sidebar/phone.svg";
import LogoutIcon from "@/assets/sidebar/sign-out.svg";
import { FC, SVGProps } from "react";

export interface SideBar {
  title: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  href: string;
}

const sidebarOptions: SideBar[] = [
  {
    title: "Repositories",
    icon: HomeIcon,
    href: "/repositories",
  },
  {
    title: "AI Code Review",
    icon: CodeReviewIcon,
    href: "/ai-code-review",
  },
  {
    title: "Cloud Security",
    icon: CloudSecurityIcon,
    href: "/cloud-security",
  },
  {
    title: "How to Use",
    icon: HowToUseIcon,
    href: "/how-to-use",
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    href: "/settings",
  },
  {
    title: "Support",
    icon: SupportIcon,
    href: "/support",
  },
  {
    title: "Logout",
    icon: LogoutIcon,
    href: "/",
  },
];

export default sidebarOptions;
