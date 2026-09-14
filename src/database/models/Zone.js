module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define('Zone', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'zones',
    underscored: true
  });

  Zone.associate = (models) => {
    Zone.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'zoneId'
    });
  };

  return Zone;
};
