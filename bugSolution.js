```javascript
// bugSolution.js
/*To solve this, you can ensure that the component is rendered even on the initial load. For example, you can add the component to a place that is rendered on the initial page load. 
Alternatively, if you are sure that the class is necessary, you can modify the purge setting in your Tailwind configuration to prevent the class from being purged.
*/
// Example to modify purge setting:
// module.exports = {
//  purge: {
// content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
//  options: {
//   safelist: ['my-important-class'], // Add classes that should not be purged 
//  },
//  }
// }
```