const AddAdminClass = require("../models/ClassSchema");
module.exports = {

    // post

    addClass: async (req, res) => {
        const data = new AddAdminClass({
            Class: req.body.Class,
            Division: req.body.Division,
            TeacherName: req.body.TeacherName,
            ClassroomNumber: req.body.ClassroomNumber,
            Schedule: req.body.Schedule,
            Classcapacity: req.body.Classcapacity
        });
        console.log(data);

        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
            console.log("Details added");
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    //get

    ClassDetails: async (req, res) => {
        try {
            const subject = await AddAdminClass.find();
            res.json(subject);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //delete

    deleteClass: async (req, res) => {
        try {
            const subject = await AddAdminClass.findByIdAndDelete(req.params.id);
            if (!subject) throw Error("No user found");
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },


    //put

    editClass: async (req, res) => {
        try {
            await AddAdminClass.findByIdAndUpdate(req.params.id, {
                Class: req.body.Class,
                Division: req.body.Division,
                TeacherName: req.body.TeacherName,
                ClassroomNumber: req.body.ClassroomNumber,
                Schedule: req.body.Schedule,
                Classcapacity: req.body.Classcapacity
            });
            res.status(200).json("Successfully updated");
        } catch (error) {
            console.error(error.message);
            res.status(500).json("ServerError");
        }
    },

    // get by id

    getClass: async (req, res) => {
        const subject = req.params;
        try {
            const data = await AddAdminClass.findById(subject.id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error.message);
        }
    },

}