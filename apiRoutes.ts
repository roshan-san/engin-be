import express from 'express';
import connectionController from './controllers/connections';
import startupController from './controllers/startups';
import userController from "./controllers/users"; 

const router = express.Router();

router.post('/createuser', userController.createUser); 
router.post('/updateuser', userController.updateUser);
router.post('/checkuser', userController.checkUser);
router.get("/getuser", userController.getUser);
router.get('/users', userController.users);


router.post('/createstartup', startupController.createStartup);

router.post('/sendconnect', connectionController.sendConnection);
router.put('/acceptconnect', connectionController.acceptConnection);

router.get('/connections/:userId', connectionController.getConnections);
router.get("/test", (req, res) => {
  res.json({ exist: true });
});

export default router;