import React, { ReactNode } from 'react';
import { useAnimation, motion } from 'framer-motion';

const variants = {
  initial: {
    scaleY: 1,
  },
  grow: {
    scaleY: 25,
    opacity: 0,
    color: 'transparent',
  },
};

export function BottomButton(props: BottomButtonProps) {
  const { children, disabled, onClick } = props;
  const controls = useAnimation();

  return (
    <motion.button
      initial="initial"
      variants={variants}
      animate={controls}
      className="fixed bottom-0 w-full px-8 py-4 bg-blue-500 text-white disabled:opacity-50"
      disabled={disabled}
      onClick={async () => {
        await controls.start('grow');
        onClick();
      }}
    >
      {children}
    </motion.button>
  );
}

interface BottomButtonProps {
  disabled?: boolean;
  children: ReactNode;
  onClick(): void;
}
