ES5
Ecma script version 5
** the engine used for running the JS codes is " V8 " ** VVVVVVIIIII
V8 is written in C++
henceforth performance wise C++ is the fastest.

-> if we are using es5 for installing a package we need to use "require " but in es6 we use "import"

Data Types in JS:

undefined
number
string
boolean
object -> object ,array,

Loops in JS:
for
while 
do-while
for in

// Array methods:
1. length -it is used either to find the length of the array or to set the length of the array.
2.toString() - it is used to display the contents of the array as a comma separated string.
3. indexing  with either at() or [] - at / [] allows to extract a particular element from the array by using the index number 
of the particular element we want to displayed.
4. join() - it is used to join the various elements of the array but in additon it also allows to determine the sepearator.
5.pop () and push() - they are used  to remove and to add the last element from and to the array respectively.
6.shift() - they are used to remove the first element ans then shif the remaining elements to lower index.
7.unshift()- it is used to add one new element at the beginning of the array and then shifts the remaining elements to the higher index. 
8. delete()- it is used for removing some elements from the array and used in combination with the indexing method so as to be able to access the element to be deleted.
 --> it is better to use the pop()/shift() method instead of the delete method as the delete method leaves empty spaces in the array.

ES6 / ES2015

1.block scope -> let, const
2. template string/literal
3.Default parameters
4. rest/spread ...
5.for..of
6.destructuring
7. arrow function is anonymous function.
 =>
 	abc=()=>{  }
8.syntactical sugar : it a way to make the code more readable by making changes in the syntax.
9.class 

JS is single-threaded, non-blocking one thread

==============================================================================
Library -> .dll, .jar,module,packages.....-> dependencies
Framework -> collection of libraries.
Platform -> combination of the libraries, framework, runtime, 

-> we can run JS in either nodeJS or the browser
-> we can also use nodeJS to create a server

NPM
"underscore": "^1.13.7"  : the three things are major , minor and patch version.
here the ^ caret symbol is present , if we want the latest of minor we use ^ but if want latest of pach version we use tilde ~

-> tree types of dependecies
  1. dependencies - used only in production
   2. dev dependencies- used only in development
    3. optional dependencies.
-> if we want any particular version  of any  dependency then we can delete  the node modules folder and then specify in the dependency section the versio and then do " npm install"
-> npm outdated : how do we know that the version being used is outdated and whst is the latest version

=================================================================================================================================================================================
30/07/25
RESTful API

Service -> accessible using some protocols
Web Service: Service available on the internet -> http/https -> data in the form of SOAP/xml -> GET is used
API : an interface that allows for communication between two services.
example is JDBC , in Java it allows for connecting to the database.

REST  -> http/https -> created using Express.
Get -> Read -> used in two different ways, GET all and Get one.
Post -> Update
Put -> Update
Patch -> Update
Delete -> Delete

We aren't bound to use them for the particular services, we can define what we wanna do with these fucntions. the above the general definitions, we can allow get to maybe update, or put to read,etc.

-->Principle of least priviledge : 

DB vs excel: excel accessible only by one user compared to db which can be accessed by mutiple users.
DB is not actually accessed rather we get access to DB Instance which are available in "Services"

SSL vs TLS
Use https protocol as it gives a certificate to your system , 
how do you get to know if system using ssl or tls.
encryption and/authorization is done using the JWT(JSON Web Token)-> three sections: Header, Payload , Signature.
authentication means identifying the uset
authorization means what are the permissions for the particular user.
Application gives the JWT.
Status code for Throttling is 429 : too many requests.

**************VI***********************
project wouldn't work without this.
CORS: Cross origin Resource Sharing.
we need to set up CORS in API.

======================================================================================================================================================
****OWASP : check about it
DevOps => Automation
DevOps=> Development Operations
Development => Code -> Build + Test -> Artifact
Operations => Artifact -> Deploy
We automate using pipelines given by either JEnkins, or Azure.
DevOps gives the option to create pipelines.
Pipeline that automates the development is called CI (Continuous Integration)
Pipeline that automates the deployment /delivery is called CD ( Continuous Deployment/Delivery)
However coding is still manual.
And there is thing called " Code Quality Check" to ensure that there are no issues in the code. 
And that is set up using some tools that are configured by the DevOps Engineer. Example is SonarQube: it test the code on our side, it is like a gate that ensures only good quality code passes through it.
Mend Bolt is a free developer tool offering Software Composition Analysis (SCA)—it scans projects for open-source libraries, detects known vulnerabilities, and monitors license compliance.
Some logging and monitoring  we use tools like DataDog , for Azure it is Application Insights and for AWS it is CloudWatch and X-rays









