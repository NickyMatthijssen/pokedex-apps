export const useJsonFile = async (path: string, key: string = "file-data") => {
  return await useAsyncData(
    key,
    async () => {
      const fs = require("fs");

      try {
        const stream = fs.readFileSync(path);

        return JSON.parse(stream);
      } catch (e) {
        return undefined;
      }
    },
    {
      server: true,
    }
  );
};
