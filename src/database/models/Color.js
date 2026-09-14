module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define('Color', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'colors',
    underscored: true
  });

  Color.associate = (models) => {
    Color.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'colorId'
    });
  };

  return Color;
};
