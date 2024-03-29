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
  exec('open -a "Google Chrome.app"')
const buildSite = spawn('/Users/markdewey/.scripts/build-website.sh')

buildSite.stdout.on("data", data => {
  process.stdout.write(`FE - # : ${data}`);
});

buildSite.stderr.on("data", data => {
  console.log(`***: ${data}`);
});

buildSite.on('error', (error) => {
  console.log(`**: ${error.message}`);
});

buildSite.on("close", code => {
  console.log(`child process exited with code ${code}`);
});



const startApi = spawn("/Users/markdewey/.scripts/api-reset.sh");

startApi.stdout.on("data", data => {
  process.stdout.write(`BE- # : ${data}`);
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

