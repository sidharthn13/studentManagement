const studentsRepository = require("../repository/students");
const studentsService = {
  create: async (req, res) => {
    try {
      const data = req.body;
      const newStudent = await studentsRepository.createIfNotExists(data);
      if (!newStudent[1]) {
        return res.status(400).json({ Error: "student already exists" });
      }
      return res.status(200).json({ Success: "student created" });
    } catch (error) {
      return res.status(500).json({ Error: error });
    }
  },
  getAll: async (req, res) => {
    try {
      const searchResult = await studentsRepository.getAllEntries();
      return res.status(200).json({ Students: searchResult });
    } catch (error) {
      return res.status(500).json({ Error: error });
    }
  },
  getByID: async (req, res) => {
    try {
      const id = req.params.id;
      const searchResult = await studentsRepository.getByID(id);
      if (!searchResult) {
        return res
          .status(400)
          .json({ Error: "Student with that ID does not exist" });
      }
      res.status(200).json({ Success: searchResult });
    } catch (error) {
      return res.status(500).json({ Error: error });
    }
  },
  deleteByID: async (req, res) => {
    try {
      const id = req.params.id;
      const deleted = await studentsRepository.deleteByID(id);
      if (deleted == 0) {
        return res.status(400).json({ Error: "No student with that id" });
      }
      return res
        .status(200)
        .json({ success: `student with id ${id} deleted from DB` });
    } catch (error) {
      return res.status(500).json({ Error: error });
    }
  },
};
module.exports = studentsService;
