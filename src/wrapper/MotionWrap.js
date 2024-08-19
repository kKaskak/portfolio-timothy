import React from 'react';
import { motion } from 'framer-motion';
import { wrapper } from './animations-wrap';
const MotionWrap = (Component, classNames) =>
	function HOC() {
		return (
			<motion.div
				whileInView={'show'}
				initial={'hidden'}
				variants={wrapper}
				className={`${classNames} app__flex`}
				viewport={{ once: true, amount: 0.1 }}
			>
				<Component />
			</motion.div>
		);
	};

export default MotionWrap;
