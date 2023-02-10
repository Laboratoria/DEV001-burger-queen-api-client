import { 
BrowserRouter as Router, 
Route,
} from 'react-router-dom';


const Router = (path, component) => {
    return (
        <Router>
            <Route path= {path} components ={component}/>
        </Router>

    );
}

export default Router;

