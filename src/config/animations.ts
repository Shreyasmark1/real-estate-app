

const buttonheartbeatKeyFrames = {
    '0%': {
        'box-shadow': '0 0 0 0 theme("colors.red.500")',
        transform: 'scale(1)',
    },
    '50%': {
        'box-shadow': '0 0 0 7px theme("colors.red.500/0")',
        transform: 'scale(1.05)',
    },
    '100%': {
        'box-shadow': '0 0 0 0 theme("colors.red.500/0")',
        transform: 'scale(1)',
    },
}

const customKeyFrames = {
    buttonheartbeat: buttonheartbeatKeyFrames
}

const customAnimations = {
    buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out',
}

module.exports = {
    keyframes: customKeyFrames,
    animations: customAnimations
}
