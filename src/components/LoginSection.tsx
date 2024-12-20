import { TabType } from "@/constants/tabs";
import React from "react";
import Github from "@/assets/github.svg";
import Bitbucket from "@/assets/bitbucket.svg";
import Azure from "@/assets/azure.svg";
import Gitlab from "@/assets/gitlab.svg";
import Key from "@/assets/key.svg";
import LoginButton from "@/components/LoginButton";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next-nprogress-bar";

const SAASLoginOptions = [
  {
    name: "Github",
    icon: Github,
  },
  {
    name: "Bitbucket",
    icon: Bitbucket,
  },
  {
    name: "Azure Devops",
    icon: Azure,
  },
  {
    name: "GitLab",
    icon: Gitlab,
  },
];

const LoginSection = ({ activeTab }: { activeTab: TabType }) => {
  const direction = activeTab === "SAAS" ? -1 : 1;
  const animationVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: {
        duration: 0.3,
      },
    }),
  };
  const router = useRouter();
  const handleLogin = async () => {
    await router.push("/dashboard");
  };

  return (
    <motion.div layout className="overflow-hidden w-full">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activeTab}
          variants={animationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          className="flex flex-col gap-4 py-6 px-4 w-full"
        >
          {activeTab === "SAAS" ? (
            SAASLoginOptions.map((option) => (
              <LoginButton onClick={handleLogin} key={option.name}>
                <Image
                  src={option.icon}
                  alt={option.name}
                  width={20}
                  height={20}
                />
                Sign in with {option.name}
              </LoginButton>
            ))
          ) : (
            <>
              <LoginButton onClick={handleLogin}>
                <Image src={Gitlab} alt="Gitlab" width={20} height={20} />
                Self Hosted GitLab
              </LoginButton>
              <LoginButton onClick={handleLogin}>
                <Image src={Key} alt="key" width={20} height={20} />
                Self Hosted GitLab
              </LoginButton>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default LoginSection;
