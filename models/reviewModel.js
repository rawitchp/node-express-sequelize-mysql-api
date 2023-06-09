module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
  });
  return Review;
};
