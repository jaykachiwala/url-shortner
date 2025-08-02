import express from 'express';
import urlRoutes from './routes/url.routes';
import sequelize from './config/database';
import URL from './models/url.model';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // React frontend
  credentials: true
}));

app.use(express.json());
app.use('/api', authRoutes);
app.use(urlRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
});


export default app;
