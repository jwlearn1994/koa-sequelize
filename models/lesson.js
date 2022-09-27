'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      lesson.belongsToMany(models.teacher, {
        through: models.teacher_lesson,
        foreignKey: 'lessonId',
      })
    }
  }
  lesson.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lesson',
  });
  return lesson;
};