'use strict';
module.exports = (sequelize, DataTypes) => {
  var mahasiswa = sequelize.define('mahasiswa', {
    nim: DataTypes.STRING,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    no_hp: DataTypes.STRING
  }, {});
  mahasiswa.associate = function(models) {
    // associations can be defined here
  };
  return mahasiswa;
};