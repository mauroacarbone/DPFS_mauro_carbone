module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    },
    status: {
      type: DataTypes.STRING(30),
      defaultValue: 'open'
    }
  }, {
    tableName: 'carts',
    underscored: true
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
    Cart.hasMany(models.CartItem, {
      as: 'items',
      foreignKey: 'cartId'
    });
  };

  return Cart;
};
