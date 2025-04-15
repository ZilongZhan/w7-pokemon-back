import chalk from "chalk";
import app from "./app.js";

const startServer = (port: number): void => {
  app.listen(port, () => {
    /* eslint-disable */
    console.log("++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(
      `🚀 ${chalk.bold.blue("Server running at")} ${chalk.green(
        `http://localhost:${port}`,
      )} 🚀`,
    );
    console.log("++++++++++++++++++++++++++++++++++++++++++++++");
    /* eslint-enable */
  });
};

export default startServer;
