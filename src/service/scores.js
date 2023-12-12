const scoresRepository = require("../repository/scores");
const scoresService = {
  addScore: async (req, res) => {
    try {
      const data = req.body;
      const studentData = await scoresRepository.findStudentData(
        data.studentID
      );
      const departmentID = studentData.department;
      const courseInDepartment =
        await scoresRepository.getCourseIfBelongsToDepartment(
          departmentID,
          data.courseID
        );
      if (!courseInDepartment) {
        return res
          .status(400)
          .json({ Error: "Student is not enrolled in this course" });
      }
      const scoreAdded = await scoresRepository.addScore(data);
      if (!scoreAdded[1]) {
        return res
          .status(400)
          .json({ Error: "Student already has a score entry for this course" });
      }
      return res.status(200).json({ Success: "Score added to database" });
    } catch (error) {
      return res.status(500).json({ Error: error });
    }
  },
};
module.exports = scoresService;
