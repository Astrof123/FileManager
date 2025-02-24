import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/filemanager.js',
  output: {
    filename: 'filemanager.bundle.mjs',
    path: path.resolve(__dirname, 'dist'),
    environment: {
      module: true,
    },
    libraryTarget: 'module',
  },
  experiments: {
    outputModule: true,
  },
  mode: 'development',
};
