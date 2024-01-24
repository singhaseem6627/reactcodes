const heading = React.createElement("h1",
{ id:"heading",xyz:'abc'},//attributes
"Hello World from React");//children
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);