import { exec } from 'child_process';

const PREFIX = 'stg';

const webComponents = [
  { tag: 'counter', entry: 'src/lib/Counter.svelte' },
  { tag: 'counter-added', entry: 'src/lib/CounterAdded.svelte' }
];

const mode = process.argv[2] || 'build'; // Default to 'build' if no argument is provided

webComponents.forEach(({ tag, entry }) => {
  const command = `COMPONENT_TAG=${tag} COMPONENT_ENTRY=${entry} COMPONENT_PREFIX=${PREFIX} vite ${mode}`;
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error running ${mode} for ${tag}:`, stderr);
      return;
    }
    console.log(`${mode.charAt(0).toUpperCase() + mode.slice(1)} for ${tag} completed successfully:`, stdout);
  });
});