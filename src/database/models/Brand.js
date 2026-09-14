module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'brands',
    underscored: true
  });

  Brand.associate = (models) => {
    Brand.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'brandId'
    });
  };

  return Brand;
};
