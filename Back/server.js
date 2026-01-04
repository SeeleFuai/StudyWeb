
const express = require('express');
const mongooes = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');
const winston = require('winston');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongooes.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/studyweb')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
    


//congigure winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        })
    ],
});

app.use(morgan(":method :url :status :res[content-length] - :response-time ms - :res[content-length]"));

//Custom API logger Moddleware
const apiLogger = (req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.info({
            method: req.method,
            path: req.path,
            status: res.statusCode,
            duration: `${duration}ms`,
            params: req.params,
            query: req.query,
            body: req.method !== 'GET' ? req.body : undefined
        });
    });
    next();
}
app.use(apiLogger);

//Error handling middleware
app.use((err, req, res, next) => {
    logger.error({
        message: err.message,
        stack: err.stack,
        method: req.method,
        path: req.path,
        params: req.params,
        query: req.query,
        body: req.method !== 'GET' ? req.body : underfined
    });
    res.status(500).json({ error: 'Internal Server Error' });
});



//Student Schema
const StudentSchema = new mongooes.Schema(
    {
        name: {
            type: String,
            required: true

        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        course: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active'
        },
    },
    { 
        timestamps: true
    }
);

const Student = mongooes.model('Student', StudentSchema);

//Course Schema
const CourseSchema = new mongooes.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active'
        }
    },
    { timestamps: true }
);

const Course = mongooes.model('Course', CourseSchema);


//***************************** Couse Routes *****************************
app.get('/api/courses', async (req, res) => {
    try {
        const courses = await Course.find().sort({name: 1});
        logger.info(`Fetched ${courses.length} courses successfully`);
        res.json(courses);
    }   catch (error) {
        logger.error(`Error fetching courses: ${error.message}`);
        res.status(500).json({ error: 'Fetching failed' });
    }
});

app.post('/api/courses', async (req, res) => {
    try {
        const course = new Course(req.body);
        const savedCourse = await course.save();
        logger.info('New course created:',
            {
                courseId: savedCourse._id,
                name: savedCourse.name,
            });
        res.status(201).json(savedCourse);
    } catch (error) {
        logger.error(`Error creating course: ${error.message}`);
        res.status(500).json({message: error.message});
    }
});

app.put('/api/courses/:id', async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true });
        if (!updatedCourse) {
            logger.warn(`Course not found: ID ${req.params.id}`);
            return res.status(404).json({ error: 'Course not found' });
        }
        logger.info('Course updated:',
            {
                courseId: updatedCourse._id,
                name: updatedCourse.name,
            });
        res.json(updatedCourse);
    } catch (error) {
        logger.error(`Error updating course: ${err.message}`);
        res.status(500).json({ error: 'Update Failed' });
    }
});

app.delete('/api/courses/:id', async (req, res) => {
    try {
        const enrolledStudents = await Student.find({ course: req.params.id });
        if (enrolledStudents.length > 0) {
            logger.warn(`Attempt to delete course with enrolled students: ID ${req.params.id};\n Students count: ${enrolledStudents.length}`);
            return res.status(400).json({ error: 'Cannot delete course with enrolled students' })
        }
    
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            logger.warn(`Course not found: ID ${req.params.id}`);
            return res.status(404).json({ error: 'Course not found' });
        }

        logger.info('Course deleted:', { courseId: course._id, name: course.name });
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        logger.error(`Error deleting course: ${err.message}`);
        res.status(500).json({ error: 'Delete Failed' });
    }
});


//***************************** Student Routes *****************************
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find().sort({name: 1});
        logger.info(`Fetched ${students.length} students successfully`);
        res.json(students);
    } catch (error) {
        logger.error(`Error fetching students: ${error.message}`);
        res.status(500).json({ error: 'Fetching failed' });
    }  
});

app.post('/api/students', async (req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();
        logger.info('New student created:',
            {
                studentId: savedStudent._id,
                name: savedStudent.name,
            });
        res.status(201).json(savedStudent);
    } catch (error) {
        logger.error(`Error creating student: ${error.message}`);
        res.status(500).json({ error: 'Creation failed' });
    }
});

app.put('/api/students/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true });
        if (!updatedStudent) {
            logger.warn(`Student not found: ID ${req.params.id}`);
            return res.status(404).json({ error: 'Student not found' });
        }
        logger.info('Student updated:',
            {
                studentId: updatedStudent._id,
                name: updatedStudent.name,
                course: updatedStudent.course,
            });
        res.json(updatedStudent);
    } catch (error) {
        logger.error(`Error updating student: ${error.message}`);
        res.status(500).json({ error: 'Update Failed' });
    }
});

