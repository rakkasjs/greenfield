// @ts-expect-error: Direct import doesn't work
import * as all from "@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js";

const { jsx, jsxs, Fragment } = all;

export { jsx, jsxs, Fragment };
