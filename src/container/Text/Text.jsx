import React, { useRef, useEffect } from "react";
import { AppWrap } from "../../wrapper";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./Text.module.scss";

const phrase =
    "Like an author weaving tales from beginning to end, a full-stack developer scripts digital stories, harmonizing the dance of data and design in every line of code.";

const Text = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimation();
    }, []);

    const createAnimation = () => {
        gsap.to(refs.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: `15% center`,
                end: `+=${window.innerHeight / 1.5}`,
            },
            opacity: 1,
            ease: "none",
            stagger: 0.1,
        });
    };
    let refs = useRef([]);
    const container = useRef(null);

    const splitWords = (phrase) => {
        let body = [];
        phrase.split(" ").forEach((word, i) => {
            const letters = splitLetters(word);
            body.push(<p key={word + "_" + i}>{letters}</p>);
        });
        return body;
    };
    const { body } = splitWords;

    const splitLetters = (word) => {
        let letters = [];
        word.split("").forEach((letter, i) => {
            letters.push(
                <span
                    key={letter + "_" + i}
                    ref={(el) => {
                        refs.current.push(el);
                    }}
                >
                    {letter}
                </span>,
            );
        });
        return letters;
    };

    return (
        <div ref={container} className={styles.div}>
            <div ref={body} className={styles.body}>
                {splitWords(phrase)}
            </div>
        </div>
    );
};

export default AppWrap(Text, "text");