app.delete('/api/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student){
            logger.warn(`Student not found: ID ${req.params.id}`);
            return res.status(404).json({ error: 'Student not found' });
        }
        logger.info('Student deleted:',
            {
                studentId: student._id,
                name: student.name,
                course: student.course,
            });
        res.json({ message: 'Student deleted successfully' });

    } catch (error) {
        logger.error(`Error deleting student: ${error.message}`);
        res.status(500).json({ error: 'Delete Failed' });
    }
});

app.get("/api/students/search", async (req, res) => {  
    try {
        const searchTerm = req.query.q;
        logger.info(`Searching students init: ${searchTerm}`);

        const students = await Student.find({
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { email: { $regex: searchTerm, $options: 'i' } },
                { course: { $regex: searchTerm, $options: 'i' } },
            ],
        });

        logger.info(`Search completed. Found ${students.length} students for term: ${searchTerm}`);
        res.json(students); 
    } catch (error) {
        logger.error(`Error searching students: ${error.message}`);
        res.status(500).json({ error: 'Search failed' });
    }
});


app.get('api/students/:id', async(req,res) => {
    try {
        const student = await Student.findById(req.params.id);
        if(!student) return res.status(404).json({message: 'Student not found'}) 
        res.json(student);
    } catch(error) {
        logger.error('Error fetching student:', error);
        res.status(500).json({error: 'Fetching student failed'})
    }
});




// ***************************** DASHBOARD *****************************
app.get('/api/dashboard/starts', async(req, res) => {
    try {
        const stats = await getDashboardStats();
        logger.info('Dashboard stats fetched successfully:', stats);
        res.json(stats);
    } catch (error) {
        logger.error(`Error fetching dashboard stats: ${error.message}`);
        res.status(500).json({ error: 'Fetching stats failed' });
    }
});

async function getDashboardStats() {
    const totalStudent = await Student.countDocuments();
    const activeStudent = await Student.countDocuments({status: 'active'});
    const totalCourses = await Course.countDocuments();
    const activeCourse = await Course.countDocuments({status: 'active'});
    const graduate = await Student.countDocuments({status: 'inactive'});
    const courseCounts = await Student.aggregate([
        {$group: 
            { 
                _id: '$course',
                count: {$sum: 1}
            }
        }
    ]);
    return {
        totalStudent,
        activeStudent,
        totalCourses,
        activeCourse,
        graduate,
        courseCounts,
        successRate: totalStudent > 0 ? Math.round((graduate / totalStudent) * 100) : 0
    };
}

// Heath check endpoint
app.get('/health', (req , res) => {
    res.status(200).json({
        status: 'UP',
        timestamp: new Date(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Health check endpoint with mongoDB connection status
app.get('/health/detail', async(req,res) => {
    try {
        const dbStatus = mongooes.connection.readyState === 1 ? 'connected' : 'disconnected'

        //get system info
        const systemInfo = {
            memory: {
                total: Math.round(process.memoryUsage().heapTotal /1024 / 1024),
                used: Math.round(process.memoryUsage().heapUsed /1024 / 1024),
                unit: 'MB'
            },
            uptime: {
                seconds: Math.round(process.uptime()),
                formatted: formatUptime(process.uptime())
            },
            nodeVersion: process.version,
            platform: process.platform
        }; 

        const healthCheck = {
            status: 'UP',
            timestamp: new Date(),
            database: {
                status: dbStatus,
                name: 'MongoDB',
                host: mongooes.connection.host
            },
            system: systemInfo,
            environment: process.env.NODE_ENV || 'development'
        };
        res.status(200).json(healthCheck)
    } catch(error) {
        res.status(500).json({
            status: 'DOWN',
            timestamp: new Date(),
            error: error.message
        });
    }
});


function formatUptime(seconds)
{
    const days = Math.floor(seconds/ (3600*24));
    const hour = Math.floor((seconds%(3600*24))/3600);
    const minutes = Math.floor((seconds%3600)/60);
    const remainingSeconds = Math.floor(seconds%60);

    const parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hour > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (remainingSeconds > 0) parts.push(`${remainingSeconds}s`);
    return parts.join('  ');
}

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`server is running with port ${PORT}`);
});

