# Intigrating Modules to the System

To intigrate modules which you've designed as components, first go to the "containers" directory. Look inside the sub-directories (assets, departments, employees, records) for the module (container component) you're going to implement. If it's not present in those directories please inform the maintainer, (Yukthi or Yasiru) if it's present, please follow the following instructions when intigrating your component to the system.


## Adding a component inside the container (module) component

If you want to intigrate one of your sub-components inside the container compoenent, follow these steps.
- Create a directory inside the component directory with the container (module) name
- Insert/create your sub-components related to the module inside the directory
- Import those sub-components to your container (module) component  
'

*Ex:- Say you have a module named **Test** and you want to implement a sub-component inside called **TestSub***

*Create container (module) named directory*
```
/components/**Test**/
```  
*Insert your sub-component*
```
/components/Test/**TestSub.js**
```  
*Import and use it inside the container component*
```
"file /containers/records/Test.js"

import TestSub from '../../components/Test/TestSub';
...
    <Testsub />
```


## Adding routes inside the container (module) component

If you want to add a route for another component inside your component, follow these steps.
- Import the **"AuthRoute"** component from the components directory
- Add a route the other component using <AuthRoute ... /> tag (check example)  
'

*Ex:- Implementing a route for **TestSub** in **Test** container (module) component*  
*(**N.B:** adding the trigger (tag with "to="/xxx"" is not covered here)*

*Import **AuthRoute** component*
```
import AuthRoute from '../../components/AuthRoute';
```  
*Use the AuthRoute component for routing*
```
<AuthRoute path="/home/test/test_sub" component={TestSub} props={this.props} />
```  
