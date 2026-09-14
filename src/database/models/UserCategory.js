module.exports = (sequelize, DataTypes) => {
  const UserCategory = sequelize.define('UserCategory', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'user_categories',
    underscored: true
  });

  UserCategory.associate = (models) => {
    UserCategory.hasMany(models.User, {
      as: 'users',
      foreignKey: 'userCategoryId'
    });
  };

  return UserCategory;
};
