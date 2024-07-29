import { exec } from 'child_process';
import { PREFIX, COMPONENTS } from './vite.build.components.js';

const mode = process.argv[2] || 'build'; // Default to 'build' if no argument is provided

COMPONENTS.forEach(({ tag, entry }) => {
  const command = `COMPONENT_TAG=${tag} COMPONENT_ENTRY=${entry} COMPONENT_PREFIX=${PREFIX} vite ${mode}`;
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error running ${mode} for ${tag}:`, stderr);
      return;
    }
    console.log(`${mode.charAt(0).toUpperCase() + mode.slice(1)} for ${tag} completed successfully:`, stdout);
  });
});