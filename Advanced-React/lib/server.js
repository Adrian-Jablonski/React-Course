import express from 'express';
import config from './config.js';
import serverRender from './react/renderers/serverRender';
import {data} from './data/testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
	const initialContent = await serverRender();	// Used to render the app from Server if JavaScript is disabled in the browser
	res.render('index', {...initialContent});
});

app.get('/data', (req, res) => {
	res.send(data);
});

app.listen(config.port, function listenHandler() {
	console.info(`Running on ${config.port}`);
});