import React from 'react';
import { motion } from 'framer-motion';
import './Header.scss';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import {
	scaleVariants,
	scaleVariants1,
	scaleVariants2,
	scaleVariants2Children,
	item,
	opacity,
} from './animations-header';
const Header = () => {
	return (
		<div id='home' className='app__header app__flex'>
			<motion.div
				whileInView={scaleVariants1.show}
				variants={scaleVariants1}
				className='app__header-info'
				initial='hidden'
				animate='show'
			>
				<div className='app__header-badge'>
					<motion.div
						variants={opacity}
						whileTap={{
							scale: 1.1,
							transition: { type: 'tween', duration: 0.5 },
						}}
						className='badge-cmp app__flex'
					>
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className='p-text'>Hello, I am</p>
							<h1 className='head-text'>Timothy</h1>
						</div>
					</motion.div>

					<motion.div
						variants={opacity}
						whileTap={{
							scale: 1.1,
							transition: { type: 'tween', duration: 0.5 },
						}}
						className='tag-cmp app__flex'
					>
						<p className='p-text'>Front-end</p>
						<p className='p-text'>Developer</p>
					</motion.div>
				</div>
			</motion.div>

			<motion.div
				variants={scaleVariants2}
				whileInView={scaleVariants2.show}
				initial='hidden'
				animate='show'
				className='app__header-img'
			>
				<img src={images.me2} alt='profile_bg' />
				<motion.img
					variants={scaleVariants2Children}
					className='overlay_circle'
					src={images.hexagon}
					alt='profile_circle'
				/>
			</motion.div>

			<motion.div
				className='app__header-circles'
				variants={scaleVariants}
				initial='hidden'
				animate='show'
			>
				{[images.html, images.javascript, images.sass].map(
					(circle, index) => (
						<motion.div
							variants={item}
							className='circle-cmp app_flex'
							key={`circle-${index}`}
						>
							<motion.img
								whileInView={{ opacity: [0, 1] }}
								transition={{
									duration: 0.2,
									type: 'tween',
									delayChildren: 1.1,
									staggerChildren: 0.6,
								}}
								src={circle}
								whileHover={{ scale: 1.1 }}
								whileTap={{
									scale: 0.6,
									rotate: -180,
									transition: {
										type: 'tween',
										duration: 0.5,
									},
								}}
								alt='circle'
							/>
						</motion.div>
					),
				)}
			</motion.div>
		</div>
	);
};
// export default Header
export default AppWrap(Header, 'home');
