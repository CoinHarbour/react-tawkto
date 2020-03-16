
var react-tawkto = require('./react-tawkto.js').default; // Must add default.

// Using it outside a route, with a class method called test().
var thing = new react-tawkto();
thing.test();

// ************************************************************************
// Using it in a router (ReactRouter with Switch).
ReactDOM.render(
(<BrowserRouter>
        <Switch>
                <Route exact path="/helloworld" component={react-tawkto}/>
        </Switch>
</BrowserRouter>)
, document.getElementById("root"));


// ************************************************************************
//You should be able to use the component in a regular jsx file like this:

var HelloWorld = require('path/to/react-tawkto.jsx');
...    
<div>
    <HelloWorld></HelloWorld>
</div>
Or in a react-router component, with the same require statement like this:

var HelloWorld = require('path/to/react-tawkto.jsx');
....
<Route exact path="/helloworld" component={react-tawkto}/>

        
        
