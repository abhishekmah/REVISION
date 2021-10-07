const express = require("express")

const Student = require("../models/student.model")

const router = express.Router();

router.post('', async (req, res) => {
    const student = await Student.create(req.body);
    return res.status(201).json({ student })
})

// router.get('', async (req, res) => {
//     const students = await Student.find().lean().exec();
//     return res.status(200).json({ students })
// })

router.get('/', async (req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.size || 10;

    const offset = (page-1) * size;

    const students = await Student.find().skip(offset).limit(size).lean().exec();

    const totalDocuments = await Student.find().skip(offset).limit(size).countDocuments();
    const totalPages = Math.ceil(totalDocuments / size);

    return res.status(200).json({ students, totalPages })
})

router.get('/:id', async (req, res) => {
    const student = await Student.findById(req.params.id).lean().exec();
    return res.status(200).json({ student })
})
router.patch('/:id', async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(200).json({ student })
})
router.delete('/:id', async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    return res.status(200).json({ student })
})

module.exports = router;
