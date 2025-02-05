# Tailwind CSS Purge Issue: Classes Not Applied After Build

This repository demonstrates a common issue encountered when using Tailwind CSS:  classes not being applied to components after the build process. This is often due to Tailwind's purge functionality removing unused CSS.

## Problem

The provided `bug.js` file contains a component where some Tailwind classes fail to apply after building the project.

## Solution

The `bugSolution.js` demonstrates how to resolve this by ensuring the component is rendered on the initial page load, or by modifying the purge configuration to include the necessary classes.  See the comments in `bugSolution.js` for details.

## How to reproduce

1. Clone this repository.
2. Run `npm install` (or `yarn install`).
3. Run the development server (e.g. using `npm run dev`).
4. Observe the issue in the initial render.
5. View the solution in `bugSolution.js`
