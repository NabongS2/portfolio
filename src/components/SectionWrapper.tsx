import React from 'react';
// Variants 앞에 type을 붙여서 '형식 전용 가져오기'를 수행합니다.
import { motion, type Variants } from 'framer-motion'; 
import { Flex } from 'antd';

// ✨ 타입을 Variants로 명시하면 TS가 구조를 정확히 이해합니다.
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const item: Variants = {
  hidden: { 
    y: 40, 
    opacity: 0,
    rotateX: 10 
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { 
      duration: 0.8, 
      // 배열 형태의 ease도 Variants 타입 안에서는 정상적으로 허용됩니다.
      ease: [0.21, 0.47, 0.32, 0.98] 
    }
  }
};

export default function SectionWrapper({ children, id }: { children: React.ReactNode, id: string }) {
  return (
    <motion.section
      id={id}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      style={{ width: '100%', perspective: '1000px' }}
    >
      <Flex vertical gap={60}>
        {React.Children.map(children, (child) => (
          <motion.div variants={item}>{child}</motion.div>
        ))}
      </Flex>
    </motion.section>
  );
}