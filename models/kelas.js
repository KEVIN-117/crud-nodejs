'use strict';
module.exports = (sequelize, DataTypes) => {
  var kelas = sequelize.define('kelas', {
    nama_kelas: DataTypes.STRING,
    kode_kelas: DataTypes.STRING
  }, {});
  kelas.associate = function(models) {
    // associations can be defined here
  };
  return kelas;
};