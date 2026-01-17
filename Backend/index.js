import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/schooldb').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Define User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Define Admission schema
const admissionSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    stream: { type: String, required: true },
    nationality: { type: String, required: true },
    aadhar: { type: String, required: true },
    previousSchool: { type: String, required: true },
    status: { type: String, required: true, default: 'Pending' }
});

const Admission = mongoose.model('Admission', admissionSchema);

// Define Contact schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

// Define Student schema
const studentSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    course: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

const Student = mongoose.model('Student', studentSchema);

// Define Enquiry schema
const enquirySchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, required: true, default: 'Pending' }
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

// Routes
app.get('/', (req, res) => {
    return res.send('Hello World');
});

// POST /register endpoint
app.post('/register', async (req, res) => {
    try {
        const { name, email, mobile } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already registered' });
        }

        // Create new user
        const newUser = new User({ name, email, mobile });
        await newUser.save();

        res.status(201).json({ success: true, message: 'Registration successful' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// POST /admission endpoint
app.post('/admission', async (req, res) => {
    try {
        // Generate unique ID for admission
        const admissionId = `ADM${Date.now()}`;

        const admissionData = {
            id: admissionId,
            ...req.body,
            status: 'Pending'
        };

        // Create new admission
        const newAdmission = new Admission(admissionData);
        await newAdmission.save();

        res.status(201).json({ success: true, message: 'Admission submitted successfully' });
    } catch (error) {
        console.error('Admission error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// POST /contact endpoint
app.post('/contact', async (req, res) => {
    try {
        const contactData = req.body;

        // Create new contact
        const newContact = new Contact(contactData);
        await newContact.save();

        res.status(201).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Student CRUD endpoints
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.post('/students', async (req, res) => {
    try {
        const { id, name, course, email } = req.body;
        const newStudent = new Student({ id, name, course, email });
        await newStudent.save();
        res.status(201).json({ success: true, message: 'Student added successfully' });
    } catch (error) {
        console.error('Error adding student:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.put('/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, course, email } = req.body;
        await Student.findOneAndUpdate({ id }, { name, course, email });
        res.status(200).json({ success: true, message: 'Student updated successfully' });
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.delete('/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Student.findOneAndDelete({ id });
        res.status(200).json({ success: true, message: 'Student deleted successfully' });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Enquiry CRUD endpoints
app.get('/enquiries', async (req, res) => {
    try {
        const enquiries = await Enquiry.find();
        res.status(200).json(enquiries);
    } catch (error) {
        console.error('Error fetching enquiries:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.post('/enquiries', async (req, res) => {
    try {
        const { id, name, email, mobile, message, status } = req.body;
        const newEnquiry = new Enquiry({ id, name, email, mobile, message, status });
        await newEnquiry.save();
        res.status(201).json({ success: true, message: 'Enquiry added successfully' });
    } catch (error) {
        console.error('Error adding enquiry:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.put('/enquiries/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, mobile, message, status } = req.body;
        await Enquiry.findOneAndUpdate({ id }, { name, email, mobile, message, status });
        res.status(200).json({ success: true, message: 'Enquiry updated successfully' });
    } catch (error) {
        console.error('Error updating enquiry:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.delete('/enquiries/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Enquiry.findOneAndDelete({ id });
        res.status(200).json({ success: true, message: 'Enquiry deleted successfully' });
    } catch (error) {
        console.error('Error deleting enquiry:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Admission CRUD endpoints
app.get('/admissions', async (req, res) => {
    try {
        const admissions = await Admission.find();
        res.status(200).json(admissions);
    } catch (error) {
        console.error('Error fetching admissions:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.put('/admissions/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const result = await Admission.findOneAndUpdate({ $or: [{ id }, { _id: id }] }, updateData, { new: true });
        if (!result) {
            return res.status(404).json({ success: false, message: 'Admission not found' });
        }
        res.status(200).json({ success: true, message: 'Admission updated successfully' });
    } catch (error) {
        console.error('Error updating admission:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.delete('/admissions/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Admission.findOneAndDelete({ $or: [{ id }, { _id: id }] });
        if (!result) {
            return res.status(404).json({ success: false, message: 'Admission not found' });
        }
        res.status(200).json({ success: true, message: 'Admission deleted successfully' });
    } catch (error) {
        console.error('Error deleting admission:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
