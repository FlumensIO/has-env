const isProdEnv = process.env.NODE_ENV === 'production';

module.exports = function checkEnv({ warn = [], required = [] }) {
  const FgRed = "\x1b[31m";
  // const FgGreen = "\x1b[32m";
  const FgYellow = "\x1b[33m";

  warn.forEach(setting => {
    if (!process.env[setting]) {
      return;
    }

    if (isProdEnv) {
      console.log(FgRed, `Production build with ${setting} is not allowed.\n`);
      process.exit(1);
    }

    console.log(FgYellow, setting, process.env[setting]);
  });

  required.forEach(setting => {
    if (!process.env[setting]) {
      console.log(FgRed, `${setting} env variable is missing\n`);
      process.exit(1);
    }
  });
};
