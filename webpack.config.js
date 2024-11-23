const path = require('path');

module.exports = {
  entry: './src/filemanager.js',
  output: {
    filename: 'filemanager.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Filemanager', // важно для использования в браузере
    libraryTarget: 'umd',         // универсальный формат модуля
  },
  mode: 'development', // для продакшена, 'development' для разработки
};