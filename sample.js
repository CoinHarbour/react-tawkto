
var react-tawkto = require('./react-tawkto.js').default; // Must add default.

// Using it outside a route, with a class method called test().
var thing = new react-tawkto();
thing.test();

// Using it in a router (ReactRouter with Switch).
ReactDOM.render(
(<BrowserRouter>
        <Switch>
                <Route exact path="/helloworld" component={react-tawkto}/>
        </Switch>
</BrowserRouter>)
, document.getElementById("root"));
