import { exec } from 'child_process';

const PREFIX = 'stg';

const webComponents = [
  { name: 'counter', entry: 'src/lib/Counter.svelte' },
  { name: 'counter-added', entry: 'src/lib/CounterAdded.svelte' }
];

const mode = process.argv[2] || 'build'; // Default to 'build' if no argument is provided

webComponents.forEach(({ name, entry }) => {
  const command = `COMPONENT_NAME=${name} COMPONENT_ENTRY=${entry} COMPONENT_PREFIX=${PREFIX} vite ${mode}`;
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error running ${mode} for ${name}:`, stderr);
      return;
    }
    console.log(`${mode.charAt(0).toUpperCase() + mode.slice(1)} for ${name} completed successfully:`, stdout);
  });
});