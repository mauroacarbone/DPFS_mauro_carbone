module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'product_categories',
    underscored: true
  });

  ProductCategory.associate = (models) => {
    ProductCategory.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'productCategoryId'
    });
  };

  return ProductCategory;
};
