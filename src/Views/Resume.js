import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring'

const Resume = () => {
    const [show, setShow] = useState(true)
    const transitions = useTransition(show, null, {
        from: { opacity: -5, transform: 'translateY(-20%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: -5, transform: 'translate(-20%)' },
    })
    return (
        <div className="p-3">
            {
                transitions.map(({ item, key, props }) =>
                    item &&
                    <animated.div key={key} style={props}>
                        <h1 className="font-bold">😬 My resume is coming...</h1>
                    </animated.div>
                )
            }
        </div>
    )
}

export default Resume;