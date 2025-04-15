import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

const config: Config = {
  verbose: true,
  rootDir: "src",
  moduleNameMapper: {
    "^(\\.\\.?\\/.+)\\.js$": "$1",
  },
  ...createDefaultPreset(),
};

export default config;
