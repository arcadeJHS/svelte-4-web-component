import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import replace from '@rollup/plugin-replace';

// This configuration build a common and shared "index-<timestamp>.js" file, which contains the code shared by all the components (lighter build and load?)
// export default defineConfig({
//   build: {
//     lib: {
//       entry: {
//         Counter: path.resolve(__dirname, 'src/lib/Counter.svelte'),
//         CounterAdded: path.resolve(__dirname, 'src/lib/CounterAdded.svelte')
//       },
//       formats: ["es"]
//     },
//     rollupOptions: {
//       output: {
//         // This will generate Counter.js and CounterAdded.js
//         entryFileNames: '[name].js',
//       }
//     },
//     emptyOutDir: true,
//   },
//   plugins: [
//     svelte({ 
//       compilerOptions: { 
//         customElement: process.env.NODE_ENV === 'production' 
//       } 
//     })
//   ],
// });



// This configuration create a separate, self-contained, and independent build for each component
const componentName = process.env.COMPONENT_NAME;
const componentEntry = process.env.COMPONENT_ENTRY;
const libraryPrefix = process.env.COMPONENT_PREFIX ? `${process.env.COMPONENT_PREFIX}-` : '';

if (!componentName || !componentEntry) {
  throw new Error('COMPONENT_NAME and COMPONENT_ENTRY environment variables are required');
}

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, componentEntry),
        name: componentName,
        formats: ['es', 'umd'],
        fileName: (format) => {
          if (format === 'es') {
            return `${libraryPrefix}${componentName}.m.js`;
          }
          if (format === 'umd') {
            return `${libraryPrefix}${componentName}.umd.js`;
          }
        }
      },
      rollupOptions: {
        output: {
          manualChunks: false
        }
      },
      // Prevent clearing the output directory between builds
      emptyOutDir: false,
    },
    plugins: [
      replace({
        preventAssignment: true,
        'PREFIX-': libraryPrefix ?? '',
      }),
      svelte({ 
        compilerOptions: { 
          customElement: isProduction 
        } 
      })
    ],
    server: {
      open: true,
      port: 3000,
    }
  };
});