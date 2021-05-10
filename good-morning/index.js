console.log("Good Morning Mark!");
console.log("Starting your dev env!");

const {exec, spawn} = require("child_process");

exec("/Users/markdewey/.scripts/open-website.sh", (error, stdout, stderr) => {
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    if (stdout) {
      console.log(`stdout: ${stdout}`);
    }
  });
exec('/Users/markdewey/.scripts/build-website.sh')
exec('open -a "Google Chrome.app"')

const startApi = spawn("/Users/markdewey/.scripts/api-reset.sh");

startApi.stdout.on("data", data => {
  process.stdout.write(`# : ${data}`);
});

startApi.stderr.on("data", data => {
  console.log(`***: ${data}`);
});

startApi.on('error', (error) => {
  console.log(`**: ${error.message}`);
});

startApi.on("close", code => {
  console.log(`child process exited with code ${code}`);
});

