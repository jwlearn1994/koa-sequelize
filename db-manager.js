const models = require('./models');

const getTLsByTeacher = async (teacherId) => {
  const result = await models.teacher.findAll({
    where: { id: teacherId },
    include: {
      model: models.lesson,
      // exclude associate select
      // https://stackoverflow.com/questions/30082625/cant-exclude-associations-fields-from-select-statement-in-sequelize
      through: {
        attributes: []
      }
    },
  });
  return result;
};

const createTeacherLesson = async (lessonId, teacherId) => {
  try {
    const result = await models.teacher_lesson.create({
      lessonId,
      teacherId,
    })
    return result;
  } catch(error) {
    console.log(error.message);
  }
};

module.exports = {
  getTLsByTeacher,
  createTeacherLesson,
};
