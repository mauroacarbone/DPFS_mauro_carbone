module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    unitPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    tableName: 'cart_items',
    underscored: true
  });

  CartItem.associate = (models) => {
    CartItem.belongsTo(models.Cart, {
      as: 'cart',
      foreignKey: 'cartId'
    });
    CartItem.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'productId'
    });
  };

  return CartItem;
};
