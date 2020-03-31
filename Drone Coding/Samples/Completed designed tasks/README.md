# Completed designed tasks

### Overview
Using the foundation framework with open language to complete designed tasks and challenges. The foundation framework provides a base layer of functionality for apps and frameworks, including data storage and persistence, text processing, data and time calculations, sorting and filtering, and networking. The classes, protocols, and data types defined by foundation are used throughout the masOS, iOS and etc.

Swift includes modern features like type inference, optional, and closures, which make the syntax concise yet expressive. Swift ensures your code is fast and efficient, while its memory safety and native error handing make the language safe by design. Writing Swift code is interactive and fun in Swift Playgrounds, playgrounds in Xcode, and REPL.

To solve complex problems and write high-performance, readable code, you may use standard library. The Swift standard library defines a base layer of functionality for writing Swift programs, including:


*	Fundamental data types such as Int, Double, and String
* Common data structures such as Array, Dictionary, and Set
*	Global functions such as print(_:separator:terminator:) and abs(_:)
* Protocols, such as Collection and Equatable, that describe common abstractions.
*	Protocols, such as CustomDebugStringConvertible and CustomReflectable, that you use to customize operations that are available to all types.
*	Protocols, such as OptionSet, that you use to provide implementations that would otherwise require boilerplate code.

### Explore the Standard Library
Experiment with Swift standard library types and learn high-level concepts using visualizations and practical examples. Learn how the Swift standard library uses protocols and generics to express powerful constraints. See the link below to get started.

[Swift playground](https://swift.org/)


## Tutorial 

### Precondition:
Use Swift commands to tell Tello to take off and land
To begin with, you need to first take off. You will write Swift commands to tell Tello to take off and land. When using takeOff() and land(), you don’t have to put anything insides the parentheses.

1.	Place your Tello on a flat surface 
2.	Make sure the battery level is above 20%
3.	Enter the first commands takeoff()
4.	Enter wait(seconds: 3) to hold your Tello in the air for 3 seconds
5.	Enter the final commans land()
6.	Tap Run My Code

In order to tell Tello to fly up and down, as you need to specify the distance. Tello measures flying distance in centimeters, so flyUp(cm: 100) means fly up 100 cm from the current height. Here, the distance is relative to the current position, so to use flyUp(cm :100) again Tello will fly up 100cm again.

Before you tell Tello to fly up, make sure there is enough space above it. However, you can tell Tello to fly down as far as you want without worrying about crashing. Tello’s Downward Positioning Sensor keeps monitoring the distance below, and will stop flying when the minimum distance is reached. After fly up and down, you can tell Tello to fly forward and backward by using flyForward(cm: Int) and flyBackward(cm: Int). 

### Fly Tello around the object from the side
After you have learned essential commands, let it fly around the object from the side as daily inspections for space station. Firstly, gather information from Tello’s botton sensor and don’t worry if you don’t get it right the first time. This is your chance to experiment and explore.
Tips
1.	Remember to enter SDK mode
2.	Fly forward until you are close to the object, fly up and fly forward to cross the whole length of object then fly backward and fly down.
3.	Fly along the path as indicated

### Change its orientation and course 
To change its orientation, you may use turnLeft(degree: Int) and turnRight(degree: 
Int) commands. 

Degree insides the parentheses indicate much you want Tello to turn. You can choose between 0 to 3600. If you choose 3600, Tello will complete 10 full turns. 





