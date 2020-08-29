const spawn = require("child_process").spawn;

const screenshot = (file, time) => {
  return new Promise((resolve) => {
    const argumentsFfmpeg = [
      "-ss",
      time.toString(),
      "-i",
      `"${file}"`,
      "-c:v",
      "mjpeg",
      "-vframes",
      "1",
      "-f",
      "mjpeg",
      "-",
    ];
    const runner = spawn("ffmpeg", argumentsFfmpeg, { shell: true });
    const dataCache = [];
    runner.stdout.on("data", (data) => dataCache.push(data));
    runner.on("close", () => resolve(Buffer.concat(dataCache)));
  });
};
