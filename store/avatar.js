import SetPropersSide from '~/assets/ts/avatar/setSide'
import defaultValues from '~/assets/ts/defaults'
import defaultFrames from '~/assets/ts/defaultFrames'
import expressions from '~/assets/json/configs/expressions.json'

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object))
}

export const state = () => ({
  frame: defaultValues.frame,
  globals: defaultValues.globals[0],
  color: defaultValues.color[0],

  angle: 0,
  horiz: 0,

  degress: 12.5,
  mirror: false,

  position: {
    vertical: 0,
    horizontal: 0,
    scale: 1,
    angle: 0
  },

  hairsList: [],
  tailsList: [],

  frames: defaultFrames,

  saveIndex: 0,
  animationSavesSlot: 0,

  defaultFrames,
  default: defaultValues // Default constant params
})

export const getters = {
  getAngle: ({ angle }) => angle,
  getHoriz: ({ horiz }) => horiz,

  getDegress: ({ degress }) => degress,
  getMirror: ({ mirror }) => mirror,

  getFrame: ({ frame }) => frame,
  getFrames: ({ frames }) => frames,

  getPosHoriz: ({ position }) => position.horizontal,
  getPosVerti: ({ position }) => position.vertical,
  getPosScale: ({ position }) => position.scale,
  getPosAngle: ({ position }) => position.angle,

  getGlobal: ({ globals }) => globals,
  getProper: ({ frames, frame }) => frames[frame].frame,
  getColor: ({ color }) => color,

  getDefault: (state) => state.default,
  getDefaultFrames: (state) => state.defaultFrames,

  getHairsList: ({ hairsList }) => hairsList,
  getTailsList: ({ tailsList }) => tailsList,

  getAnimationSavesSlot: ({ animationSavesSlot }) => animationSavesSlot
}

export const mutations = {
  setAngle: (state, angle) => (state.angle = angle),
  setHoriz: (state, value) => (state.horiz = value),

  setDegress: (state, degress) => (state.degress = degress),
  setMirror: (state, mirror) => (state.mirror = mirror),

  setPosHoriz: (state, horizontal) => (state.position.horizontal = horizontal),
  setPosVerti: (state, vertical) => (state.position.vertical = vertical),
  setPosScale: (state, scale) => (state.position.scale = scale),
  setPosAngle: (state, angle) => (state.position.angle = angle),

  setFrame: (state, frame) => {
    state.frame = frame

    const {
      horiz,
      angle,
      degress,
      position_horizontal: posHoriz,
      position_vertical: posVerti,
      position_scale: posScale,
      position_angle: posAngle
    } = state.frames[frame].frame

    state.degress = degress
    state.mirror = degress < 90

    state.horiz = horiz
    state.angle = angle

    state.position.horizontal = posHoriz
    state.position.vertical = posVerti
    state.position.scale = posScale
    state.position.angle = posAngle

    SetPropersSide(state.mirror, state.frames[frame].frame)
  },

  addFrame: ({ frames }, index) => {
    frames.splice(index, 0, {
      duration: 1,
      frame: {
        angle: 0,
        horiz: 0,
        degress: 12.5,

        position_horizontal: 0,
        position_vertical: 0,
        position_scale: 1,
        position_angle: 0,

        ...cloneObject(frames[index - 1].frame)
      }
    })
  },

  addFrameFromLetter: ({ frames }, [index, letter]) => {
    const frame = cloneObject(frames[index - 1].frame)
    const expression = expressions[letter]

    frame.jaw_open = expression.jaw_open
    frame.jaw_sad = expression.jaw_sad

    frame.tongue_raised = expression.tongue_raised

    frame.teeth_upper = expression.teeth_upper
    frame.teeth_lower = expression.teeth_lower

    frames.splice(index, 0, {
      duration: 0.3,
      frame: {
        angle: 0,
        horiz: 0,
        degress: 12.5,

        position_horizontal: 0,
        position_vertical: 0,
        position_scale: 1,
        position_angle: 0,

        ...frame
      }
    })
  },

  setFrames: (state, { frames }) => {
    state.frames = frames
    state.frame = 0

    const {
      horiz,
      angle,
      degress,
      position_horizontal: posHoriz,
      position_vertical: posVerti,
      position_scale: posScale,
      position_angle: posAngle
    } = frames[0].frame

    state.degress = degress
    state.mirror = degress < 90

    state.horiz = horiz
    state.angle = angle

    state.position.horizontal = posHoriz
    state.position.vertical = posVerti
    state.position.scale = posScale
    state.position.angle = posAngle

    for (let i = 0; i < frames.length; i++) {
      SetPropersSide(state.mirror, frames[i].frame)
    }
  },

  deleteFrame: (state, index) => {
    const { frames, frame } = state

    frames.splice(index, 1)

    if (frame > frames.length - 1) state.frame = frames.length - 1
  },

  setFrameDur: ({ frames }, [index, length]) => {
    frames[index].duration = length
  },

  setProper({ frames, frame }, { path, value }) {
    frames[frame].frame[path] = value
  },

  setSaveIndex: (state, index) => (state.saveIndex = index),

  setGlobal({ globals, color }, { path, value }) {
    globals[path] = value

    if (!globals.eyes_right_enable) {
      color.eyes_right_basic = color.eyes_left_basic
    }

    if (globals.fur_second_color) {
      color.fur_SECOND = color.fur_second_basic
      color.fur_SECOND_SHADE = color.fur_second_shade
    } else {
      color.fur_SECOND = color.fur_basic
      color.fur_SECOND_SHADE = color.fur_shade
    }
  },

  setColor({ color, globals }, { path, value }) {
    color[path] = value

    if (!globals.eyes_right_enable) {
      color.eyes_right_basic = color.eyes_left_basic
    }

    if (globals.fur_second_color) {
      color.fur_SECOND = color.fur_second_basic
      color.fur_SECOND_SHADE = color.fur_second_shade
    } else {
      color.fur_SECOND = color.fur_basic
      color.fur_SECOND_SHADE = color.fur_shade
    }
  },

  setAllGlobals: (state, globals) => {
    state.globals = globals

    if (state.globals.fur_second_color) {
      state.color.fur_SECOND = state.color.fur_second_basic
      state.color.fur_SECOND_SHADE = state.color.fur_second_shade
    } else {
      state.color.fur_SECOND = state.color.fur_basic
      state.color.fur_SECOND_SHADE = state.color.fur_shade
    }
  },

  setAllColors: (state, color) => {
    state.color = color

    if (!state.globals.eyes_right_enable) {
      state.color.eyes_right_basic = state.color.eyes_left_basic
    }

    if (state.globals.fur_second_color) {
      state.color.fur_SECOND = state.color.fur_second_basic
      state.color.fur_SECOND_SHADE = state.color.fur_second_shade
    } else {
      state.color.fur_SECOND = state.color.fur_basic
      state.color.fur_SECOND_SHADE = state.color.fur_shade
    }
  },

  setHairsList: ({ hairsList }, string) => {
    if (!hairsList.includes(string)) {
      hairsList.push(string)
    }
  },

  setAllHairsList: (state, array) => (state.hairsList = array),

  setTailsList: ({ tailsList }, string) => {
    if (!tailsList.includes(string)) {
      tailsList.push(string)
    }
  },

  setAllTailsList: (state, array) => (state.tailsList = array),

  setAnimationSavesSlot: (state, slot) => (state.animationSavesSlot = slot)
}

export const actions = {
  setAvatar({ commit }, { globals, color }) {
    commit('setAllGlobals', globals)
    commit('setAllColors', color)
  }
}
