'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teacher_lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      teacher_lesson.belongsTo(models.lesson, {
        foreignKey: 'lessonId',
      });
      teacher_lesson.belongsTo(models.teacher, {
        foreignKey: 'teacherId',
      });
    }
  }
  teacher_lesson.init({
    lessonId: DataTypes.STRING,
    teacherId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'teacher_lesson',
  });
  return teacher_lesson;
};