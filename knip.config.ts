import type {KnipConfig} from "knip"

const config: KnipConfig = {
  workspaces: {
    ".": {
      ignoreDependencies: ["nx"],
    },
    "libs/my-lib": {
      ignoreDependencies: ["tslib"],
    },
  },
}

export default config
